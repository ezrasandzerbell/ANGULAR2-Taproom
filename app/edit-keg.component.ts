import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'edit-keg',
  template: `
  <div *ngIf="childSelectedKeg">
    <label>Beer Name:</label><br>
    <input [(ngModel)]="childSelectedKeg.name"><br>
    <label>Brand:</label><br>
    <input [(ngModel)]="childSelectedKeg.brand"><br>
    <label>Price:</label><br>
    <input [(ngModel)]="childSelectedKeg.price"><br>
    <label>ABV:</label><br>
    <input [(ngModel)]="childSelectedKeg.alcohol"><br>
    <button (click)="finishedEditing(childSelectedKeg)">Done</button>
  </div>
  `
})

export class EditKegComponent {
  @Input() childSelectedKeg: Keg;
  @Output() clickSender = new EventEmitter();

  finishedEditing(clickedKeg) {
    this.clickSender.emit(clickedKeg);
  }
}
