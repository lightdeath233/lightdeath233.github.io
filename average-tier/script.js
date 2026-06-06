let data;
let chart;

// ⭐ 单选 → 多选
let selectedHeroes = [];

// =======================
// 1. 读取 JSON 数据
// =======================
fetch("./heroes.json")
    .then(res => res.json())
    .then(json => {
        data = json;
        init();
    })
    .catch(err => {
        console.error("数据加载失败：", err);
    });


// =======================
// 2. 初始化
// =======================
function init() {

    chart = echarts.init(document.getElementById("chart"));

    document.getElementById("openPicker")
        .addEventListener("click", openModal);

    document.getElementById("searchInput")
        .addEventListener("input", renderGrid);

    document.getElementById("rankSearchInput")
        .addEventListener("input", renderRanking);

    document.getElementById("modal")
        .addEventListener("click", (e) => {
            if (e.target.id === "modal") {
                closeModal();
            }
        });

    renderGrid();
    renderRanking();

    // ⭐ 默认选一个英雄
    if (data.heroes.length > 0) {
        selectedHeroes.push(data.heroes[0]);
        updateSelectedHeroText();
        renderChart();
    }
}


// =======================
// 3. 打开 / 关闭弹窗
// =======================
function openModal() {
    document.getElementById("modal").classList.remove("hidden");
}

function closeModal() {
    document.getElementById("modal").classList.add("hidden");
}


// =======================
// 4. 英雄列表（搜索）
// =======================
function renderGrid() {

    const grid = document.getElementById("heroGrid");
    const keyword = document.getElementById("searchInput").value || "";

    grid.innerHTML = "";

    data.heroes
        .filter(hero => hero.name.includes(keyword))
        .forEach(hero => {

            const div = document.createElement("div");
            div.className = "hero-item";

            div.innerHTML = `
                <img src="${hero.avatar}" alt="${hero.name}">
                <div>${hero.name}</div>
            `;

            div.onclick = () => {
                toggleHero(hero);
                closeModal();
            };

            grid.appendChild(div);
        });
}


// =======================
// ⭐ 5. 多英雄选择 / 取消
// =======================
function toggleHero(hero) {

    const index = selectedHeroes.findIndex(h => h.name === hero.name);

    if (index > -1) {
        selectedHeroes.splice(index, 1); // 取消选择
    } else {
        selectedHeroes.push(hero); // 添加选择
    }

    updateSelectedHeroText();
    renderChart();
}


// =======================
// ⭐ 6. 显示已选英雄
// =======================
function updateSelectedHeroText() {

    const el = document.getElementById("selectedHero");

    if (selectedHeroes.length === 0) {
        el.innerText = "当前英雄：未选择";
        return;
    }

    el.innerText =
        "已选：" + selectedHeroes.map(h => h.name).join("、");
}


// =======================
// 7. 全局平均Rank
// =======================
function calcAverage() {

    const len = data.months.length;
    const avg = [];

    for (let i = 0; i < len; i++) {

        let sum = 0;
        let count = 0;

        data.heroes.forEach(hero => {

            const v = hero.ranks[i];

            if (v !== null && v !== undefined) {
                sum += v;
                count++;
            }
        });

        avg.push(count ? sum / count : null);
    }

    return avg;
}


// =======================
// 8. 单英雄平均Rank
// =======================
function calcHeroAverage(hero) {

    let sum = 0;
    let count = 0;

    hero.ranks.forEach(v => {
        if (v !== null && v !== undefined) {
            sum += v;
            count++;
        }
    });

    return count ? sum / count : null;
}


// =======================
// 9. 排行榜数据
// =======================
function getHeroRanking() {

    return data.heroes
        .map(hero => ({
            name: hero.name,
            avatar: hero.avatar,
            avg: calcHeroAverage(hero)
        }))
        .filter(h => h.avg !== null)
        .sort((a, b) => a.avg - b.avg)
        .map((item, index) => ({
            ...item,
            rank: index + 1
        }));
}


// =======================
// 10. 渲染排行榜
// =======================
function renderRanking() {

    const panel = document.getElementById("rankPanel");
    const keyword = document.getElementById("rankSearchInput")?.value || "";

    const list = getHeroRanking()
        .filter(item => item.name.includes(keyword));

    panel.innerHTML = "";

    list.forEach(item => {

        const avgText = item.avg?.toFixed(2) ?? "-";

        panel.innerHTML += `
            <div class="rank-item">
                <div style="width:40px;">#${item.rank}</div>
                <img src="${item.avatar}" alt="">
                <div style="flex:1">${item.name}</div>
                <div>${avgText}</div>
            </div>
        `;
    });
}


// =======================
// ⭐ 11. 图表渲染（多曲线核心）
// =======================
function renderChart() {

    const avgData = calcAverage();

    const series = [];

    // ⭐ 多英雄曲线
    selectedHeroes.forEach(hero => {

        series.push({
            name: hero.name,
            type: "line",
            data: hero.ranks,
            smooth: true,
            symbol: "circle",
            symbolSize: 5,
            lineStyle: { width: 2 }
        });
    });

    // ⭐ 全局平均
    series.push({
        name: "全局平均Rank",
        type: "line",
        data: avgData,
        smooth: true,
        symbol: "none",
        lineStyle: {
            type: "dashed",
            width: 2
        }
    });

    chart.setOption({
        title: {
            text: "英雄强度对比分析",
            left: "center"
        },

        tooltip: {
            trigger: "axis"
        },

        legend: {
            data: [
                ...selectedHeroes.map(h => h.name),
                "全局平均Rank"
            ],
            top: 30
        },

        grid: {
            left: "3%",
            right: "4%",
            bottom: "3%",
            containLabel: true
        },

        xAxis: {
            type: "category",
            data: data.months
        },

        yAxis: {
            type: "value",
            inverse: true,
            min: 1
        },

        series
    });
}


// =======================
// 12. 自适应
// =======================
window.addEventListener("resize", () => {
    if (chart) chart.resize();
});