import * as _ from "lodash";
import { Pipe, PipeTransform } from '@angular/core';

import { Utilities } from '../util';

@Pipe({
  name: 'memberFilter'
})
export class MemberFilterPipe implements PipeTransform {

  transform(array: any[], query: string): any {

    let util: Utilities = new Utilities();

    var mapObj = { á: "a", é: "e", í: "i", ó: "o", ú: "u" }

    if (query) {
      return _.filter(array, row => row.character.name.toLowerCase().replace('á', 'a')
                                                                    .replace('é', 'e')
                                                                    .replace('í', 'i')
                                                                    .replace('ó', 'o')
                                                                    .replace('ú', 'u')
                                        .indexOf(query.toLowerCase().replace('á', 'a')
                                                                    .replace('é', 'e')
                                                                    .replace('í', 'i')
                                                                    .replace('ó', 'o')
                                                                    .replace('ú', 'u')) > -1)
      // return _.filter(array, row => { 
      //   let charname = util.replaceAll(row.character.name.toLowerCase(), mapObj);
      //   let queryformatted = util.replaceAll(query.toLowerCase(), mapObj);
      //   charname.indexOf(queryformatted) > -1  
      // });

    }
    return array;
  }
}