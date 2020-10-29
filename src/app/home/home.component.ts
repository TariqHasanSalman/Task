import { getTranslationDeclStmts } from '@angular/compiler/src/render3/view/template';
import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { SearchComponent } from '../search/search.component';
import { CityListService } from '../services/city-list.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
searched=false; // this boolean is a check if we searched before
items=[];// this is the filterd list of search result
Notfilterditems=[];// an array to hold all search result before filtration
numberOfResualt=0;// the number of properties we get from search
city=""// string to hold the name of searched city
  constructor(private cityServies:CityListService) { }

  ngOnInit(): void {
    this.cityServies.getAds().subscribe((data:any)=>{ // initial assumbtiom that the first properties before searching is coming from ads API
      this.items=data.content.properties;
      this.Notfilterditems=[...this.items];
    })
  }


    /* this method will be trigerd by an event comming from search componte
        this event have value of the searched city
        city value will be pased to service to get its properties
    */
  setSearchresut(e){
    this.searched=true;
    this.cityServies.getProperties('ca',e).subscribe((data:any)=>{
        this.numberOfResualt=data.content.properties.length
        this.city=e+',CA'
        this.items=data.content.properties
        this.Notfilterditems=[...this.items];

             })
  }

  /*  this method calculats the averge rate of a given propertie */
  getRate(a){
    if(a.airbnb_ROI!=null&&a.traditional_ROI!=null){
      return (a.airbnb_ROI+a.traditional_ROI)/2;
    }
    else if(a.airbnb_ROI!=null) return a.airbnb_ROI;
    else if(a.traditional_ROI!=null) return a.traditional_ROI;
    else return 0;
  }


  /* this method tregerd when any fillter buttons clicked to return a filterd list of values */
  filterResult(data){
    if (data=="All"){
      this.items=[...this.Notfilterditems];
    }
    else if(data=="Rating"){
      this.items.sort((a, b) => (this.getRate(a) < this.getRate(b) ? 1 : -1))
    }
    else if(data=="COC" || data=="cap_rate" || data=="rental_income"){
      this.items.sort((a, b) => (this.getCOCAndCapAndRentl(a,data) < this.getCOCAndCapAndRentl(b,data) ? 1 : -1))
    }
    else if(data=="Buget"){
      this.items.sort((a, b) => (a.list_price > b.list_price ? 1 : -1))
    }
    else {
      this.items=[...this.Notfilterditems];
    }

  }

/* this method used to calculate the avg of coc or cap or rental-income
used by sort method ubove*/
  getCOCAndCapAndRentl(a,data){
    if(a.COC.airbnb!=null&&a.COC.traditional!=null){
      return (a[data].airbnb+a[data].traditional)/2;
    }
    else if(a[data].airbnb!=null) return a[data].airbnb;
    else if(a[data].traditional!=null) return a[data].traditional;
    else return 0;
  }



}
