import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './Components/footer/footer.component';
import { HeaderComponent } from './Components/header/header.component';
import { HomepageComponent } from './Components/homepage/homepage.component';
import { AboutdlcComponent } from './Components/aboutdlc/aboutdlc.component';



const routes: Routes = [
  {path:'header', component: HeaderComponent},
  {path:'footer', component: FooterComponent},
  {path:'homepage', component:HomepageComponent},
  { path:'aboutdlc', component:AboutdlcComponent},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
