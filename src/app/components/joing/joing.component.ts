import { RegisterService } from './../../services/register.service';
import { FoodSpecialist } from './../../myClasses/food-specialist';
import { Coach } from './../../myClasses/coach';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-joing',
  templateUrl: './joing.component.html',
  styleUrls: ['./joing.component.css']
})
export class JoingComponent implements OnInit {

  coach: Coach[];
  foodSpecialist: FoodSpecialist[];

  addCoachForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
    photo: new FormControl(''),
    bio: new FormControl(''),
    role: new FormControl('')
  })

  addFoodSpecialistForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
    photo: new FormControl(''),
    bio: new FormControl(''),
    role: new FormControl('')
  })

  constructor(private registerService: RegisterService) { }

  addCoach(){
    this.registerService.addCoach(this.addCoachForm.value).subscribe(data => {
      console.log(this.coach);
    })
    console.log(this.addCoachForm);
  }

  addFoodSpecialist(){
    this.registerService.addFoodSpecialist(this.addFoodSpecialistForm.value).subscribe(data => {
      console.log(this.foodSpecialist);
    })
    console.log(this.addFoodSpecialistForm.value);
  }

  ngOnInit() {
    this.addCoachForm.patchValue({
      role: {
        id: 2
      }
    });
    this.addFoodSpecialistForm.patchValue({
      role: {
        id: 3
      }
    })
  }

}
