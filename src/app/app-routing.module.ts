import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { JoingComponent } from './components/joing/joing.component';
// import { ContactComponent } from './contact/contact/contact.component';
import { RegisterComponent } from './contact/register/register.component';
import { Register1Component } from './contact/register1/register1.component';
import { LoginComponent } from './contact/login/login.component';
import { AboutComponent } from './components/about/about.component';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { SportComponent } from './components/sport/sport.component';


const routes: Routes = [
{path:"", component: HeaderComponent},
{path:"about", component: AboutComponent},
{path:"joing", component: JoingComponent},
{path:"sport", component: SportComponent},
{path:"register", component: RegisterComponent},
{path:"register1", component: Register1Component},
{path:"login", component: LoginComponent},
{path:"calculator", component: CalculatorComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
