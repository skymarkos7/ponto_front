import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './components/form/form.component';
import { RegistrosComponent } from './components/registros/registros.component';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DetailsComponent } from './components/registros/details/details.component';
import { NavegacaoComponent } from './components/navegacao/navegacao.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    RegistrosComponent,
    DetailsComponent,
    NavegacaoComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
