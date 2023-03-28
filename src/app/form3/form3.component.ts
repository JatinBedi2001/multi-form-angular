import { Component, Input} from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-form3',
  templateUrl: './form3.component.html',
})
export class Form3Component {
  selectedCity = '';
  @Input() selectedState = '';
  @Input() selectedCountry = '';
  cities: string[] = [];

  
  ngOnChanges() {
    this.cities = this.getCitiesForState(this.selectedState);
  }

  // constructor(private authService: AuthService) {}

  // ngOnChanges() {
  //   if (this.authService.isAdmin()) {
  //     this.cities = this.getCitiesForState(this.selectedState);
  //   }
  // }


  getCitiesForState(state: string): string[] {
    switch (state) {
      case 'California':
        return ['Los Angeles', 'San Francisco'];
      case 'New York':
        return ['New York City', 'Rochester'];
      case 'Ontario':
        return ['Toronto', 'Ottawa'];
      case 'Alberta':
        return ['Calgary', 'Edmonton'];
      default:
        return [];
    }
  }

  onSubmit() {
    console.log('Selected Country:', this.selectedCountry);
    console.log('Selected State:', this.selectedState);
    console.log('Selected City:', this.selectedCity);
  }
}
