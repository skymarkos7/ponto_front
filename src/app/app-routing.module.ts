import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegistrosComponent } from './components/registros/registros.component';
// import { AppComponent } from './app.component';
import { FormComponent } from './components/form/form.component';
import { DetailsComponent } from './components/registros/details/details.component';


const routes: Routes = [
  { path: 'registros', component: RegistrosComponent },
  { path: 'form', component: FormComponent },
  { path: 'detalhes/:nome/validar', component: DetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

