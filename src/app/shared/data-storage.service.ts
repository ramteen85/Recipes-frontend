import { Injectable } from '@angular/core';
import axios from 'axios';
import { RecipeService } from '../recipes/recipe.service';
import { AuthService } from '../auth/auth.service';
import { environment } from 'src/environments/environment';

@Injectable({providedIn: 'root'})
export class DataStorageService {
  constructor(private recipesService: RecipeService, private authService: AuthService) {}

  storeRecipes() {
    const recipes = this.recipesService.getRecipes();
    axios.put(`${environment.serverUrl}/recipes/save`, recipes, {
      headers: {
        token: this.authService.getToken()
      }
    })
    .then(response => {
      console.log(response);
    });
  }

  fetchRecipes() {

    axios.get(`${environment.serverUrl}/recipes/get`, {
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
