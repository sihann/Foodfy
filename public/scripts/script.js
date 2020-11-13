const recipesCards = document.querySelectorAll('.recipes-cards')
const recipesContent = document.querySelectorAll('.content')
const buttons  = document.querySelectorAll('.button')


for (let recipeCard of recipesCards) {
    recipeCard.addEventListener("click", function(){
    let recipeIndex = recipeCard.getAttribute('id')
    window.location.href = `/recipes/${recipeIndex}`    
    
    })
}

for (let button of buttons) {
    button.addEventListener('click', function() {
        if (button.innerHTML === 'ESCONDER') {
            button.innerHTML = 'MOSTRAR'
        } else {
            button.innerHTML = 'ESCONDER'
        }
    })
}

for (const button in buttons) {
    buttons[button].addEventListener('click', function() {
        if (recipesContent[button].classList.contains('hide')) {
            recipesContent[button].classList.remove('hide')
        } else {
            recipesContent[button].classList.add('hide')
        } 
    })
}