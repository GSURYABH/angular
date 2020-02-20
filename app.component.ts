import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  result:string = ' ';
  result1:string = ' ';
  result2:string = ' ';
  result3:string = ' ';
  hello:string = ' ';
  title = 'assignment';
  showDetails() {
    this.hello = this.result + " " + this.result1 + " " + this.result2 + " "; 
     
  }
  
}
