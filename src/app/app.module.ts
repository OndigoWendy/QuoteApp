import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { QuoteInfoComponent } from './quote-info/quote-info.component';
import { QuoteFormComponent } from './quote-form/quote-form.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from 'src/app-routing.module';
import { TimeLapsePipe } from './time-lapse.pipe';


@NgModule({
  declarations: [
    AppComponent,
    QuoteInfoComponent,
    QuoteFormComponent,
    TimeLapsePipe,


   
    
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule

   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
