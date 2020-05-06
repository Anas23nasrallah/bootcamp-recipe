/*
Authore: Anas Nasrallah.
Purpose: Proficiency Exam.
Date: 06.05.20
*/

$('#searchBtn').on('click', function () {
    const inputIngredient = $('#ingredientInput').val()
    $('#ingredientInput').val('')
    $.get(`/recipes/${inputIngredient}`, function (recipes) {
        console.log(recipes)
        console.log(recipes[0].ingredients)
        console.log(recipes[0].title)
        console.log(recipes[0].thumbnail)
        console.log(recipes[0].href)

    })
})
