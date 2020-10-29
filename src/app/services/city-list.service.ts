import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class CityListService {

  constructor(
  private http: HttpClient,
  private route: ActivatedRoute,
  private router: Router)
    { }
  getCityList(){// get city list from api and pass it
    const headers = { 'x-api-key': '10a8dacb-9143-4307-9e3a-c74e6fcca283' ,
    'Content-Type': 'application/json',
    'Cookie': '__cfduid=d4ab9691c53e0941925513ae4f934a4b01603740268'
  }
    return this.http
    .get('http://localhost:3000/api/cityList');
  }
  getProperties(state,city){ // get properties of a given state and city and passing it
   return this.http.get('http://localhost:3000/api/prperties/'+state+'/'+city);
  }
  getAds(){// geting ads properties
    return this.http.get('http://localhost:3000/ads');
   }
}
