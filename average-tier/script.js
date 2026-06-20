let data;
let chart;

// ⭐ 多选英雄状态
let selectedHeroes = [];      // 已确认选择
let tempSelectedHeroes = [];  // 弹窗临时选择
let showMarkPoints = true;   // 极值标记显示状态

// =======================
// 防抖工具函数
// =======================
function debounce(fn, delay) {
    let timer;
    return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(() => fn.apply(this, args), delay);
    };
}

// =======================
// 1. 读取 JSON 数据
// =======================
fetch("./heroes.json?v=1.0.0")
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

    chart = echarts.init(
        document.getElementById("chart"),
        null,
        {
            renderer: "canvas"
        }
    );

    document.getElementById("openPicker")
        .addEventListener("click", openModal);

    document.getElementById("searchInput")
        .addEventListener("input", debounce(renderGrid, 300));

    document.getElementById("rankSearchInput")
        .addEventListener("input", debounce(renderRanking, 300));

    document.getElementById("clearSelect")
        .addEventListener("click", clearSelection);

    document.getElementById("toggleMark")
        .addEventListener("click", toggleMarkPoints);
    
    document.getElementById("confirmSelect")
        .addEventListener("click", confirmSelection);

    renderGrid();
    renderRanking();

    // ⭐ 默认选一个英雄
    if (data.heroes.length > 0) {

        selectedHeroes = [data.heroes[0]];
        tempSelectedHeroes = [...selectedHeroes];

        updateSelectedHeroText();
        renderChart();
    }
}


// =======================
// 打开 / 关闭弹窗
// =======================
function openModal() {

    tempSelectedHeroes = [...selectedHeroes];

    document.getElementById("modal")
        .classList.remove("hidden");

    renderGrid();
    updatePreview();
}

function closeModal() {
    document.getElementById("modal").classList.add("hidden");
}


// =======================
// ⭐ 英雄列表（带选中状态）
// =======================
function renderGrid() {

    const grid = document.getElementById("heroGrid");
    const keyword = document.getElementById("searchInput").value || "";

    grid.innerHTML = "";

    data.heroes
        .filter(hero => hero.name.includes(keyword))
        .forEach(hero => {

            const isSelected = tempSelectedHeroes.some(h => h.name === hero.name);

            const div = document.createElement("div");
            div.className = "hero-item";

            div.style.border = isSelected
                ? "2px solid #1677ff"
                : "1px solid transparent";

            div.innerHTML = `
                <img src="${hero.avatar}">
                <div>${hero.name}</div>
            `;

            div.onclick = () => toggleHero(hero);

            grid.appendChild(div);
        });
}


// =======================
// ⭐ 多选切换
// =======================
function toggleHero(hero) {

    const index =
        tempSelectedHeroes.findIndex(
            h => h.name === hero.name
        );

    if (index > -1) {
        tempSelectedHeroes.splice(index, 1);
    } else {
        tempSelectedHeroes.push(hero);
    }

    renderGrid();
    updatePreview();
}

function updatePreview() {

    const preview =
        document.getElementById(
            "selectedPreview"
        );

    if (!preview) return;

    if (tempSelectedHeroes.length === 0) {

        preview.innerText =
            "未选择任何英雄";

        return;
    }

    preview.innerText =
        "已选："
        + tempSelectedHeroes
            .map(h => h.name)
            .join("、");
}

function confirmSelection() {

    selectedHeroes = [...tempSelectedHeroes];

    updateSelectedHeroText();

    chart.clear();

    renderChart();

    closeModal();
}


// =======================
// ⭐ 显示已选英雄
// =======================
function updateSelectedHeroText() {

    const el =
        document.getElementById(
            "selectedHero"
        );

    if (selectedHeroes.length === 0) {

        el.innerText =
            "当前英雄：未选择";

        return;
    }

    if (selectedHeroes.length <= 5) {

        el.innerText =
            "已选："
            + selectedHeroes
                .map(h => h.name)
                .join("、");

        return;
    }

    el.innerText =
        `已选 ${selectedHeroes.length} 个英雄`;
}


// =======================
// ⭐ 清空选择（关键修复）
// =======================
function clearSelection() {

    selectedHeroes = [];
    tempSelectedHeroes = [];

    updateSelectedHeroText();

    renderGrid();

    updatePreview();

    chart.clear();

    renderChart();
}

// =======================
// 极值标记切换
// =======================
function toggleMarkPoints() {
    showMarkPoints = !showMarkPoints;
    const btn = document.getElementById("toggleMark");
    if (showMarkPoints) {
        btn.textContent = "隐藏极值";
        btn.classList.remove("active");
    } else {
        btn.textContent = "显示极值";
        btn.classList.add("active");
    }
    renderChart();
}


// =======================
// ⭐ 全局平均Rank
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
// ⭐ 单英雄平均
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
// ⭐ 排行榜
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
// ⭐ 排行榜渲染
// =======================
function renderRanking() {

    const panel = document.getElementById("rankPanel");
    const keyword = document.getElementById("rankSearchInput")?.value || "";

    const list = getHeroRanking()
        .filter(item => item.name.includes(keyword));

    panel.innerHTML = list.map(item => `
        <div class="rank-item">
            <div style="width:40px;">#${item.rank}</div>
            <img src="${item.avatar}">
            <div style="flex:1">${item.name}</div>
            <div>${item.avg.toFixed(2)}</div>
        </div>
    `).join("");
}


// =======================
// ⭐ 图表核心（多曲线）
// =======================
function renderChart() {

    // ⭐ 空状态保护
    if (selectedHeroes.length === 0) {
        chart.clear();
        chart.setOption({
            title: {
                text: "请选择英雄进行对比",
                left: "center",
                top: "center"
            }
        });
        return;
    }

    const avgData = calcAverage();

    const series = selectedHeroes.map(hero => ({
        name: hero.name,
        type: "line",
        data: hero.ranks,
        smooth: true,
        symbol: "circle",
        symbolSize: 5,

        lineStyle: {
            width: 2
        },

        markPoint: {

            symbol: "pin",

            symbolSize: 40,

            label: {
                color: "#fff",
                fontSize: 10
            },

            data: [

                {
                    type: "min",
                    name: "最强"
                },

                {
                    type: "max",
                    name: "最弱"
                }

            ]
        }

    }));

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


    if (!showMarkPoints) {
        series.forEach(s => delete s.markPoint);
    }

    chart.setOption({
        title: {
            text: "英雄强度对比分析",
            left: "center"
        },

        tooltip: {

            trigger: "axis",

            confine: true
        },

        legend: {

            data: [
                ...selectedHeroes.map(h => h.name),
                "全局平均Rank"
            ],

            type: "scroll",

            top: 30,

            left: 10,

            right: 10
        },

        grid: {

            left: window.innerWidth < 768 ? 20 : 60,

            right: window.innerWidth < 768 ? 10 : 30,

            top: window.innerWidth < 768 ? 60 : 100,

            bottom: window.innerWidth < 768 ? 20 : 50,

            containLabel: true
        },

        xAxis: {

            type: "category",

            data: data.months,

            axisLabel: {

                hideOverlap: true
            }
        },

        yAxis: {
            type: "value",
            inverse: true,
            min: 1
        },

        series
    }, {
        notMerge: true
    });
}


// =======================
// resize
// =======================
window.addEventListener("resize", () => {

    if (!chart) return;

    chart.resize();

    renderChart();

});
