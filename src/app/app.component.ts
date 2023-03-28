import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="form-wrapper">
      <app-form1 (change)="form1CountryChanged($event)"></app-form1>  
      <hr>
      <app-form2 [selectedCountry]="selectedCountry" (stateChanged)="onStateChanged($event)"></app-form2>
      <hr>
    <app-form3 [selectedState]="selectedState" [selectedCountry]="selectedCountry"></app-form3>  
    </div>
  `,
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  selectedCountry = '';
  selectedState = '';

  onStateChanged(event: Event) {
    this.selectedState = (<HTMLSelectElement>event.target).value;
  }

  form1CountryChanged(event: Event) {
    const target = event.target as HTMLSelectElement;
    this.selectedCountry = target.value;
  }
}
