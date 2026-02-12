function init() {
    renderBurgerDishes();
    renderPizzaDishes();
}

function renderBurgerDishes() {
    let BurgerSectionRef = document.getElementById("burgerMenu");
    for (let BurgerIndex = 0; BurgerIndex < MyMenu.Burger.length; BurgerIndex++) {
        BurgerSectionRef.innerHTML += getBurgerHTML(BurgerIndex);
    }
}

function renderPizzaDishes() {
    let PizzaSectionRef = document.getElementById("PizzaMenu");
    for (let PizzaIndex = 0; PizzaIndex < MyMenu.Burger.length; PizzaIndex++) {
        PizzaSectionRef.innerHTML += getPizzaHTML(PizzaIndex);
    }
}

function addDishToBasket(BurgerIndex) {
    let BasketSectionRef = document.getElementById("basketDish");
    BasketSectionRef.innerHTML += getDishBasketHTML(BurgerIndex);
}

function getBurgerHTML(BurgerIndex) {
    return `<div class=" contentLimit dishContainer">
    <div>
        <img class="dish-img" src="${MyMenu.Burger[BurgerIndex].image}" alt="">
    </div>

    <div class="dishInfo">
        <div class="dishTitleAndPrice">
            <h2>${MyMenu.Burger[BurgerIndex].name}</h2>
            <p>${MyMenu.Burger[BurgerIndex].price.toFixed(2)}€</p>
        </div>
        <div>
            <p>${MyMenu.Burger[BurgerIndex].ingredients}</p>
        </div>
        <div class="addToBasketButtons">
            <img src="./assets/img/added-button.svg" alt="">
            <img onclick="addDishToBasket(${BurgerIndex})"src="./assets/img/add-dish-button.svg" alt="">
        </div>
    </div>
</div>`
}


function getPizzaHTML(PizzaIndex) {
    return `<div class=" contentLimit dishContainer">
    <div>
        <img class="dish-img" src="${MyMenu.Pizza[PizzaIndex].image}" alt="">
    </div>

    <div class="dishInfo">
        <div class="dishTitleAndPrice">
            <h3>${MyMenu.Pizza[PizzaIndex].name}</h3>
            <p>${MyMenu.Pizza[PizzaIndex].price.toFixed(2)}€</p>
        </div>
        <div>
            <p>${MyMenu.Pizza[PizzaIndex].ingredients}</p>
        </div>
        <div class="addToBasketButtons">
            <img src="./assets/img/added-button.svg" alt="">
            <img src="./assets/img/add-dish-button.svg" alt="">
        </div>
    </div>
</div>`
}

function getDishBasketHTML(BurgerIndex) {
     return `<section class="basket_dish_container">
            <div class="basket_dish_title">
                 <p>1 x ${MyMenu.Burger[BurgerIndex].name}</p>
            </div>

            <article class="basket_nav_bar">
                <div class="basket_interaction">
                    <div>
                        <img src="./assets/img/delete.svg" alt="trash-icon">
                    </div>
                 <div>1</div>
                    <div>
                        <img src="./assets/img/+.svg" alt="">
                    </div>
                </div>
                    <div>${MyMenu.Burger[BurgerIndex].price.toFixed(2)}€</div>
            </article>
     </section>`
}