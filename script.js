const ramenData = [
    {
        name: "Shin Ramyun",
        flavor: "Spicy beef broth",
        spice: "spicy",
        rating: 4.8,
        description: "The most famous Korean ramen with rich spicy flavor and chewy noodles.",
        image: "https://image.nongshim.com/non/pro/1653457953255.jpg"
    },
    {
        name: "Buldak Bokkeum Myeon",
        flavor: "Extremely spicy chicken",
        spice: "extreme",
        rating: 4.7,
        description: "Viral Korean fire noodle challenge ramen. No soup, just intense heat.",
        image: "https://www.samyangfoods.com/upload/product/202107/20210722104523311021.png"
    },
    {
        name: "Jin Ramen (Mild)",
        flavor: "Mild beef broth",
        spice: "mild",
        rating: 4.4,
        description: "Balanced flavor loved by many Koreans. Great for those who prefer less heat.",
        image: "https://ottogi.co.kr/pds/product/2023-05-18_723303666.jpg"
    },
    {
        name: "Neoguri",
        flavor: "Spicy seafood broth",
        spice: "spicy",
        rating: 4.5,
        description: "Famous for thick, udon-style noodles and a real piece of kelp inside.",
        image: "https://image.nongshim.com/non/pro/1653460490722.jpg"
    },
    {
        name: "Samyang Ramen",
        flavor: "Classic ham & beef broth",
        spice: "medium",
        rating: 4.2,
        description: "Korea’s first instant ramen. Features a nostalgic, savory ham flavor.",
        image: "https://www.samyangfoods.com/upload/product/202107/20210721163457173001.png"
    },
    {
        name: "Jjapaghetti",
        flavor: "Black bean sauce (Chajang)",
        spice: "mild",
        rating: 4.9,
        description: "Sweet and savory black bean noodles. A must-try non-spicy option.",
        image: "https://image.nongshim.com/non/pro/1653458285521.jpg"
    },
    {
        name: "Paldo Bibimmyeon",
        flavor: "Sweet and sour spicy cold noodles",
        spice: "medium",
        rating: 4.6,
        description: "Served cold! Perfect for summer with a refreshing apple-infused spicy sauce.",
        image: "https://paldofood.co.kr/pds/product/2021-03-24_112001.png"
    },
    {
        name: "Ansungtangmyun",
        flavor: "Savory miso-beef broth",
        spice: "medium",
        rating: 4.3,
        description: "Known for its 'comfortable' taste. Great for adding your own ingredients.",
        image: "https://image.nongshim.com/non/pro/1653459146592.jpg"
    },
    {
        name: "Yukgaejang (Cup)",
        flavor: "Traditional spicy beef soup",
        spice: "medium",
        rating: 4.5,
        description: "The best-selling cup ramen in Korea. Famous for its thin, springy noodles.",
        image: "https://image.nongshim.com/non/pro/1653459846383.jpg"
    },
    {
        name: "Sesame Ramen",
        flavor: "Spicy sesame with egg block",
        spice: "spicy",
        rating: 4.7,
        description: "Comes with a savory sesame oil and an egg block for a rich, nutty flavor.",
        image: "https://ottogi.co.kr/pds/product/2023-05-18_722830846.jpg"
    }
];

const ramenGrid = document.getElementById('ramen-grid');
const filterBtns = document.querySelectorAll('.filter-btn');

function generateStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    let stars = '★'.repeat(fullStars);
    if (hasHalfStar) stars += '½';
    return stars.padEnd(5, '☆');
}

function displayRamen(items) {
    ramenGrid.innerHTML = '';
    items.forEach(ramen => {
        const card = document.createElement('div');
        card.className = 'ramen-card';
        card.innerHTML = `
            <img src="${ramen.image}" alt="${ramen.name}">
            <div class="card-content">
                <h3>${ramen.name}</h3>
                <p class="flavor">Flavor: ${ramen.flavor}</p>
                <div class="rating">${generateStars(ramen.rating)} ${ramen.rating}</div>
                <div>
                    <span class="spice-level spice-${ramen.spice}">${ramen.spice}</span>
                </div>
                <p class="description">${ramen.description}</p>
            </div>
        `;
        ramenGrid.appendChild(card);
    });
}

// Initial display
displayRamen(ramenData);

// Filtering logic
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Update active button
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filterValue = btn.getAttribute('data-filter');
        
        if (filterValue === 'all') {
            displayRamen(ramenData);
        } else {
            const filteredData = ramenData.filter(item => item.spice === filterValue);
            displayRamen(filteredData);
        }
    });
});
