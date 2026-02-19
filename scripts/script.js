let basket = [];

function init() {
    renderDishes();
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

function renderBasket() {
    let BasketSectionRef = document.getElementById("basketDish");
    BasketSectionRef.innerHTML = "";
    for (let BasketIndex = 0; BasketIndex < basket.length; BasketIndex++) {
        BasketSectionRef.innerHTML += getDishBasketHTML(BasketIndex);
    }
}

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
    renderTotalPrice();
}

function decreaseOrDeleteDishFromBasket(BasketIndex) {
    if (basket[BasketIndex].amount > 1) {
        basket[BasketIndex].amount -= 1;
    }
    else {
        basket.splice(BasketIndex, 1);
    }
    renderBasket();
    renderTotalPrice();
}

function increaseDishAmount(BasketIndex) {
    basket[BasketIndex].amount += 1;
    renderBasket();
    renderTotalPrice();
}

function renderTotalPrice() {
    let total = document.getElementById('order-price');
    total.innerHTML = "";
    let subTotal = 0;
    let deliveryFee = 4.99;
    let totalPrice = 0;
    for (let basketIndex = 0; basketIndex < basket.length; basketIndex++) {
        const oneMeal = basket[basketIndex];
        subTotal += oneMeal.price * oneMeal.amount;
    }
    if (basket.length === 0) {
        deliveryFee = 0;
    }
    else if (subTotal > 50) {
        totalPrice = subTotal;
        deliveryFee = 0;
    } else {
        totalPrice = subTotal + deliveryFee
    }
    total.innerHTML += getBasketPriceTemplate(subTotal, totalPrice, deliveryFee);
}
