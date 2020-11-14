const express = require('express')
const nunjucks = require('nunjucks')

const server = express()
const recipes = require("./data")


/*-- configuração nunjucks --*/
server.use(express.static('public'))
server.set("view engine", "njk")
nunjucks.configure("views", {
    express: server,
    autoescape: false,
    noCache: true
})
/*--- ROTAS ---*/

/*-- Página principal --*/
server.get("/", function(req, res) {
    return res.render("index", {recipes}) // chave recipes
})

/*-- Página sobre --*/
server.get("/about", function(req, res) {
    return res.render("about")
})

/*-- Página receitas --*/
server.get("/recipes", function(req, res) {
    return res.render("recipes", {recipes})
})

/*-- Página receita --*/
server.get("/recipes/:index", function(req, res) {
    const recipeIndex = req.params.index
    const recipe = recipes.find(function(recipe) {
        if(recipe[recipeIndex] === recipeIndex) {return true}
    })
    
    return res.render("recipe", { recipe: recipe[recipeIndex] }) //chave recipe
})


/*-- Página 404 --*/ 
server.use(function(req, res) {
    res.status(404).render("not-found");
  }); 

  /*-- servidor --*/
server.listen(3000, function(){
    console.log("server is running")
})
