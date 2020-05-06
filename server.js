/*
Authore: Anas Nasrallah.
Purpose: Proficiency Exam.
Date: 06.05.20
*/

const express = require('express');
const path = require('path')
const urllib = require('urllib')

const app = express()

app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, 'node_modules')))

const rawRecipesURL = 'https://recipes-goodness.herokuapp.com/recipes/'

const port = 8080
app.listen(port, function(){
    console.log("Server running on port " + port)
})

app.get('/sanity', function(req, res){
    res.send('Cool!')
})

app.get('/recipes/:ingredient', function(req, res){

    const ingredient = req.params.ingredient.toLowerCase();
    const ingredientURL = rawRecipesURL + ingredient
    
    urllib.request(ingredientURL, function (err, response) {
        const recipes = JSON.parse(response.toString()).results
        res.send(recipes)
    })    
})