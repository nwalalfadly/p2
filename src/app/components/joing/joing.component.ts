import { Component, OnInit } from '@angular/core';
import { RestApiService } from 'src/app/shared/rest-api.service';

@Component({
  selector: 'app-joing',
  templateUrl: './joing.component.html',
  styleUrls: ['./joing.component.css']
})
export class JoingComponent implements OnInit {

  coachs: any = [];

  constructor(public restApi: RestApiService) { }

  ngOnInit() {
    this.loadCoachs()
  }
  // Get coachs list
  loadCoachs() {
    return this.restApi.getCoachs().subscribe((data: {}) => {
      this.coachs = data;
    })
  }
    // Delete coach
    deleteCoach(id) {
      if (window.confirm('Are you sure, you want to delete?')){
        this.restApi.deleteCoach(id).subscribe(data => {
          this.loadCoachs()
        })
      }


} 

}
