import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.services';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  @Input() SpecificRecipe! :  Recipe ; 
  constructor(private recipeService: RecipeService 
                     ) { }

  ngOnInit(): void {
  }

  AddIngredientToShopping() {

 this.recipeService.AddToShopping(this.SpecificRecipe.ingredients )


  }
}
