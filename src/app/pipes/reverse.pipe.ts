import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(ch : string) {
    let final = "" ;
    for (let i=ch.length-1; i>0 ; i--) {
      final=final+ch[i];
      
    }
    final = final + ch[0]
    return final;

  }

}
