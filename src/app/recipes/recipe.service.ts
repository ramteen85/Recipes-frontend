import { Recipe } from './recipes.model';

export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
    'Lasagne',
    'yummy and cheesy',
    'https://img.taste.com.au/Xs9fiXZc/taste/2010/01/our-favourite-lasagne-118950-2.jpg'),
    new Recipe(
    'Burger',
    'nice, beefy and stacked',
    'https://i.ytimg.com/vi/L6yX6Oxy_J8/maxresdefault.jpg')
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
