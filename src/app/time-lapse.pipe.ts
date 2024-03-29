import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeLapse'
})
export class TimeLapsePipe implements PipeTransform {

  transform(value: any): number {
    let today:Date = new Date(); //get current date and time
    let todayWithNoTime:any = new Date(today.getFullYear(), today.getMonth(), today.getDate())
    var dateDifference = Math.abs( todayWithNoTime-value ) //returns value in miliseconds
    const secondsInDay = 86400; //60 seconds * 60 minutes in an hour * 24 hours in a day
    var dateDifferenceSeconds = dateDifference*0.001; //converts miliseconds to seconds
    var dateCounter = dateDifferenceSeconds/secondsInDay;
    var roundOff = Math.floor(dateCounter)
    if (dateCounter >= 1 && todayWithNoTime > value){
      return roundOff;
    }else{
      return 0;
    }
  }

}
