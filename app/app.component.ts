//ROOT COMPONENT
import { Component } from '@angular/core';
import { Keg } from './keg.model';

//Part 1 COMPONENT ANNOTATION - determines how it APPEARS // this is our VIEW
@Component({ // defines new component should have functionalities outlines in the above imported component
  selector: 'app-root', // defines the specific tag to render within.
  template: `
  <div class="container">
    <div class="well">
    <h1 class="beerTapHeader">Beers On Tap</h1>
    <div class="centerFilter"><filter-input (querySender)="newQuery($event)"></filter-input></div>
     <keg-list [userQuery]="userQuery" [childKegList]="masterKegList" (editClickSender)="editKeg($event)" (pourClickSender)="pourPint($event)"></keg-list>

    <edit-keg [childSelectedKeg]="selectedKeg" (clickSender)="finishedEditing()"></edit-keg>
    <br><br><new-keg [newKegForm]="newKegForm" (newKegSender)="addKeg($event)" (newKegFormSender)="showKegForm()"></new-keg>
    </div>
  </div>
  `
})

//Part 2 CLASS DEFINITION -- determines how it BEHAVES
export class AppComponent {


  selectedKeg: Keg = null;
  newKegForm: boolean = false;
  userQuery: string = "";

  newQuery(input: string) {
    this.userQuery = input;
  }

  editKeg(clickedKeg: Keg) {
    this.selectedKeg = clickedKeg;
  }

  finishedEditing() {
    this.selectedKeg = null;
  }

  addKeg(keg) {
    this.newKegForm = false;
    this.masterKegList.push(keg);
  }

  showKegForm() {
    this.newKegForm = true;
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
    new Keg('Total Domination', 'Ninkasi', 4.00, 5.2, 124),
    new Keg('Dead Guy Ale', 'Rogue', 4.00, 5.2, 124),
    new Keg('Marionberry Sour', 'Rogue', 4.00, 5, 124),
  ];
}
//class declaration is our MODEL which is also data



//TIP when a variable in a component's class declaration references another variable in the class, it must be prefaced with the this keyword.
