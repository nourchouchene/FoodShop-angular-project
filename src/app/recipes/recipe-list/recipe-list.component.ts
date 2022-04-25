import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes : Recipe[] = [
    new Recipe('delicious food','enjoy ' , 'https://images.immediate.co.uk/production/volatile/sites/30/2022/03/Vanilla-pavlova-with-pineapple-and-passion-fruit-8a83b88.jpg'),
    new Recipe('delicious food','enjoy ' , 'https://images.immediate.co.uk/production/volatile/sites/30/2022/02/Custard-tart-4878630.jpg')

  ] ;

 @Output() AfterSelectedRecipe= new EventEmitter<Recipe> () ;
  constructor() { }

  ngOnInit(): void {
  }

  OnSelectRecipe(recipe:Recipe) {

    this.AfterSelectedRecipe.emit(recipe)

  }
}
