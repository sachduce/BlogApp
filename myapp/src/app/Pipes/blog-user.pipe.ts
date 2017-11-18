import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'blogUser',
  pure: false
})
export class BlogUserPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(args==0){return value;}
    return value.filter(val=> val.authorId == args);
  }

}
