// app.js

const API_URL = 'https://randomuser.me/api/?results=30'; // Replace with your API endpoint

// Function to create a card
function createCard(user) {
    const card = document.createElement('div');
    card.classList.add('card');

    card.innerHTML = `
        <img src="${user.picture.large}" alt="Profile Picture" class="profile-img">
        <h3>${user.name.first} ${user.name.last}</h3>
        <p><strong>Work:</strong> Software Engineer</p> <!-- Placeholder, replace with actual data if available -->
        <p><strong>Country:</strong> ${user.location.country}</p>
        <p><strong>Location:</strong> ${user.location.city}, ${user.location.state}</p>
        <p><strong>Contact:</strong> ${user.phone}</p>
    `;

    return card;
}

// Function to fetch data and populate the cards
async function loadCards() {
    const container = document.getElementById('card-container');

    try {
        const response = await fetch(API_URL);
        const data = await response.json();

        data.results.forEach(user => {
            const card = createCard(user);
            container.appendChild(card);
        });
    } catch (error) {
        console.error('Error fetching user data:', error);
    }
}

// Load the cards on page load
window.onload = loadCards;
