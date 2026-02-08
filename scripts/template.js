function renderBurgerDishes() {
    let BurgerSectionRef = document.getElementById("burgerMenu");
    for (let BurgerIndex = 0; BurgerIndex < MyMenu.Burger.length; BurgerIndex++) {
        BurgerSectionRef.innerHTML += getdishHTML(BurgerIndex);
    }
}

function getdishHTML(BurgerIndex) {
return `<div class=" contentLimit dishContainer">
    <div>
        <img class="dish-img" src="${MyMenu.Burger[BurgerIndex].image}" alt="">
    </div>

    <div class="dishInfo">
        <div class="dishTitleAndPrice">
            <h3>${MyMenu.Burger[BurgerIndex].name}</h3>
            <p>${MyMenu.Burger[BurgerIndex].price.toFixed(2)}€</p>
        </div>
        <div>
            <p>${MyMenu.Burger[BurgerIndex].ingredients}</p>
        </div>
        <div class="addToBasketButtons">
            <img src="./assets/img/added-button.svg" alt="">
            <img src="./assets/img/add-dish-button.svg" alt="">
        </div>
    </div>
</div>`
}