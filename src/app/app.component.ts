import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <app-form1 (change)="form1CountryChanged($event)"></app-form1>    
    </div>
  `,
})
export class AppComponent {
  selectedCountry = '';

  form1CountryChanged(event: Event) {
    const target = event.target as HTMLSelectElement;
    this.selectedCountry = target.value;
  }
}
