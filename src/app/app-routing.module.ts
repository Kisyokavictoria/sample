import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { AboutComponent } from './about/about.component';
import { FeaturesComponent } from './features/features.component';
import { ContactComponent } from './contact/contact.component';
import { ServicesComponent } from './services/services.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: '', component:HomepageComponent},
  {path: 'about', component: AboutComponent},
  {path: 'features', component:FeaturesComponent},
  {path:'contact', component:ContactComponent},
  {path:'services', component: ServicesComponent},
  {path: 'signup', component:SignupComponent},
  {path: 'login', component:LoginComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
