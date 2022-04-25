import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredient[] =[
new Ingredient('tomates',4),
new Ingredient('thon',100),
new Ingredient('potato',4)



  ] ;
  constructor() { }

  ngOnInit(): void {
  }


  AddToIngredientArray(NewIngredient : Ingredient){

this.ingredients.push(NewIngredient);
  }
}
