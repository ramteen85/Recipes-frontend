import { Injectable } from '@angular/core';
import axios from 'axios';
import { RecipeService } from '../recipes/recipe.service';
import { AuthService } from '../auth/auth.service';

@Injectable({providedIn: 'root'})
export class DataStorageService {
  constructor(private recipesService: RecipeService, private authService: AuthService) {}

  storeRecipes() {
    const recipes = this.recipesService.getRecipes();
    axios.put('http://localhost:8080/recipes/save', recipes, {
      headers: {
        token: this.authService.getToken()
      }
    })
    .then(response => {
      console.log(response);
    });
  }

  fetchRecipes() {

    axios.get('http://localhost:8080/recipes/get', {
      headers: {
        token: this.authService.getToken()
      }
    })
    .then(response => {
      return response.data.recipes.map(recipe => {
        return {...recipe, ingredients: recipe.ingredients ? recipe.ingredients : []};
      });
    })
    .then(recipes => {
      console.log(recipes);
      this.recipesService.setRecipes(recipes);
      return recipes;
    });
  }

}
