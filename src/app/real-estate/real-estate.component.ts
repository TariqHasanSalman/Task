import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-real-estate',
  templateUrl: './real-estate.component.html',
  styleUrls: ['./real-estate.component.css']
})
export class RealEstateComponent implements OnInit {
 @Input() propertie: any;
rates=[];// array[] that will have zeros and ones to represent soled or empty stars of the rate
rate=0;
  constructor() { }

  ngOnInit(): void {// calculating the rate of given propertie
    if(this.propertie.airbnb_ROI==null&&this.propertie.traditional_ROI==null){
      this.rate=0;
    }
    else if(this.propertie.airbnb_ROI==null){
      this.rate=this.propertie.traditional_ROI
    }
    else if(this.propertie.traditional_ROI==null){
      this.rate=this.propertie.airbnb_ROI
    }
    else{
      this.rate=(this.propertie.airbnb_ROI+this.propertie.traditional_ROI)/2
    }
    for (let index = 0; index < 5; index++) {
      if (index<this.rate) {
        this.rates.push(1);
      }
      else{
        this.rates.push(0);
      }

    }
  }

}
