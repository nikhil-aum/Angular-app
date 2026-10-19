import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'trimText',
})
export class TrimTextPipe implements PipeTransform {
  transform(value: string, ...args: number[]): string {
    console.log(args);
    if(args.length){
      return value.substring(0,args[0]) + "..."
    }else{
      return value.substring(0,10)+"..."
    }
    
  }
}
