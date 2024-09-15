import catalog from "./catalog.json" with {type: 'json'};

const catalogList = document.querySelector(".catalog__list");
console.log(catalog)


function setCards(arr) {
  catalog.forEach((el, i) => {
    const cardClass = i === 4 ? "large" : "";
    const html = `
        <li class="catalog__item catalog__item_${cardClass}">
              <a href="" class="catalog__link card card_${cardClass}">
                <div class="card__header">
                  <h4 class="card__title">${el.name}</h4>
                  <p class="card__subtitle">Area ${el.square} m<sup><small>2</small></sup></p>
                </div>
                <dl class="card__info card__info_${cardClass}">
                  <dt class="card__term">rooms</dt>
                  <dd class="card__definition">${el.rooms}</dd>
                  <dt class="card__term">bedrooms</dt>
                  <dd class="card__definition">${el.bedRooms}</dd>
                  <dt class="card__term">floors</dt>
                  <dd class="card__definition">${el.floor}</dd>
                </dl>
                <div class="card__img-wrap card__img-wrap_${cardClass}">
                  <img
                    src="./images/images/cards-images/${i + 1}.jpg"
                    alt="${el.name}"
                    class="card__img card__img_${cardClass}"
                  />
                </div>
              </a>
            </li>
      `;
    catalogList.insertAdjacentHTML("beforeend", html);
  });
}

setCards(catalog)