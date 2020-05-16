import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './contact/login/login.component';
import { JoingComponent } from './components/joing/joing.component';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { RegisterComponent } from './contact/register/register.component';
import { ContactComponent } from './contact/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
// import { Register1Component } from './contact/register1/register1.component';
import { FooterComponent } from './components/footer/footer.component';
import { TableComponent } from './components/table/table.component';
import { SportComponent } from './components/sport/sport.component';
import { ModalComponent } from './components/modal/modal.component';
import { ExerciceComponent } from './components/exercice/exercice.component';
import { ExercicecoachComponent } from './components/exercicecoach/exercicecoach.component';
import { GestionaireComponent } from './components/gestionaire/gestionaire.component';
import { MealsComponent } from './components/meals/meals.component';
import { ErrorComponent } from './components/error/error.component';
// HttpClient module for RESTful API
import { HttpClientModule } from '@angular/common/http';
// Forms module
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    LoginComponent,
    JoingComponent,
    CalculatorComponent,
    RegisterComponent,
    ContactComponent,
    HomeComponent,
    AboutComponent,
    // Register1Component,
    FooterComponent,
    TableComponent,
    SportComponent,
    ModalComponent,
    ExerciceComponent,
    ExercicecoachComponent,
    GestionaireComponent,
    MealsComponent,
    ErrorComponent
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
