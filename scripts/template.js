 function renderBurgerDishes() {
    let BurgerSectionRef = document.getElementById("burgerMenu");
    for (let BurgerIndex = 0; BurgerIndex < MyMenu.Burger.length; BurgerIndex++) {
        BurgerSectionRef.innerHTML += getdishHTML(BurgerIndex);
    }
 }  
 
