//ROOT COMPONENT
import { Component } from '@angular/core';
import { Keg } from './keg.model';

//Part 1 COMPONENT ANNOTATION - determines how it APPEARS // this is our VIEW
@Component({ // defines new component should have functionalities outlines in the above imported component
  selector: 'app-root', // defines the specific tag to render within.
  template: `
  <div class="container">
    <h1>Tap Room</h1>
   <keg-list [childKegList]="masterKegList" (editClickSender)="editKeg($event)" (pourClickSender)="pourPint($event)"></keg-list>

  <edit-keg [childSelectedKeg]="selectedKeg" (clickSender)="finishedEditing()"></edit-keg>
  </div>
  `
})

//Part 2 CLASS DEFINITION -- determines how it BEHAVES
export class AppComponent {

  selectedKeg: Keg = null;

  editKeg(clickedKeg) {
    this.selectedKeg = clickedKeg;
  }

  finishedEditing() {
    this.selectedKeg = null;
  }

  pourPint(clickedKeg) {
    if (clickedKeg.quantity > 0) {
      var newQuantity = clickedKeg.quantity - 1;
      clickedKeg.quantity = newQuantity;
    } else {
      alert("This keg is out! Time to rotate kegs!");
    }
  }

  masterKegList: Keg[] = [
    new Keg('Black Butte', 'Deschutes', 4.00, 5.2, 124),
    new Keg('Mirror Pond', 'Deschutes', 4.00, 5, 124),
    new Keg('Obsidian Stout', 'Deschutes', 4.00, 6.4, 12),
  ];
}
//class declaration is our MODEL which is also data



//TIP when a variable in a component's class declaration references another variable in the class, it must be prefaced with the this keyword.
