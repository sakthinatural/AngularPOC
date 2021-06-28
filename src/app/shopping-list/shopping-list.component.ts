import { ShoppingListService } from './shopping-list.service';
import { Ingredient } from './../shared/ingredient.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredient[];

  constructor(private ShoppingListService: ShoppingListService) { }

  ngOnInit(): void {
    this.ingredients = this.ShoppingListService.getIngredients();
    this.ShoppingListService.ingredientsChanged.subscribe( (ingredients: Ingredient[]) =>{
      this.ingredients = ingredients;
    })
  }
  
}
