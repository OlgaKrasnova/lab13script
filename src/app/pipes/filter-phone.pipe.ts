import { Pipe, PipeTransform } from '@angular/core';
import { isNullOrUndefined } from 'util';

@Pipe({
  name: 'filterPhone'
})
export class FilterPhonePipe implements PipeTransform {

  transform(persons: string[], searchStr: string) {
    if(!isNullOrUndefined(persons) && searchStr.trim().length > 0) {
      let newArr = persons.filter(person => 
        person.toLocaleLowerCase().indexOf(searchStr.toLocaleLowerCase()) === 0);
      return newArr;
    } else{
      return persons;
    }
  }

}
