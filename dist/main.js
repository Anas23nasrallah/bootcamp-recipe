/*
Authore: Anas Nasrallah.
Purpose: Proficiency Exam.
Date: 06.05.20
*/

class Renderer {

    renderOne(recipe) {
        const source = $('#recipe-temp').html();
        const template = Handlebars.compile(source)
        let recipeHTML = template(recipe)
        $('#recipes').append(recipeHTML)
    }

    render(data){
        $('#recipes').empty()
        data.forEach(recipe => this.renderOne(recipe))
    }
}

const renderer = new Renderer()

$('#searchBtn').on('click', function () {
    const inputIngredient = $('#ingredientInput').val()
    $('#ingredientInput').val('')
    $.get(`/recipes/${inputIngredient}`, function (recipes) {
        renderer.render(recipes.map(recipe => ({
            title: recipe.title,
            thumbnail: recipe.thumbnail,
            ingredients: recipe.ingredients,
            href: recipe.href
        })))
    })
})

$('#recipes').on('click', 'img', function(){
    const $firstIngredient = $(this).siblings('ul').find('li').first()
    console.log($firstIngredient.text())
})
