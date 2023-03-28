// import { Component, OnInit } from '@angular/core';
// import { FormService } from '../services/form-service.service';

// @Component({
//   selector: 'app-form1',
//   templateUrl: './form1.component.html',
//   styleUrls: ['./form1.component.css']
// })
// export class Form1Component implements OnInit {
//   formData: any = {};

//   constructor(private formService: FormService) { }

//   ngOnInit(): void {
//   }

//   submitForm() {
//     this.formService.formData.form1Data = this.formData;
//     this.formService.submitFormData();
//   }
// }


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