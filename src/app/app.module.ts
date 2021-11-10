
import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatDividerModule} from '@angular/material/divider';
import { HomepageComponent } from './Components/homepage/homepage.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';
import { AboutdlcComponent } from './Components/aboutdlc/aboutdlc.component';
// import { SliderModule } from '@angular-image-slider';
import { NgImageSliderModule } from 'ng-image-slider';
import { OurworldsComponent } from './Components/ourworlds/ourworlds.component';
import { ExperiencesComponent } from './Components/experiences/experiences.component';
import { GalleryComponent } from './Components/gallery/gallery.component';
import {MatMenuModule} from '@angular/material/menu';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomepageComponent,
    AboutdlcComponent,
    OurworldsComponent,
    ExperiencesComponent,
    GalleryComponent
    

 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    FlexLayoutModule,
    MatDividerModule,
    MatTabsModule,
    MatCardModule,
    NgImageSliderModule,
    MatMenuModule
   
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
