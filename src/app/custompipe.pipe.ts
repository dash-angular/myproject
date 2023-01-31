import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custompipe'
})
export class CustompipePipe implements PipeTransform {

  transform(value: any, dis,dis1): any {
    return (value-value*dis/100)+dis1;
  }

}
