import { Component } from '@angular/core';

@Component({
  selector: 'app-form1',
  templateUrl: './form1.component.html',
})
export class Form1Component {
  selectedCountry = '';
  selectedState = '';

  countries = ['USA', 'Canada'];

  onStateChanged(event: Event) {
    this.selectedState = (<HTMLSelectElement>event.target).value;
  }
}