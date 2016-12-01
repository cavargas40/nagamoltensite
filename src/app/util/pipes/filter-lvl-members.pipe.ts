import { Pipe, PipeTransform } from '@angular/core';
import { Member } from '../../model/member';

@Pipe({
  name: 'filterLvlMembers'
})
export class FilterLvlMembersPipe implements PipeTransform {

  transform(value: Member[], args?: any): any {
    
    let [minLvL] = args;
    return  value.filter(member => { return member.character.level >= +minLvL });
  }

}
