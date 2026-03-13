
const lottoNumbers = document.querySelector('.lotto-numbers');
const generateBtn = document.getElementById('generate-btn');
const historyList = document.getElementById('history-list');
const themeBtn = document.getElementById('theme-btn');

const generateNumbers = () => {
    const numbers = new Set();
    while (numbers.size < 6) {
        numbers.add(Math.floor(Math.random() * 45) + 1);
    }
    return Array.from(numbers).sort((a, b) => a - b);
};

const displayNumbers = (numbers) => {
    const numberDivs = lottoNumbers.querySelectorAll('.number');
    numberDivs.forEach((div, index) => {
        div.textContent = numbers[index];
    });
};

const addToHistory = (numbers) => {
    const li = document.createElement('li');
    li.textContent = numbers.join(', ');
    historyList.prepend(li);
    updateLocalStorage();
};

const updateLocalStorage = () => {
    localStorage.setItem('lottoHistory', historyList.innerHTML);
};

const loadHistory = () => {
    const history = localStorage.getItem('lottoHistory');
    if (history) {
        historyList.innerHTML = history;
    }
};

const toggleTheme = () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    themeBtn.textContent = newTheme === 'dark' ? 'Light Mode' : 'Dark Mode';
};

const initTheme = () => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    themeBtn.textContent = savedTheme === 'dark' ? 'Light Mode' : 'Dark Mode';
};

generateBtn.addEventListener('click', () => {
    const numbers = generateNumbers();
    displayNumbers(numbers);
    addToHistory(numbers);
});

themeBtn.addEventListener('click', toggleTheme);

loadHistory();
initTheme();
