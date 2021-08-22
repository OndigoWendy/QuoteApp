import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { QuoteInfoComponent } from './quote-info/quote-info.component';
import { QuoteFormComponent } from './quote-form/quote-form.component';



@NgModule({
  declarations: [
    AppComponent,
    QuoteInfoComponent,
    QuoteFormComponent,

   
    
   
  ],
  imports: [
    BrowserModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
