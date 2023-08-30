import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myFilterSearch'
})
export class MyFilterSearchPipe implements PipeTransform {

  transform(T : any, term : string) {
    if(term === undefined) { 
      return T;
    }
    return T.filter((obj) => {
      return (  obj.teamone.toLowerCase().includes(term.toLowerCase()) ||
      obj.teamtwo.toLowerCase().includes(term.toLowerCase()) 
      );
      
      
    });
  }
}
