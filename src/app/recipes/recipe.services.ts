import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingService } from "../shopping-list/Shopping.Service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService {

   private  recipes : Recipe[] = [
        new Recipe('delicious food',
        'enjoy ' ,
         'https://images.immediate.co.uk/production/volatile/sites/30/2022/03/Vanilla-pavlova-with-pineapple-and-passion-fruit-8a83b88.jpg',
          [
               new Ingredient('Fraise' , 5) ,
               new Ingredient('Banane' , 7)

            
          ]
         ),
        new Recipe('delicious food',
        'enjoy ' ,
         'https://images.immediate.co.uk/production/volatile/sites/30/2022/02/Custard-tart-4878630.jpg'
         ,
         [
             new Ingredient('Chocolat', 6) , 
             new Ingredient('Tomates' , 8)
         ])
    
      ] ;

      Detail  = new EventEmitter<Recipe>() ;

      constructor( private shoppingService : ShoppingService) {

      }

      getRecipe() {
          return this.recipes.slice() ; 
      }

      AddToShopping (ingredients : Ingredient[]) {
       
        this.shoppingService.AddToShoppingIngredient(ingredients) ; 



      }


}
