import { Component, Input, OnInit, Output , EventEmitter} from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

 @Output() SelectOneRecipe =new EventEmitter<void>() ;
 @Input() recipe! : Recipe ;

  constructor() { 
    
  }

  OnSelectRecipe(){

    this.SelectOneRecipe.emit() ;

  }
  ngOnInit(): void {
  }

}
