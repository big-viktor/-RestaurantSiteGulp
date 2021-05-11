const burger = document.getElementById("burger"); 
const menuContent = document.querySelector('.menu_content')

if(menuContent){
    const menuBody = document.querySelector('menu_body');
    burger.addEventListener("click", function (e) {
    menuContent.classList.add("_active");
    menuBody.classList.add("_active");

});

}

const priceSoupe = document.querySelector('.price-list_soupe');
const pricePizza = document.querySelector('.price-list_pizza');
const pricePasta = document.querySelector('.price-list_pasta');
const priceDesert = document.querySelector('.price-list_desert');
const priceWine = document.querySelector('.price-list_wine');
const priceBeer = document.querySelector('.price-list_beer');
const priceDrinks = document.querySelector('.price-list_drinks');

const menu = [priceSoupe, pricePizza, pricePasta, priceDesert, priceWine, priceBeer, priceDrinks, ];


const removes = () =>{
    for (let i = 0; i < menu.length; i++) {
        let menuI = menu[i]; 
         console.log(menuI);
         menuI.classList.add('delete_class');
     }
};
removes();

SOUPE.addEventListener("click", function (e) {
    removes();
    menu[0].classList.remove("delete_class");
});
PIZZA.addEventListener("click", function (e) {
    removes();
    menu[1].classList.remove("delete_class");
});
PASTA.addEventListener("click", function (e) {
    removes();
    menu[2].classList.remove("delete_class");
});
DESERT.addEventListener("click", function (e) {
    removes();
    menu[3].classList.remove("delete_class");
});
WINE.addEventListener("click", function (e) {
    removes();
    menu[4].classList.remove("delete_class");
});
BEER.addEventListener("click", function (e) {
    removes();
    menu[5].classList.remove("delete_class");
});
DRINKS.addEventListener("click", function (e) {
    removes();
    menu[6].classList.remove("delete_class");
});

// const priceList = menu.push(price)
console.log(priceSoupe)
console.log(menu)
