import { Pipe, PipeTransform } from '@angular/core';
// a pipe that filters an array
// chicking for containg a given string
@Pipe({name: 'searchFilter'})
export class SearchFilterPipe implements PipeTransform {
    transform(value: any, search: string): any {


         if  (!search) {return value; }
         let solution = value.filter(v => {
            if ( !v ) {return;}
           return  v.toLowerCase().indexOf(search.toLowerCase()) !== -1;
        })
        return solution;
    }
}
