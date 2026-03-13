
const lottoNumbers = document.querySelector('.lotto-numbers');
const generateBtn = document.getElementById('generate-btn');
const historyList = document.getElementById('history-list');

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

generateBtn.addEventListener('click', () => {
    const numbers = generateNumbers();
    displayNumbers(numbers);
    addToHistory(numbers);
});

loadHistory();
