import { ShoppingListService } from './../../shopping-list/shopping-list.service';
import { RecipeService } from './../recipe.service';
import { Recipe } from './../recipe.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  @Input() recipe: Recipe;

  constructor(private recipeService: RecipeService, private slService: ShoppingListService) { }

  ngOnInit(): void {
  }

  onAddtoShoppingList(){
  this.recipeService.addIngredientstoShoppingList(this.recipe.ingredients);
  //  this.slService.addAllIngredients(this.recipe.ingredients); // we can do it by calling directly shopping service also instead of going through recipe service  
  }
}
