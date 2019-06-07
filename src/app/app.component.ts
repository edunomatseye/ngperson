import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'Todo Test Application.';
  name:string = "Edun O."

  constructor(){
    console.log('123')
    this.name = "Ololo M."
    this.changeName("Shower")
  }

  changeName(name:string):string {
    return this.name = "John"
  }
}
 