import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'keg-list',
  template: `
    <ul> <!-- repeater DIRECTIVE --> <!-- tasks is the array and it is assigning each iteration to currentTask temporarly -->
      <li *ngFor="let keg of childKegList | completeness:userQuery">Name: {{keg.name}} <br> Brand: {{keg.brand}}, <span [class]="priceColor(keg)">Price: {{keg.price}}</span>, Alcohol Content: <span [class]="abvStyle(keg)">{{keg.alcohol}}</span>, <span [class]="qtyColor(keg)">Quantity Remaining: {{keg.quantity}}</span><br><button (click)="editKeg(keg)">Edit!</button><button (click)="pourPint(keg)">Pour a Beer!</button><br></li>
    </ul>
  `
})

export class KegListComponent {
  @Input() userQuery: string;
  @Input() childKegList: Keg[];
  @Output() editClickSender = new EventEmitter();
  @Output() pourClickSender = new EventEmitter();

  editKeg(clickedKeg) {
    this.editClickSender.emit(clickedKeg);
  }

  pourPint(clickedKeg) {
    this.pourClickSender.emit(clickedKeg);
  }

  priceColor(clickedKeg) {
    if (clickedKeg.price < 5) {
      return "bg-success";
    } else {
      return "bg-info";
    }
  }

  abvStyle(clickedKeg) {
    if (clickedKeg.alcohol < 5) {
      return "lowABV";
    } else {
      return "highABV";
    }
  }

  qtyColor(clickedKeg) {
    if (clickedKeg.quantity <= 10) {
      return "bg-danger";
    } else {
      return "bg-success";
    }
  }

}
