/* ============================================================
   配置
   ============================================================ */

const SECRET_KEY = 'myedit';
const STORAGE_KEY = 'hero_history_data';

const HERO_LIST = [
    { name: '阿古朵', avatar: '/average-tier/images/阿古朵.jpg' },
    { name: '阿轲', avatar: '/average-tier/images/阿轲.jpg' },
    { name: '艾琳', avatar: '/average-tier/images/艾琳.jpg' },
    { name: '安琪拉', avatar: '/average-tier/images/安琪拉.jpg' },
    { name: '敖隐', avatar: '/average-tier/images/敖隐.jpg' },
    { name: '白起', avatar: '/average-tier/images/白起.jpg' },
    { name: '百里守约', avatar: '/average-tier/images/百里守约.jpg' },
    { name: '百里玄策', avatar: '/average-tier/images/百里玄策.jpg' },
    { name: '扁鹊', avatar: '/average-tier/images/扁鹊.jpg' },
    { name: '不知火舞', avatar: '/average-tier/images/不知火舞.jpg' },
    { name: '蔡文姬', avatar: '/average-tier/images/蔡文姬.jpg' },
    { name: '苍', avatar: '/average-tier/images/苍.jpg' },
    { name: '曹操', avatar: '/average-tier/images/曹操.jpg' },
    { name: '嫦娥', avatar: '/average-tier/images/嫦娥.jpg' },
    { name: '程咬金', avatar: '/average-tier/images/程咬金.jpg' },
    { name: '蚩奼', avatar: '/average-tier/images/蚩奼.jpg' },
    { name: '达摩', avatar: '/average-tier/images/达摩.jpg' },
    { name: '妲己', avatar: '/average-tier/images/妲己.jpg' },
    { name: '大乔', avatar: '/average-tier/images/大乔.jpg' },
    { name: '大司命', avatar: '/average-tier/images/大司命.jpg' },
    { name: '大禹', avatar: '/average-tier/images/大禹.jpg' },
    { name: '狄仁杰', avatar: '/average-tier/images/狄仁杰.jpg' },
    { name: '典韦', avatar: '/average-tier/images/典韦.jpg' },
    { name: '貂蝉', avatar: '/average-tier/images/貂蝉.jpg' },
    { name: '东皇太一', avatar: '/average-tier/images/东皇太一.jpg' },
    { name: '盾山', avatar: '/average-tier/images/盾山.jpg' },
    { name: '朵莉亚', avatar: '/average-tier/images/朵莉亚.jpg' },
    { name: '暃', avatar: '/average-tier/images/暃.jpg' },
    { name: '伽罗', avatar: '/average-tier/images/伽罗.jpg' },
    { name: '干将莫邪', avatar: '/average-tier/images/干将莫邪.jpg' },
    { name: '高渐离', avatar: '/average-tier/images/高渐离.jpg' },
    { name: '戈娅', avatar: '/average-tier/images/戈娅.jpg' },
    { name: '公孙离', avatar: '/average-tier/images/公孙离.jpg' },
    { name: '宫本武藏', avatar: '/average-tier/images/宫本武藏.jpg' },
    { name: '关羽', avatar: '/average-tier/images/关羽.jpg' },
    { name: '鬼谷子', avatar: '/average-tier/images/鬼谷子.jpg' },
    { name: '海诺', avatar: '/average-tier/images/海诺.jpg' },
    { name: '海月', avatar: '/average-tier/images/海月.jpg' },
    { name: '韩信', avatar: '/average-tier/images/韩信.jpg' },
    { name: '后羿', avatar: '/average-tier/images/后羿.jpg' },
    { name: '花木兰', avatar: '/average-tier/images/花木兰.jpg' },
    { name: '黄忠', avatar: '/average-tier/images/黄忠.jpg' },
    { name: '姬小满', avatar: '/average-tier/images/姬小满.jpg' },
    { name: '姜子牙', avatar: '/average-tier/images/姜子牙.jpg' },
    { name: '金蝉', avatar: '/average-tier/images/金蝉.jpg' },
    { name: '镜', avatar: '/average-tier/images/镜.jpg' },
    { name: '橘右京', avatar: '/average-tier/images/橘右京.jpg' },
    { name: '铠', avatar: '/average-tier/images/铠.jpg' },
    { name: '空空儿', avatar: '/average-tier/images/空空儿.jpg' },
    { name: '狂铁', avatar: '/average-tier/images/狂铁.jpg' },
    { name: '莱西奥', avatar: '/average-tier/images/莱西奥.jpg' },
    { name: '兰陵王', avatar: '/average-tier/images/兰陵王.jpg' },
    { name: '澜', avatar: '/average-tier/images/澜.jpg' },
    { name: '老夫子', avatar: '/average-tier/images/老夫子.jpg' },
    { name: '李白', avatar: '/average-tier/images/李白.jpg' },
    { name: '李信', avatar: '/average-tier/images/李信.jpg' },
    { name: '李元芳', avatar: '/average-tier/images/李元芳.jpg' },
    { name: '廉颇', avatar: '/average-tier/images/廉颇.jpg' },
    { name: '刘邦', avatar: '/average-tier/images/刘邦.jpg' },
    { name: '刘备', avatar: '/average-tier/images/刘备.jpg' },
    { name: '刘禅', avatar: '/average-tier/images/刘禅.jpg' },
    { name: '鲁班大师', avatar: '/average-tier/images/鲁班大师.jpg' },
    { name: '鲁班七号', avatar: '/average-tier/images/鲁班七号.jpg' },
    { name: '露娜', avatar: '/average-tier/images/露娜.jpg' },
    { name: '吕布', avatar: '/average-tier/images/吕布.jpg' },
    { name: '马超', avatar: '/average-tier/images/马超.jpg' },
    { name: '马可波罗', avatar: '/average-tier/images/马可波罗.jpg' },
    { name: '蒙恬', avatar: '/average-tier/images/蒙恬.jpg' },
    { name: '蒙犽', avatar: '/average-tier/images/蒙犽.jpg' },
    { name: '梦奇', avatar: '/average-tier/images/梦奇.jpg' },
    { name: '米莱狄', avatar: '/average-tier/images/米莱狄.jpg' },
    { name: '芈月', avatar: '/average-tier/images/芈月.jpg' },
    { name: '明世隐', avatar: '/average-tier/images/明世隐.jpg' },
    { name: '墨子', avatar: '/average-tier/images/墨子.jpg' },
    { name: '哪吒', avatar: '/average-tier/images/哪吒.jpg' },
    { name: '娜可露露', avatar: '/average-tier/images/娜可露露.jpg' },
    { name: '牛魔', avatar: '/average-tier/images/牛魔.jpg' },
    { name: '女娲', avatar: '/average-tier/images/女娲.jpg' },
    { name: '盘古', avatar: '/average-tier/images/盘古.jpg' },
    { name: '裴擒虎', avatar: '/average-tier/images/裴擒虎.jpg' },
    { name: '桑启', avatar: '/average-tier/images/桑启.jpg' },
    { name: '上官婉儿', avatar: '/average-tier/images/上官婉儿.jpg' },
    { name: '少司缘', avatar: '/average-tier/images/少司缘.jpg' },
    { name: '沈梦溪', avatar: '/average-tier/images/沈梦溪.jpg' },
    { name: '司空震', avatar: '/average-tier/images/司空震.jpg' },
    { name: '司马懿', avatar: '/average-tier/images/司马懿.jpg' },
    { name: '苏烈', avatar: '/average-tier/images/苏烈.jpg' },
    { name: '孙膑', avatar: '/average-tier/images/孙膑.jpg' },
    { name: '孙策', avatar: '/average-tier/images/孙策.jpg' },
    { name: '孙权', avatar: '/average-tier/images/孙权.jpg' },
    { name: '孙尚香', avatar: '/average-tier/images/孙尚香.jpg' },
    { name: '孙悟空', avatar: '/average-tier/images/孙悟空.jpg' },
    { name: '太乙真人', avatar: '/average-tier/images/太乙真人.jpg' },
    { name: '王昭君', avatar: '/average-tier/images/王昭君.jpg' },
    { name: '武则天', avatar: '/average-tier/images/武则天.jpg' },
    { name: '西施', avatar: '/average-tier/images/西施.jpg' },
    { name: '夏侯惇', avatar: '/average-tier/images/夏侯惇.jpg' },
    { name: '夏洛特', avatar: '/average-tier/images/夏洛特.jpg' },
    { name: '项羽', avatar: '/average-tier/images/项羽.jpg' },
    { name: '小乔', avatar: '/average-tier/images/小乔.jpg' },
    { name: '雅典娜', avatar: '/average-tier/images/雅典娜.jpg' },
    { name: '亚连', avatar: '/average-tier/images/亚连.jpg' },
    { name: '亚瑟', avatar: '/average-tier/images/亚瑟.jpg' },
    { name: '杨戬', avatar: '/average-tier/images/杨戬.jpg' },
    { name: '杨玉环', avatar: '/average-tier/images/杨玉环.jpg' },
    { name: '瑶', avatar: '/average-tier/images/瑶.jpg' },
    { name: '曜', avatar: '/average-tier/images/曜.jpg' },
    { name: '弈星', avatar: '/average-tier/images/弈星.jpg' },
    { name: '嬴政', avatar: '/average-tier/images/嬴政.jpg' },
    { name: '影', avatar: '/average-tier/images/影.jpg' },
    { name: '虞姬', avatar: '/average-tier/images/虞姬.jpg' },
    { name: '元歌', avatar: '/average-tier/images/元歌.jpg' },
    { name: '元流之子(刺客)', avatar: '/average-tier/images/元流之子(刺客).jpg' },
    { name: '元流之子(法师)', avatar: '/average-tier/images/元流之子(法师).jpg' },
    { name: '元流之子(辅助)', avatar: '/average-tier/images/元流之子(辅助).jpg' },
    { name: '元流之子(射手)', avatar: '/average-tier/images/元流之子(射手).jpg' },
    { name: '元流之子(坦克)', avatar: '/average-tier/images/元流之子(坦克).jpg' },
    { name: '云缨', avatar: '/average-tier/images/云缨.jpg' },
    { name: '云中君', avatar: '/average-tier/images/云中君.jpg' },
    { name: '张飞', avatar: '/average-tier/images/张飞.jpg' },
    { name: '张良', avatar: '/average-tier/images/张良.jpg' },
    { name: '赵怀真', avatar: '/average-tier/images/赵怀真.jpg' },
    { name: '赵云', avatar: '/average-tier/images/赵云.jpg' },
    { name: '甄姬', avatar: '/average-tier/images/甄姬.jpg' },
    { name: '钟馗', avatar: '/average-tier/images/钟馗.jpg' },
    { name: '钟无艳', avatar: '/average-tier/images/钟无艳.jpg' },
    { name: '周瑜', avatar: '/average-tier/images/周瑜.jpg' },
    { name: '诸葛亮', avatar: '/average-tier/images/诸葛亮.jpg' },
    { name: '猪八戒', avatar: '/average-tier/images/猪八戒.jpg' },
    { name: '庄周', avatar: '/average-tier/images/庄周.jpg' }
];

/* ============================================================
   状态
   ============================================================ */

let allHeroes = [];
let historyData = {};
let selectedHeroName = '';
let isEditMode = false;
let editingIndex = -1;

/* ============================================================
   DOM 引用
   ============================================================ */

const $ = (id) => document.getElementById(id);
const openPickerBtn    = $('openPicker');
const selectedHeroEl  = $('selectedHero');
const editModeBadge   = $('editModeBadge');
const exportBtn       = $('exportBtn');
const importBtn       = $('importBtn');
const importFile      = $('importFile');
const heroInfo        = $('heroInfo');
const heroAvatar      = $('heroAvatar');
const heroNameEl      = $('heroName');
const heroCount       = $('heroCount');
const addEntryBtn     = $('addEntryBtn');
const timeline        = $('timeline');
const emptyState      = $('emptyState');
const modal           = $('modal');
const searchInput     = $('searchInput');
const heroGrid        = $('heroGrid');
const confirmSelect   = $('confirmSelect');

/* ============================================================
   工具函数
   ============================================================ */

function debounce(fn, delay) {
    let timer;
    return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(() => fn.apply(this, args), delay);
    };
}

/* ============================================================
   数据加载
   ============================================================ */

async function loadHeroes() {
    // 使用内嵌的英雄列表，避免跨目录 fetch 问题
    allHeroes = HERO_LIST;
}

async function loadHistory() {
    try {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored) {
            historyData = JSON.parse(stored);
            return;
        }
    } catch (e) {
        console.warn('localStorage 读取失败:', e);
    }
    // 兜底：从 history.json 文件读取
    try {
        const res = await fetch('./history.json?v=' + Date.now());
        if (res.ok) {
            const data = await res.json();
            if (Object.keys(data).length > 0) {
                historyData = data;
                return;
            }
        }
    } catch (e) {
        console.warn('history.json 加载失败:', e);
    }
    historyData = {};
}function saveHistory() {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(historyData));
    } catch (e) {
        console.warn('localStorage 写入失败:', e);
    }
}

/* ============================================================
   编辑模式检测
   ============================================================ */

function checkEditMode() {
    const params = new URLSearchParams(window.location.search);
    isEditMode = params.get('key') === SECRET_KEY;

    if (isEditMode) {
        editModeBadge.classList.remove('hidden');
        exportBtn.classList.remove('hidden');
        importBtn.classList.remove('hidden');
        addEntryBtn.classList.remove('hidden');
    }
}

/* ============================================================
   弹窗
   ============================================================ */

let tempSelected = '';

function openModal() {
    tempSelected = selectedHeroName;
    modal.classList.remove('hidden');
    renderGrid();
}

function closeModal() {
    modal.classList.add('hidden');
}

function renderGrid() {
    const keyword = searchInput.value || '';
    heroGrid.innerHTML = '';

    allHeroes
        .filter(h => h.name.includes(keyword))
        .forEach(h => {
            const div = document.createElement('div');
            div.className = 'hero-item';
            if (h.name === tempSelected) {
                div.classList.add('selected');
            }
            const img = document.createElement('img');
            img.dataset.src = h.avatar;
            img.alt = h.name;
            img.decoding = 'async';

            const nameDiv = document.createElement('div');
            nameDiv.textContent = h.name;

            div.appendChild(img);
            div.appendChild(nameDiv);
            div.onclick = () => {
                tempSelected = h.name;
                renderGrid();
            };
            heroGrid.appendChild(div);
        });

    // 用 IntersectionObserver 做图片懒加载：仅当图片接近视口时才设置 src
    const lazyImages = heroGrid.querySelectorAll('img[data-src]');
    const imgObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                const src = img.dataset.src;
                if (src) {
                    img.src = src;
                }
                img.removeAttribute('data-src');
                imgObserver.unobserve(img);
            }
        });
    }, { rootMargin: '200px' });

    lazyImages.forEach(img => imgObserver.observe(img));
}

function confirmSelection() {
    selectedHeroName = tempSelected;
    updateSelectedHeroText();
    renderTimeline();
    closeModal();
}

function updateSelectedHeroText() {
    if (!selectedHeroName) {
        selectedHeroEl.textContent = '当前英雄：未选择';
        heroInfo.classList.add('hidden');
        return;
    }
    selectedHeroEl.textContent = '当前英雄：' + selectedHeroName;
    heroInfo.classList.remove('hidden');
    const hero = allHeroes.find(h => h.name === selectedHeroName);
    if (hero) {
        heroAvatar.src = hero.avatar;
        heroAvatar.alt = hero.name;
    }
    heroNameEl.textContent = selectedHeroName;
}

/* ============================================================
   时间轴渲染
   ============================================================ */

function renderTimeline() {
    timeline.innerHTML = '';

    if (!selectedHeroName) {
        emptyState.textContent = '请选择一个英雄查看调整历史';
        return;
    }

    const entries = historyData[selectedHeroName];

    if (!entries || entries.length === 0) {
        emptyState.textContent = selectedHeroName + ' 暂无调整记录';
        heroCount.textContent = '共 0 次调整';
        return;
    }

    heroCount.textContent = '共 ' + entries.length + ' 次调整';

    // 按日期倒序排列
    const sorted = [...entries].sort((a, b) => b.date.localeCompare(a.date));

    // 按年份分组
    let currentYear = '';
    sorted.forEach((entry, idx) => {
        const year = entry.date.slice(0, 4);
        if (year !== currentYear) {
            currentYear = year;
            const div = document.createElement('div');
            div.className = 'year-divider';
            div.textContent = year + '年';
            timeline.appendChild(div);
        }
        const card = document.createElement('div');
        card.className = 'entry-card' + (isEditMode ? ' edit-mode' : '');

        const dateDiv = document.createElement('div');
        dateDiv.className = 'entry-date';
        dateDiv.textContent = entry.date;

        const contentDiv = document.createElement('div');
        contentDiv.className = 'entry-content';
        contentDiv.textContent = entry.content;

        card.appendChild(dateDiv);
        card.appendChild(contentDiv);

        if (isEditMode) {
            const actions = document.createElement('div');
            actions.className = 'entry-actions';

            const editBtn = document.createElement('button');
            editBtn.className = 'btn-edit';
            editBtn.textContent = '编辑';
            editBtn.onclick = (e) => {
                e.stopPropagation();
                startEdit(selectedHeroName, idx);
            };

            const delBtn = document.createElement('button');
            delBtn.className = 'btn-delete';
            delBtn.textContent = '删除';
            delBtn.onclick = (e) => {
                e.stopPropagation();
                deleteEntry(selectedHeroName, idx);
            };

            actions.appendChild(editBtn);
            actions.appendChild(delBtn);
            card.appendChild(actions);
        }

        timeline.appendChild(card);
    });
}

/* ============================================================
   编辑功能
   ============================================================ */

function startAdd() {
    if (!selectedHeroName) {
        alert('请先选择一个英雄');
        return;
    }
    editingIndex = -1;
    showEditor('', '');
}

function startEdit(heroName, index) {
    const entries = historyData[heroName] || [];
    const entry = entries[index];
    if (!entry) return;
    editingIndex = index;
    showEditor(entry.date, entry.content);
}

function showEditor(date, content) {
    const existing = document.querySelector('.editor-inline');
    if (existing) existing.remove();

    const editor = document.createElement('div');
    editor.className = 'editor-inline';
    editor.innerHTML = '<input type="date" id="editorDate" value="' + date + '"><textarea id="editorContent" placeholder="调整内容...">' + content + '</textarea><div class="form-actions"><button class="btn-save" id="editorSave">保存</button><button class="btn-cancel" id="editorCancel">取消</button></div>';

    timeline.insertBefore(editor, timeline.firstChild);

    document.getElementById('editorSave').onclick = saveEditor;
    document.getElementById('editorCancel').onclick = cancelEditor;

    document.getElementById('editorDate').focus();
}

function saveEditor() {
    const dateInput = document.getElementById('editorDate');
    const contentInput = document.getElementById('editorContent');
    const date = dateInput.value;
    const content = contentInput.value.trim();

    if (!date) {
        alert('请选择日期');
        dateInput.focus();
        return;
    }
    if (!content) {
        alert('请输入调整内容');
        contentInput.focus();
        return;
    }

    if (!historyData[selectedHeroName]) {
        historyData[selectedHeroName] = [];
    }

    if (editingIndex === -1) {
        historyData[selectedHeroName].push({ date, content });
    } else {
        historyData[selectedHeroName][editingIndex] = { date, content };
    }

    editingIndex = -1;
    saveHistory();
    renderTimeline();
}

function cancelEditor() {
    editingIndex = -1;
    const editor = document.querySelector('.editor-inline');
    if (editor) editor.remove();
}

function deleteEntry(heroName, index) {
    if (!confirm('确定要删除这条调整记录吗？')) return;

    const entries = historyData[heroName];
    if (!entries) return;

    entries.splice(index, 1);
    if (entries.length === 0) {
        delete historyData[heroName];
    }

    saveHistory();
    renderTimeline();
}

/* ============================================================
   导出 / 导入
   ============================================================ */

function exportData() {
    const blob = new Blob([JSON.stringify(historyData, null, 2)], {
        type: 'application/json'
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'hero-history.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

function importData(file) {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (e) => {
        try {
            const data = JSON.parse(e.target.result);
            if (typeof data !== 'object' || Array.isArray(data)) {
                throw new Error('格式不正确');
            }
            for (const key of Object.keys(data)) {
                if (!Array.isArray(data[key])) {
                    throw new Error('"' + key + '" 的值不是数组');
                }
                for (const item of data[key]) {
                    if (!item.date || !item.content) {
                        throw new Error('"' + key + '" 中的数据缺少 date 或 content 字段');
                    }
                }
            }
            if (!confirm('导入将替换当前所有数据，确定吗？')) return;
            historyData = data;
            saveHistory();
            renderTimeline();
            updateSelectedHeroText();
            alert('导入成功！共 ' + Object.keys(data).length + ' 个英雄的数据');
        } catch (err) {
            alert('导入失败：' + err.message);
        }
    };
    reader.readAsText(file);
}

/* ============================================================
   初始化
   ============================================================ */

async function init() {
    checkEditMode();
    await loadHistory();
    await loadHeroes();

    if (allHeroes.length === 0) {
        emptyState.textContent = '英雄列表加载失败，请检查网络';
        return;
    }

    renderGrid();

    openPickerBtn.onclick = openModal;
    confirmSelect.onclick = confirmSelection;
    searchInput.oninput = debounce(renderGrid, 300);
    exportBtn.onclick = exportData;
    importBtn.onclick = () => importFile.click();
    importFile.onchange = (e) => {
        importData(e.target.files[0]);
        e.target.value = '';
    };
    addEntryBtn.onclick = startAdd;

    modal.onclick = (e) => {
        if (e.target === modal) closeModal();
    };
}

init();


