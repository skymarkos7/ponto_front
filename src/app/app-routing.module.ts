import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegistrosComponent } from './components/registros/registros.component';
// import { AppComponent } from './app.component';
import { FormComponent } from './components/form/form.component';

const routes: Routes = [
  { path: 'registros', component: RegistrosComponent },
  { path: 'form', component: FormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

