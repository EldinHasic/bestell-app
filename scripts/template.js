
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
        <div class="addToBasketButton">
            <img onclick="addDishToBasket(${MenuIndex})" src="./assets/img/add-dish-button.svg" onmouseover="this.src='./assets/img/add-dish-button-hover.svg';" onmouseout="this.src='./assets/img/add-dish-button.svg';" alt="add-dish-to-basket-button">
        </div>
    </div>
</div>`
}


function getPizzaHTML(MenuIndex) {
    return `<div class=" contentLimit dishContainer">
    <div>
        <img class="dish-img" src="${MyMenu[MenuIndex].image}" alt="">
    </div>

    <div class="dishInfo">
        <div class="dishTitleAndPrice">
            <h3>${MyMenu[MenuIndex].name}</h3>
            <p>${MyMenu[MenuIndex].price.toFixed(2)}€</p>
        </div>
        <div>
            <p>${MyMenu[MenuIndex].ingredients}</p>
        </div>
        <div class="addToBasketButton">
            <img onclick="addDishToBasket(${MenuIndex})" src="./assets/img/add-dish-button.svg" onmouseover="this.src='./assets/img/add-dish-button-hover.svg';" onmouseout="this.src='./assets/img/add-dish-button.svg';" alt="add-dish-to-basket-button">
        </div>
    </div>
</div>`
}

function getDishBasketHTML(BasketIndex) {
    return `<section class="basket_dish_container">
            <div class="basket_dish_title">
                 <p>${basket[BasketIndex].name}</p>
            </div>

            <article class="basket_nav_bar">
                <div class="basket_interaction">
                    <div>
                        <img onclick="decreaseOrDeleteDishFromBasket(${BasketIndex})" src="./assets/img/delete.svg" alt="trash-icon">
                    </div>
                    <div>
                        <p>${basket[BasketIndex].amount}</p>
                    </div>
                    <div>
                        <img onclick="increaseDishAmount(${BasketIndex})" src="./assets/img/+.svg" alt="">
                    </div>
                </div>
                    <div>${basket[BasketIndex].price.toFixed(2)}€</div>
            </article>
     </section>`
}

function getBasketPriceTemplate(subTotal, totalPrice, deliveryFee) {
    return `<div class="price_calculation">
                            <article class="subTotal">
                                <div>Subtotal</div>
                                <div>${subTotal.toFixed(2)}€</div>
                            </article>
                            <article class="deliveryFee">
                                <div>Delivery Fee</div>
                                <div>${deliveryFee.toFixed(2)}€</div>
                            </article>
                            <hr>
                            <article class="totalPrice">
                                <div>Total</div>
                                <div>${totalPrice.toFixed(2)}€</div>
                            </article>
                        </div>`
}