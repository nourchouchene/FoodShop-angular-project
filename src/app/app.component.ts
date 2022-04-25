import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'foodshop';
 
  SelectedFeature :string = 'recipe' ; 
  OnNavigate( eventfeature : string){

    this.SelectedFeature=eventfeature ;


  }
}
