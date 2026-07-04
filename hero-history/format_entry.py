import sys
import re
import json
import os


DATE_PATTERNS = [
    re.compile(r"\[(\d{4})年(\d{1,2})月(\d{1,2})日\]"),
    re.compile(r"(\d{4})年(\d{1,2})月(\d{1,2})日"),
]


def is_date_line(line: str) -> tuple[bool, str]:
    for pat in DATE_PATTERNS:
        m = pat.match(line.strip())
        if m:
            return True, f"{m.group(1)}-{int(m.group(2)):02d}-{int(m.group(3)):02d}"
    return False, ""


def convert_entry(date: str, content: str) -> str:
    # json.dumps ensures \n, \" etc are properly escaped
    content_json = json.dumps(content, ensure_ascii=False)
    return (
        "    {\n"
        f'      "date": "{date}",\n'
        f"      \"content\": {content_json}\n"
        "    },\n"
    )


def parse_text(text: str) -> list[tuple[str, str]]:
    entries = []
    lines = text.strip().splitlines()

    cur_date = ""
    cur_lines: list[str] = []

    for line in lines:
        stripped = line.strip()
        if not stripped:
            if cur_date:
                cur_lines.append("")
            continue

        is_date, parsed = is_date_line(stripped)
        if is_date:
            if cur_date:
                entries.append((cur_date, "\n".join(cur_lines).strip()))
            cur_date = parsed
            cur_lines = []
        else:
            if cur_date:
                cur_lines.append(stripped)

    if cur_date:
        entries.append((cur_date, "\n".join(cur_lines).strip()))

    return entries


def main():
    if len(sys.argv) < 2 or sys.argv[1] in ("-h", "--help"):
        print("用法: python format_entry.py <输入文件> [输出文件]")
        print("若不指定输出文件，默认输出到 input 同目录下的 output.txt")
        return

    input_path = sys.argv[1]

    if len(sys.argv) >= 3:
        output_path = sys.argv[2]
    else:
        base = os.path.splitext(input_path)[0]
        output_path = base + "_output.txt"

    with open(input_path, encoding="utf-8-sig") as f:
        raw = f.read()

    entries = parse_text(raw)
    if not entries:
        print("错误：没有找到任何日期条目。", file=sys.stderr)
        sys.exit(1)

    out_lines = []
    for date, content in entries:
        out_lines.append(convert_entry(date, content))

    result = "\n".join(out_lines)

    with open(output_path, "w", encoding="utf-8") as f:
        f.write(result)

    print(f"完成！共 {len(entries)} 条，已写入 {output_path}")


if __name__ == "__main__":
    main()
