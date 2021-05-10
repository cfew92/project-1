import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe [] = [
    new Recipe('Mac and Cheese',
    'Ooey-gooey and so yummy!',
    'https://www.momontimeout.com/wp-content/uploads/2018/10/homemade-mac-and-cheese-recipe-titled-500x500.jpg',
    [
new Ingredient('Cheddar Cheese', 1),
new Ingredient('Panko Bread Crumbs', 1),

    ]),
    new Recipe('Classic Hamburger',
    'You cant make a better burger than this',
    'https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/165384.jpg',
    [
      new Ingredient('Ground Beef', 1),
      new Ingredient('Hamburger Buns', 8)
    ])
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }
addIngredientsToShoppingList(ingredients: Ingredient[]) {
  this.slService.addIngredients(ingredients);

}
}
