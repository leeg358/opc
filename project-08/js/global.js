const recipe = {
    "@context":
      "https://keviniscooking.com/roasted-brussels-sprouts-balsamic-vinegar-honey/",
    "@type": "Recipe",


    description:
      "I just recently moved into my own apartment and decided to finally learn how to cook. This is one of the first things that I learned to make (thanks to my aunt!), and now is a dish I make quite often. It is so delicious and easy to make!",
    recipeIngredient: [
      "INGREDIENTS:",
      "1 1/2 lbs brussel sprouts",
      "3 tbsp olive oil ",
      "3/4 tsp salt",
      "1/2 tsp ground black pepper",
      "2 tbsp balsamic glaze",
    ],
  
    name: "Roasted Brussels Sprouts with Balsamic",    
    totalTime: "COOK TIME: 25min",
    recipeInstructions:[
        "INSTRUCTIONS: Preheat oven to 425°F. Line a baking sheet with aluminum foil. Trim and half the brussels sprouts. Toss the brussels sprouts in a large bowl with olive oil, salt, and black pepper. Transfer the sprouts to the baking sheet and roast until tender and caramelized (about 20 minutes). Broil the brussels sprouts for 2-3 more minutes. Place on a plate and drizzle balsamic glaze over. Serve!",
      ],
 
    recipeYield: "YIELD: 8 servings",

  };
  
  const titleElement = document.getElementById("title");
  
  titleElement.innerText = recipe.name;
  
  document.getElementById("description").innerText = recipe.description;

  document.getElementById("time").innerText = recipe.totalTime;

  document.getElementById("yield").innerText = recipe.recipeYield;

  document.getElementById("ingredients").innerText = recipe.recipeIngredient;

  document.getElementById("instructions").innerText = recipe.recipeInstructions;

