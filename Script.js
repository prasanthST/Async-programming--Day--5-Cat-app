const BASE_URL = 'https://cataas.com/cat/'; 
function fetchDfromAPI() {
    return new Promise((resolve, reject) => {
        fetch('https://cataas.com/api/cats')
            .then(res => {
                if (!res.ok) {
                    throw new Error('Network response not OK');
                }
                return res.json();
            })
            .then(data => resolve(data))
            .catch(error => reject(error));
    });
}

function createCards(cat) {
    const card = document.createElement("div");
    card.className = "col-md-4 mb-2"; 
    card.innerHTML = `
        <div class="card p-0">
            <img src="${BASE_URL}${cat._id}" alt="Cat" class="card-img-top cat-image">
            <div class="card-body">
                <h5 class="card-title">Cat ID: ${cat._id}</h5>
                <p class="card-text"> Name: ${cat.tags[0] || 'No Name'}</p>
            </div>
        </div>
    `;
    return card;
}

function loadCats() { 
    fetchDfromAPI()
        .then(cats => displayCats(cats))
        .catch(error => console.error("Error fetching cat data", error));
}

function displayCats(cats) {
    const catsContainer = document.getElementById("catsContainer");
    cats.forEach(cat => {
        const catCard = createCards(cat);
        catsContainer.appendChild(catCard);
    });
}


window.onload = loadCats;