import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterMascota'
})
export class FilterMascotaPipe implements PipeTransform {

  transform(value: any,args:any): any {
    const resultPost=[];
    for(const post of value){
      if(post.nombre.indexOf(args)> -1){
        resultPost.push(post)
      }
    }
    return resultPost;
  }

}
