import { FoodSpecialist } from './../myClasses/food-specialist';
import { Coach } from './../myClasses/coach';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Client } from '../myClasses/client';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private RegisterUrl: string;
  // private CoachRegisterUrl: string;
  // private FoodSpecialistRegisterUrl: string;

  constructor( private http: HttpClient) { 
    this.RegisterUrl = 'http://localhost:8015/api/register';
    // this.CoachRegisterUrl = 'http://localhost:8015/api/coach/addCoach';
    // this.FoodSpecialistRegisterUrl = 'http://localhost:8015/api/foodSpecialist/addFoodSpecialist';
  }

  public addCoach(coach: Coach){
    return this.http.post<Coach>(this.RegisterUrl, coach);
  }

  public addClient(client: Client){
    return this.http.post<Client>(this.RegisterUrl, client);
  }

  public addFoodSpecialist(foodSpecialist: FoodSpecialist) {
    return this.http.post<FoodSpecialist>(this.RegisterUrl, foodSpecialist);
  }
}
