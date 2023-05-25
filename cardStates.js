let cardsArray = document.querySelectorAll(".card");

for (let index = 0; index < cardsArray.length; index++) {
    let card = cardsArray[index];
    card.classList.add("id-" + index);
    card.addEventListener("mouseover", function() {
        let activeCard = document.querySelector("." + card.classList[1]);
        activeCard.classList.add("hovered");
    })
    card.addEventListener("mouseleave", function() {
        let activeCard = document.querySelector("." + card.classList[1]);
        activeCard.classList.remove("hovered");
    })
    
}