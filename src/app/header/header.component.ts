import { Component, Output , EventEmitter } from "@angular/core";

@Component(
    {
selector : 'app-header' ,
templateUrl : './header.component.html' 



})
export class HeaderComponent {
 @Output() SelectedTarget = new EventEmitter<string>();
    Onselect(feature: string){

        this.SelectedTarget.emit(feature) ; 

    }
}