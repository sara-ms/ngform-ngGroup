import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule , ReactiveFormsModule  } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { FormulaireFormGroupComponent } from './formulaire-form-group/formulaire-form-group.component';
import { ServicesComponent } from './services/services.component';
import { HttpClientModule } from '@angular/common/http';
import{ExempleServiceService } from './exemple-service.service';
import { SarahService } from './services/sarah.service'


@NgModule({
  declarations: [
    AppComponent,
    FormulaireComponent,
    FormulaireFormGroupComponent,
    ServicesComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  providers: [SarahService,ExempleServiceService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
