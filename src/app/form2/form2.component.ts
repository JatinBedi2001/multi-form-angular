import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form2',
  templateUrl: './form2.component.html',
})
export class Form2Component {
  selectedState = '';
  @Input() selectedCountry = '';
  
  @Output() stateChanged = new EventEmitter<Event>();
  states: string[] = [];

  ngOnChanges() {
    this.states = this.getStatesForCountry(this.selectedCountry);
  }

  getStatesForCountry(country: string): string[] {
    switch (country) {
      case 'USA':
        return ['California', 'New York'];
      case 'Canada':
        return ['Ontario', 'Alberta'];
      default:

        return [];
    }
  }
}
