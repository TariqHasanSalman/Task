import { Component, ElementRef, EventEmitter, HostListener, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CityListService } from '../services/city-list.service';
import {SearchFilterPipe} from '../shared/filter-pipe'


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @Output() exportsearch = new EventEmitter<string>();// output to export the search results

  /*
  host listener for checking if kilckes are insaid or outsaid this component
  */
  @ViewChild('clickedInSaid') element: ElementRef<any>;
  @HostListener('document:click', ['$event']) onClick(event: MouseEvent) {
    const isInside = event.composedPath().includes(this.element.nativeElement);
  if(!isInside){

    this.closeDropDown();
  }
  }
  /*
  host listener for tracking keybord arrow clicks and move the selection
  chicking for all cases if there is previous sellection
  or if the list is bigger or smaller than 5
  if there is no pointers
  by each event the system is removing previous hover and creating a
  new hover and pointer
  */
  @HostListener('window:keyup', ['$event'])
  keyEventDown(event: KeyboardEvent) {
    if(this.showDropDown){
      let lng=0;
      if(this.filterdstates.length>5){
        lng=5;
      }
      else{
        lng=this.filterdstates.length;
      }
     if(event.code=="ArrowUp"&&this.mouseON==-1){
      this.mouseON=lng-1;
      let doc= document.getElementById(String(this.mouseON));
      doc.style.background = '#707070';
      console.log(this.mouseON);
    }
    else if(event.code=="ArrowDown"&&this.mouseON==-1){
      this.mouseON=0;
      let doc= document.getElementById(String(this.mouseON));
      doc.style.background = '#707070';
      console.log(this.mouseON);

    }
    else if(event.code=="ArrowUp"&&this.mouseON>=1){
     let doc= document.getElementById(String(this.mouseON));
     doc.style.background = '#F6F6F6';
      this.mouseON--;
      doc= document.getElementById(String(this.mouseON));
      doc.style.background = '#707070';
      console.log(this.mouseON);


    }
    else if(event.code=="ArrowUp"&&this.mouseON==0){
      let doc= document.getElementById(String(this.mouseON));
      doc.style.background = '#F6F6F6';
      this.mouseON=lng-1;
      doc= document.getElementById(String(this.mouseON));
      doc.style.background = '#707070';
      console.log(this.mouseON);

    }
    else if(event.code=="ArrowDown"&&this.mouseON<lng-1){
      let doc= document.getElementById(String(this.mouseON));
      doc.style.background = '#F6F6F6';
      this.mouseON++;
      doc= document.getElementById(String(this.mouseON));
      doc.style.background = '#707070';
    }
    else if(event.code=="ArrowDown"&&this.mouseON==lng-1){
      let doc= document.getElementById(String(this.mouseON));
      doc.style.background = '#F6F6F6';
      this.mouseON=0;
      doc= document.getElementById(String(this.mouseON));
      doc.style.background = '#707070';
    }
    else if(event.code=="Enter"){
      this.search();
    }

  }}
  stateForm: FormGroup;
  mouseON=-1;// this varibel has the current sllection that the mous points at
  showDropDown = false; // boolean to show dropdownlist
  states = [];// array all given cities
  filterdstates=[]; // array for fillterd cities
  constructor( private fb: FormBuilder ,private cityServies:CityListService,private dataFilter:SearchFilterPipe) {
    this.initForm()
  }
  /////10a8dacb-9143-4307-9e3a-c74e6fcca283

  initForm(): FormGroup {
    return this.stateForm = this.fb.group({
      search: [null]
    })
  }
 data={};
first=true;

ngOnInit() {

     this.cityServies.getCityList().subscribe((data:any)=>{// geting all cites from the servies
     this.states=data.content.list;
      })

 }


 selectValue(value) { // method to pass an event when search action happen
   this.showDropDown = false;
   this.stateForm.patchValue({"search": value}
);
   this.exportsearch.emit(value);

 }
  closeDropDown() {// method to close dropdown list
    this.showDropDown=false;
  }

  openDropDown() {// method to open dropdown list
    this.showDropDown = true;
  }


  getSearchValue() { // method to fillter the input text  and passing it (only litters allow)
    let str=this.stateForm.value.search
    if (str.length==0) {
      this.filterdstates=this.states;
      return null
    }
    else{
    let last=str.charAt(str.length-1);
    last=last.toUpperCase();
    if(last>='A' && last<='Z'){
      return str;
  }
    else{
      str=str.slice(0, -1)
      this.stateForm.setValue({"search":str});
      return str;
    }
  }
    }

  onClickedOutside(){
   // this.showDropDown=false;
  }
  mouseOver(i){ // method to get the selection that the mous points at
    let Lgth=0;
    if(this.filterdstates.length>5){
      Lgth=5
    }
    else{
      Lgth=this.filterdstates.length;
    }
    for ( let j = 0; j < Lgth; j++) {
      let doc= document.getElementById(String(j));
      doc.style.background = '#F6F6F6';
    }
    this.mouseON=i;
    let doc= document.getElementById(String(this.mouseON));
    doc.style.background = '#707070';
  }
  search(){ // method to export the search result
    setTimeout(()=>{
      this.showDropDown=false;
      if(this.filterdstates.length!=0){
      if(this.mouseON==-1){
        this.mouseON=0;
        console.log(this.filterdstates[this.mouseON])
        this.exportsearch.emit(this.filterdstates[this.mouseON])
      }
      else{
      console.log(this.filterdstates[this.mouseON])
      this.exportsearch.emit(this.filterdstates[this.mouseON])}
    }
    },100)
   }

  filter(){// method to filter the cities on change of the input
    setTimeout(()=>{
      this.filterdstates=this.dataFilter.transform(this.states,this.getSearchValue())
      console.log(this.filterdstates)
 }, 50);

}
}
