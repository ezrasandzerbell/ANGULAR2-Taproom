import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component ({
  selector: 'new-keg',
    template: `
    <button *ngIf="!newKegForm" (click)="showKegForm()">Add New Keg</button>
    <div *ngIf="newKegForm">
      <h1>New Keg</h1>
      <div>
        <label>name: </label>
        <input #name>
        <label>brand: </label>
        <input #brand>
        <label>price: </label>
        <input #price>
        <label>alcohol: </label>
        <input #alcohol>
        <button (click)="submitKeg(name.value, brand.value, price.value, alcohol.value); name.value=''; brand.value=''; price.value=''; alcohol.value='';">Submit</button>
      </div>
    </div>
    `
})

  export class NewKegComponent {
    @Input() newKegForm: boolean;
    @Output() newKegSender = new EventEmitter();
    @Output() newKegFormSender = new EventEmitter();

    submitKeg(name: string, brand: string, price: number, alcohol: number) {
      var quantity: number = 124;
      var newKegToAdd: Keg = new Keg(name, brand, price, alcohol, quantity);
      this.newKegSender.emit(newKegToAdd);
    }
    showKegForm() {
      this.newKegFormSender.emit();
    }
}
