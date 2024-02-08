
// const postsElem = document.querySelector(".posts");

// let url = "https://pixabay.com/api/?key=24090419-925e057925ba4cc124682bb5f&q=${}";

// fetch(url)
//     .then(res => res.json())
//     .then(data => {
//         data.hits.forEach(post => {
//             postsElem.innerHTML += `
//                 <div class="post">
//                     <img class="pics" src="${post.largeImageURL}">
//                 </div>`;
//         });
//     });


const postsElem = document.querySelector(".posts");
const searchInput = document.querySelector(".search");

function fetchImages(searchQuery) {
    let url = `https://pixabay.com/api/?key=24090419-925e057925ba4cc124682bb5f&q=${searchQuery}`;

    fetch(url)
        .then(res => res.json())
        .then(data => {
            postsElem.innerHTML = "";

            data.hits.forEach(post => {
                postsElem.innerHTML += `
                    <div class="post">
                        <img class="pics" src="${post.webformatURL}">
                    </div>`;
            });
        });
}

fetchImages("");
searchInput.addEventListener("input", function() {
    fetchImages(this.value.trim());
});