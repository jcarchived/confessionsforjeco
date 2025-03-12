const poemContainer = document.querySelector('.poem-container');

const poems = [
    { title: "Molding", content: "The first one.", image: "1.png" },
    { title: "thinking 'bout u", content: "The worst one", image: "2.png" },
    { title: "The Dark Side of the Moon", content: "The best one", image: "3.png" },
    { title: "On Juices, Ekibens, and Complicated Overthinking", content: "Did you notice it spells your name.", image: "4.png" },
    { title: "The Detective", content: "About your ex", image: "5.png" },
    { title: "decode", content: "I was overthinking it", image: "6.png" },
    { title: "fangirl", content: "That time in convocations", image: "7.png" },
    { title: "Picture You", content: "You were my only thought", image: "8.png" },
];

// Function to display poems
function loadPoems() {
    poems.forEach(poem => {
        const poemElement = document.createElement('div');
        poemElement.classList.add('poem');
        poemElement.innerHTML = `
            <img src="${poem.image}" alt="${poem.title}">
            <div class="poem-content">
                <h2>${poem.title}</h2>
                <p>${poem.content}</p>
            </div>
        `;
        poemContainer.appendChild(poemElement);
    });
}

// Load poems on page load
document.addEventListener('DOMContentLoaded', loadPoems);