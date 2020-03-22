import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { DataStorageService } from '../shared/data-storage.service';
import { RecipeService } from './recipe.service';
import { AuthService } from '../auth/auth.service';

@Injectable({providedIn: 'root'})
export class RecipesResolverService implements Resolve<any> {
  constructor(
    private dataStorageService: DataStorageService,
    private recipeService: RecipeService,
    private authService: AuthService) {}

  async resolve(route: ActivatedRouteSnapshot, rstate: RouterStateSnapshot) {
    const recipes = this.recipeService.getRecipes();

    if (!localStorage.getItem('token')) {
      return false;
    }

    if (recipes.length === 0) {
      const result = await this.dataStorageService.fetchRecipes();
      return result;
    } else {
      return recipes;
    }

  }
}
