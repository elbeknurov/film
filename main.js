const template = document.querySelector("#template");
const elDiv = document.querySelector(".card");
const elSearch = document.querySelector(".search");

let film = [];
fetch(`https://www.omdbapi.com/?s=spider&plot=full&apikey=e2f9a30`)
  .then((res) => res.json())
  .then((data) => {
    film = data.Search;
    getFunction(film);
  });

function getFunction(query) {
  const fragment = document.createDocumentFragment();

  query.forEach((film) => {
    const constTemplate = template.content.cloneNode(true);
    const img = constTemplate.querySelector(".poster");
    const title = constTemplate.querySelector(".title");
    const year = constTemplate.querySelector(".year");
    const type = constTemplate.querySelector(".series");

    img.src = film.Poster;
    title.textContent = film.Title;
    year.textContent = film.Year;
    type.textContent = film.Type;
    fragment.appendChild(constTemplate);
  });
  elDiv.appendChild(fragment);
}

// elSearch.addEventListener("input", () => {
//   const value = elSearch.value;
//   const filteredData = data.filter((film) => {
//     if (title.toLowerCase().match(value.toLowerCase())) {
//       return film;
//     }
//   });
//   render(filteredData);
// });
