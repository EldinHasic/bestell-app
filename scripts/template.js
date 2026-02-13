function init() {
    renderDishes();
    renderBasket();
}

function renderDishes() {
    let BurgerSectionRef = document.getElementById("burgerMenu");
    let PizzaSectionRef = document.getElementById("PizzaMenu");
    for (let MenuIndex = 0; MenuIndex < MyMenu.length; MenuIndex++) {
        if (MyMenu[MenuIndex].category === "Burger") {
            BurgerSectionRef.innerHTML += getBurgerHTML(MenuIndex);
        }
        else if (MyMenu[MenuIndex].category === "Pizza") {
            PizzaSectionRef.innerHTML += getPizzaHTML(MenuIndex);
        }
    }
}

function getBurgerHTML(MenuIndex) {
    return `<div class=" contentLimit dishContainer">
    <div>
        <img class="dish-img" src="${MyMenu[MenuIndex].image}" alt="">
    </div>

    <div class="dishInfo">
        <div class="dishTitleAndPrice">
            <h2>${MyMenu[MenuIndex].name}</h2>
            <p>${MyMenu[MenuIndex].price.toFixed(2)}€</p>
        </div>
        <div>
            <p>${MyMenu[MenuIndex].ingredients}</p>
        </div>
        <div class="addToBasketButtons">
            <img src="./assets/img/added-button.svg" alt="">
            <img onclick="addDishToBasket(${MenuIndex})"src="./assets/img/add-dish-button.svg" alt="">
        </div>
    </div>
</div>`
}


function getPizzaHTML(MenuIndex) {
    return `<div class=" contentLimit dishContainer">
    <div>
        <img class="dish-img" src="${MyMenu[MenuIndex   ].image}" alt="">
    </div>

    <div class="dishInfo">
        <div class="dishTitleAndPrice">
            <h3>${MyMenu[MenuIndex].name}</h3>
            <p>${MyMenu[MenuIndex].price.toFixed(2)}€</p>
        </div>
        <div>
            <p>${MyMenu[MenuIndex].ingredients}</p>
        </div>
        <div class="addToBasketButtons">
            <img src="./assets/img/added-button.svg" alt="">
            <img onclick="addDishToBasket(${MenuIndex})" src="./assets/img/add-dish-button.svg" alt="">
        </div>
    </div>
</div>`
}

