import { ShoppingListService } from './../shopping-list/shopping-list.service';
import { Ingredient } from './../shared/ingredient.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(private slService: ShoppingListService) { }

  recipseSelcted  = new EventEmitter<Recipe>()

  private recipes: Recipe[] = [
    new Recipe( 'Kiddle', 'Chicken Soup', 'https://cdn.pixabay.com/photo/2018/12/22/16/36/recipe-3889916_1280.jpg',
     [
       new Ingredient('meat',5),
       new Ingredient('frech fries',22)
     ] ),

    new Recipe( 'Maven', 'Pizza burger', 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg',
     [
       new Ingredient('Buns', 35),
       new Ingredient('Meat', 1)
     ])
  ];

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientstoShoppingList(ingredients:Ingredient[]){
    this.slService.addAllIngredients(ingredients);

  }



}
