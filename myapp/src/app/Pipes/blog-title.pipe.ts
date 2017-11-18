import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'blogTitle'
})
export class BlogTitlePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(args==0){return value;}
    return value.filter((val) =>
      val.title.toLocaleLowerCase().indexOf(args.toLowerCase()) !== -1 || val.type.toLocaleLowerCase().indexOf(args.toLowerCase()) !== -1);
  }


}
