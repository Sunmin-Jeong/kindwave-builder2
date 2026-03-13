const ramenData = [
    {
        name: "Shin Ramyun",
        flavor: "Spicy beef broth",
        spice: "spicy",
        rating: 4.8,
        description: "The most famous Korean ramen with rich spicy flavor.",
        image: "https://images.unsplash.com/photo-1591814448473-7f47c215c2c0?auto=format&fit=crop&q=80&w=800"
    },
    {
        name: "Buldak Bokkeum Myeon",
        flavor: "Extremely spicy chicken",
        spice: "extreme",
        rating: 4.7,
        description: "Viral Korean fire noodle challenge ramen.",
        image: "https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?auto=format&fit=crop&q=80&w=800"
    },
    {
        name: "Jin Ramen (Mild)",
        flavor: "Mild beef broth",
        spice: "mild",
        rating: 4.4,
        description: "Balanced flavor loved by many Koreans.",
        image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&q=80&w=800"
    },
    {
        name: "Neoguri",
        flavor: "Spicy seafood broth",
        spice: "spicy",
        rating: 4.5,
        description: "Famous for thick noodles and seafood taste.",
        image: "https://images.unsplash.com/photo-1612927601601-6638404737ce?auto=format&fit=crop&q=80&w=800"
    },
    {
        name: "Samyang Ramen",
        flavor: "Classic spicy broth",
        spice: "medium",
        rating: 4.2,
        description: "One of Korea’s oldest ramen brands.",
        image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&q=80&w=800"
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
