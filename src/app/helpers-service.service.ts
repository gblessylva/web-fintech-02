import { Injectable } from '@angular/core';

@Injectable()
export class HelpersServiceService {

  constructor() { 


  }
      ///Number of times a Word occurs
     getOccurrence(array, value) {
        return array.filter((v) => (v === value)).length;
    }

    getPercentage =(rate, percent)=>{
      return  rate / percent * 100
    }

}
