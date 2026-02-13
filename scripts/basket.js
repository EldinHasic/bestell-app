let basket = [];

function addDishToBasket(MenuIndex) {
    let myDish = MyMenu[MenuIndex];

    let existingDish = basket.find(dish => dish.name === myDish.name);

    if (existingDish) {
        existingDish.amount += 1;
    } else {
        basket.push(
            {
                name: myDish.name,
                price: myDish.price,
                amount: 1
            }
        );
    }
    renderBasket();
}

function renderBasket() {
    let BasketSectionRef = document.getElementById("basketDish");
    BasketSectionRef.innerHTML = "";
    for (let BasketIndex = 0; BasketIndex < basket.length; BasketIndex++) {
        BasketSectionRef.innerHTML += getDishBasketHTML(BasketIndex);
    }
}

function getDishBasketHTML(BasketIndex) {
     return `<section class="basket_dish_container">
            <div class="basket_dish_title">
                 <p>${basket[BasketIndex].name}</p>
            </div>

            <article class="basket_nav_bar">
                <div class="basket_interaction">
                    <div>
                        <img src="./assets/img/delete.svg" alt="trash-icon">
                    </div>
                    <div>
                        <p>${basket[BasketIndex].amount}</p>
                    </div>
                    <div>
                        <img src="./assets/img/+.svg" alt="">
                    </div>
                </div>
                    <div>${basket[BasketIndex].price.toFixed(2)}€</div>
            </article>
     </section>`
}