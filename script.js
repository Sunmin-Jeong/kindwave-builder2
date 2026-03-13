const ramenData = [
    {
        name: "Shin Ramyun",
        flavor: "Spicy beef broth",
        spice: "spicy",
        rating: 4.8,
        description: "The most famous Korean ramen with rich spicy flavor and chewy noodles.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Shin_Ramyun_Pack.png/640px-Shin_Ramyun_Pack.png"
    },
    {
        name: "Buldak Bokkeum Myeon",
        flavor: "Extremely spicy chicken",
        spice: "extreme",
        rating: 4.7,
        description: "Viral Korean fire noodle challenge ramen. No soup, just intense heat.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Samyang_Buldak_Bokkeum_Myeon.jpg/640px-Samyang_Buldak_Bokkeum_Myeon.jpg"
    },
    {
        name: "Jin Ramen (Mild)",
        flavor: "Mild beef broth",
        spice: "mild",
        rating: 4.4,
        description: "Balanced flavor loved by many Koreans. Great for those who prefer less heat.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Jin_Ramen_Mild.png/640px-Jin_Ramen_Mild.png"
    },
    {
        name: "Neoguri",
        flavor: "Spicy seafood broth",
        spice: "spicy",
        rating: 4.5,
        description: "Famous for thick, udon-style noodles and a real piece of kelp inside.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Nongshim_Neoguri.png/640px-Nongshim_Neoguri.png"
    },
    {
        name: "Samyang Ramen",
        flavor: "Classic ham & beef broth",
        spice: "medium",
        rating: 4.2,
        description: "Korea’s first instant ramen. Features a nostalgic, savory ham flavor.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Samyang_Ramyun.png/640px-Samyang_Ramyun.png"
    },
    {
        name: "Jjapaghetti",
        flavor: "Black bean sauce (Chajang)",
        spice: "mild",
        rating: 4.9,
        description: "Sweet and savory black bean noodles. A must-try non-spicy option.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Nongshim_Chapagetti.png/640px-Nongshim_Chapagetti.png"
    },
    {
        name: "Paldo Bibimmyeon",
        flavor: "Sweet and sour spicy cold noodles",
        spice: "medium",
        rating: 4.6,
        description: "Served cold! Perfect for summer with a refreshing apple-infused spicy sauce.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Paldo_Bibim_Men.png/640px-Paldo_Bibim_Men.png"
    },
    {
        name: "Ansungtangmyun",
        flavor: "Savory miso-beef broth",
        spice: "medium",
        rating: 4.3,
        description: "Known for its 'comfortable' taste. Great for adding your own ingredients.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Nongshim_Ansungtangmyun.png/640px-Nongshim_Ansungtangmyun.png"
    },
    {
        name: "Yukgaejang (Cup)",
        flavor: "Traditional spicy beef soup",
        spice: "medium",
        rating: 4.5,
        description: "The best-selling cup ramen in Korea. Famous for its thin, springy noodles.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Nongshim_Yukgaejang_Cup.png/640px-Nongshim_Yukgaejang_Cup.png"
    },
    {
        name: "Sesame Ramen",
        flavor: "Spicy sesame with egg block",
        spice: "spicy",
        rating: 4.7,
        description: "Comes with a savory sesame oil and an egg block for a rich, nutty flavor.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Ottogi_Sesame_Ramen.png/640px-Ottogi_Sesame_Ramen.png"
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
