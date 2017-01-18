import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component ({
  selector: 'filter-input',
  template: `
    <form>
      <label>Brand filter:</label>
      <input #userQuery>
      <button (click)="filterKegs(userQuery.value)">Filter</button>
    </form>
  `
})

export class KegFilterComponent {
  @Output() querySender = new EventEmitter();

  filterKegs(input: string) {
    this.querySender.emit(input);
  }
}
