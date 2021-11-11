import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './Components/footer/footer.component';
import { HeaderComponent } from './Components/header/header.component';
import { HomepageComponent } from './Components/homepage/homepage.component';
import { AboutdlcComponent } from './Components/aboutdlc/aboutdlc.component';
import { OurworldsComponent } from './Components/ourworlds/ourworlds.component';
import { ExperiencesComponent } from './Components/experiences/experiences.component';
import { GalleryComponent } from './Components/gallery/gallery.component';
import { PressComponent } from './Components/press/press.component';



const routes: Routes = [
  { path: 'header', component: HeaderComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'homepage', component: HomepageComponent },
  { path: 'aboutdlc', component: AboutdlcComponent },
  { path: 'ourworlds', component: OurworldsComponent },
  { path: 'experiences', component: ExperiencesComponent },
  { path: 'gallery', component: GalleryComponent },
  {path: 'press', component:PressComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
