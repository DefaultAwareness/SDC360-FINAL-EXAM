import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ListComponent } from './components/list/list.component';
import { AddComponent } from './components/add/add.component';
import { UpdateCensusComponent } from './components/update-census/update-census.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    AddComponent,
    UpdateCensusComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,       
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

