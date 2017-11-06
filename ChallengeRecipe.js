var recipe = { //object for recipe
Title : "Cake",
Servings : 3,
Ingredients : ["Eggs", "Flour"]
};

fill(26, 26, 26);
textSize(20);
text(recipe.Title, 10, 23);
text("Serves: " + recipe.Servings, 10, 55);
text("Ingredients: " + recipe.Ingredients, 10, 85);
