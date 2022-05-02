import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingService } from '../Shopping.Service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('NameInput')   NameInputRef!: ElementRef ;
  @ViewChild('AmountInput') AmountInputRef!: ElementRef ;


  constructor( private shoppingService : ShoppingService) { }

  ngOnInit(): void {
  }

  AddIngredient( ){

   const IngredientName = this.NameInputRef.nativeElement.value ; 
   const IngredientAmount = this.AmountInputRef.nativeElement.value;
   const NewIngredient = new Ingredient(IngredientName,IngredientAmount) ; 

   this.shoppingService.AddToShopping.emit(NewIngredient) ;
   
   

  }
}
