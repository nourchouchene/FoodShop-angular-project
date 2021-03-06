import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

export class ShoppingService {

    ingredients: Ingredient[] =[
        new Ingredient('tomates',4),
        new Ingredient('thon',100),
        new Ingredient('potato',4)
        
        
        
          ] ;

          AddToShopping = new EventEmitter<Ingredient>() ; 

          GetIngredient() {

            return this.ingredients.slice() ; 
            
          }

          AddIngredient(ingredient : Ingredient) {
 
           this.ingredients.push(ingredient) ; 

          }

          AddToShoppingIngredient(ingredients : Ingredient[]) {

             for (let ingredient of ingredients) {
              this.AddIngredient(ingredient) ; 

             }

          }

        
}