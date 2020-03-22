import { Injectable } from '@angular/core';
import { Recipe } from './recipes.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';

@Injectable()
export class RecipeService {

  recipesChanged = new Subject<Recipe[]>();

  // private recipes: Recipe[] = [
  //   new Recipe(
  //   'Lasagne',
  //   'an exquisite lasagne - yummy and cheesy!',
  //   'https://img.taste.com.au/Xs9fiXZc/taste/2010/01/our-favourite-lasagne-118950-2.jpg',
  //   [
  //     new Ingredient('Meat', 2),
  //     new Ingredient('Cheese', 10),
  //     new Ingredient('Lasagne Sheet', 4)
  //   ]),
  //   new Recipe(
  //   'Burger',
  //   'burgers how they should be - stacked!',
  //   'https://i.ytimg.com/vi/L6yX6Oxy_J8/maxresdefault.jpg',
  //   [
  //     new Ingredient('Meat', 2),
  //     new Ingredient('Cheese', 2),
  //     new Ingredient('Tomato', 3),
  //     new Ingredient('Lettuce', 1),
  //     new Ingredient('Red Onion', 1),
  //     new Ingredient('French Fries', 50),
  //     new Ingredient('Buns', 2)
  //   ])
  // ];

  private recipes: Recipe[] = [];

  constructor(private slService: ShoppingListService) {}

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes.slice()[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
