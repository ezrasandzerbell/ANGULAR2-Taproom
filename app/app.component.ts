//ROOT COMPONENT
import { Component } from '@angular/core';

//Part 1 COMPONENT ANNOTATION - determines how it APPEARS // this is our VIEW
@Component({ // defines new component should have functionalities outlines in the above imported component
  selector: 'app-root', // defines the specific tag to render within.
  template: `
  <div class="container">
    <h1>Tap Room</h1>
   <ul> <!-- repeater DIRECTIVE --> <!-- tasks is the array and it is assigning each iteration to currentTask temporarly -->
     <li *ngFor="let keg of kegs">Name: {{keg.name}} <br> Brand: {{keg.brand}}, Price: {{keg.price}}, Alcohol Content: {{keg.alcohol}}<br><button (click)="editKeg(keg)">Edit!</button><br></li>
   </ul>

    <div *ngIf="selectedKeg">
      <label>Beer Name:</label><br>
      <input [(ngModel)]="selectedKeg.name"><br>
      <label>Brand:</label><br>
      <input [(ngModel)]="selectedKeg.brand"><br>
      <label>Price:</label><br>
      <input [(ngModel)]="selectedKeg.price"><br>
      <label>ABV:</label><br>
      <input [(ngModel)]="selectedKeg.alcohol"><br>
      <button (click)="finishedEditing()">Done</button>
    </div>
  </div>
  `
})

//Part 2 CLASS DEFINITION -- determines how it BEHAVES
export class AppComponent {

  selectedKeg: Keg = null;

  editKeg(clickedKeg) {
    this.selectedKeg = clickedKeg;
    console.log(clickedKeg);
  }

  finishedEditing() {
    this.selectedKeg = null;
  }


  kegs: Keg[] = [
    new Keg('Black Butte', 'Deschutes', 4.00, 5.2),
    new Keg('Mirror Pond', 'Deschutes', 4.00, 5),
    new Keg('Obsidian Stout', 'Deschutes', 4.00, 6.4),
  ];
}
//class declaration is our MODEL which is also data
export class Keg {
  constructor(public name: string, public brand: string, public price: number, public alcohol: number) { }
}


//TIP when a variable in a component's class declaration references another variable in the class, it must be prefaced with the this keyword.
