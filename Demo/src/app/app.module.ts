import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms'; // Required for reactive forms
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent, // ✅ Declare here
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule, // ✅ Import for FormBuilder
  ],
  providers: [],
  bootstrap: [AppComponent], // ✅ Bootstrap correctly
})
export class AppModule { }
