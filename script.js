// Fonction pour récupérer la liste des fruits depuis le fichier JSON
async function fetchFruits() {
    const response = await fetch('fruits.json');
    const fruits = await response.json();
    return fruits;
}

// Fonction pour afficher la liste des fruits
function displayFruits(fruits) {
    const fruitList = document.getElementById('fruitList');
    fruitList.innerHTML = '';

    fruits.forEach(fruit => {
        const li = document.createElement('li');
        li.textContent = fruit.name;
        li.onclick = () => {
            window.location.href = `fruit-detail.html?id=${fruit.id}`;
        };
        fruitList.appendChild(li);
})
}

// Fonction de filtrage des fruits
function filterFruits(fruits, query) {
    return fruits.filter(fruit => fruit.name.toLowerCase().includes(query.toLowerCase()));
}

// Initialisation de la page
async function init() {
    const fruits = await fetchFruits();

    // Afficher la liste des fruits
    displayFruits(fruits);

    // Recherche
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', () => {
        const filteredFruits = filterFruits(fruits, searchInput.value);
        displayFruits(filteredFruits);
    });
}

init();
