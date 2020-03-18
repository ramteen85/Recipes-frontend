import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipes.model';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe(
    'A test recipe',
    'this is simply a test',
    'https://img.taste.com.au/Xs9fiXZc/taste/2010/01/our-favourite-lasagne-118950-2.jpg'),
    new Recipe(
    'A test recipe',
    'this is simply a test',
    'https://img.taste.com.au/Xs9fiXZc/taste/2010/01/our-favourite-lasagne-118950-2.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
