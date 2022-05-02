import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.services';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers : [RecipeService]
})
export class RecipesComponent implements OnInit {

   RecipeSelectedNow! : Recipe; 
  constructor( private  recipeService : RecipeService) { }

  ngOnInit(): void {

this.recipeService.Detail.subscribe(
  (recipe : Recipe) => {

this.RecipeSelectedNow = recipe ; 
   }
)

  }

}
