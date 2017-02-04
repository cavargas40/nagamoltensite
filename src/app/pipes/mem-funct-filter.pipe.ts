import * as _ from "lodash";
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'memFunctFilter'
})
export class MemFunctFilterPipe implements PipeTransform {

  transform(array: any[], query: number): any {   

    let specSel: string = query == 1 ? "DPS": query == 2 ? "TANK" : query == 3 ? "HEALING": "ALL";
    if (query > 0) {
      let arrayWithSpec: any[] = _.filter(array, row=> _.has(row,'character.spec.role') == true );
      return _.filter(arrayWithSpec, row => row.character.spec.role == specSel);
    }
    return array;
  }
}