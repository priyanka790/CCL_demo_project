import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalised',
})
export class CapitalisedPipe implements PipeTransform {
  transform(value: string): string {
    let newArray = value.split(' ').map((el)=>{
       return el.charAt(0).toUpperCase() + el.slice();
    })
    
    return newArray.join(' ');
  }
}
