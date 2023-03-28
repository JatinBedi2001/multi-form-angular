import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }




// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';
// import { Form1Component } from './form1/form1.component';
// import { Form2Component } from './form2/form2.component';
// import { Form3Component } from './form3/form3.component';
// import { AuthGuard } from './guards/auth.guard';

// const routes: Routes = [
//   { path: 'form1', component: Form1Component },
//   { path: 'form2', component: Form2Component },
//   { path: 'form3', component: Form3Component, canActivate: [AuthGuard],data: { roles: ['admin'] } },
//   { path: '', redirectTo: '/', pathMatch: 'full' },
// ];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }


