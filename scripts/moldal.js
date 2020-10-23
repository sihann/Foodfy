const modalOverlay = document.querySelector('.modal-overlay');
const recipesCards = document.querySelectorAll('.recipes-cards');

//  adiciona uma class e/ou remove
//  fecha o modal
//  troca imagens e textos

for (let recipeCard of recipesCards) {
    recipeCard.addEventListener("click", function(){
        
        const imgId = recipeCard.getAttribute('id');
        const titleRecipe = recipeCard.querySelector('h3').innerHTML;
        const chef = recipeCard.querySelector('p').innerHTML;

        modalOverlay.classList.add('active')

        modalOverlay.querySelector('img').src = `/assets/${imgId}.png`
        modalOverlay.querySelector('h2').innerHTML = titleRecipe
        modalOverlay.querySelector('p').innerHTML =  chef
    })
}

document.querySelector(".modal-close").addEventListener("click", function(){
    modalOverlay.classList.remove('active')
})




