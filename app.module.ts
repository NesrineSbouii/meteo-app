import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { SelectionComponent } from './components/selection/selection.component';
import { FormsModule } from '@angular/forms';
import { DisplayComponent } from './components/display/display.component'
@NgModule({
  declarations: [
    AppComponent,
    SelectionComponent,
    DisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
