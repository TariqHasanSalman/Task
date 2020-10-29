import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MapComponent } from './map/map.component';
import { RealEstateComponent } from './real-estate/real-estate.component';
import { SearchComponent } from './search/search.component';
import { SearchFilterPipe } from './shared/filter-pipe';
import { HomeComponent } from './home/home.component';
import {HttpClientModule} from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MapComponent,
    RealEstateComponent,
    SearchComponent,
    SearchFilterPipe,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  providers: [SearchFilterPipe],
  exports:[SearchFilterPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
