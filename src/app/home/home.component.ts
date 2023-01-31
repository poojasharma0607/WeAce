import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  happinessInd: number;
  constructor() { }

  ngOnInit(): void {
  }

  onClickSubmit(data) {
    this.happinessInd= parseInt(data.daymood)+parseInt(data.inspire)+parseInt(data.care)+parseInt(data.learn);
   
  
    if(this.happinessInd>5){
      alert(data.name +" is"  + "Happy" +this.happinessInd);
    } 

    else
    alert(data.name +" is"  + " Sad" +this.happinessInd);
 }

}
