import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { UpdateComponent } from './update/update.component';
import{FormsModule} from '@angular/forms';
import { DeleteComponent } from './delete/delete.component';
import { HomePageComponent } from './home-page/home-page.component';
 
@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    UpdateComponent,
    DeleteComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
