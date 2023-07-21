import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
  
export class FilterPipe implements PipeTransform {

  transform(ninjas: any[], searchTerm: string): any[] {
    
    if (!searchTerm) {
      return ninjas;
    } else {
      return ninjas.filter(ninja => {
        return ninja.name.toLowerCase().includes(searchTerm.toLowerCase());
      });
    }
  }
  
}
