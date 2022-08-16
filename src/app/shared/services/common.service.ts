import { DatePipe } from '@angular/common';
import { Injectable } from '@angular/core';

declare const $: any;

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(
  ) { }

  getUser() {
    return JSON.parse(localStorage.getItem('user'));
  }

  isGranted(role: string) {
    if (role.toLowerCase() === this.getUser().role.toLowerCase())
      return true;
    return false
  }

  isGrantedAny(roles: string[]) {
    var result = false
    roles.forEach(role => {
      if (role.toLowerCase() === this.getUser().role.toLowerCase())
        result = true;
    });
    return result;
  }

  generateKey(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() *
      charactersLength));
    }
    return result;
  }

  tConvert (time) {
    // Check correct time format and split into components
    time = time.toString ().match (/^([01]\d|2[0-3])(:)([0-5]\d)?$/) || [time];

    if (time.length > 1) { // If time format correct
      time = time.slice (1);  // Remove full string match value
      time[5] = +time[0] < 12 ? 'AM' : 'PM'; // Set AM/PM
      time[0] = +time[0] % 12 || 12; // Adjust hours
    }
    return time.join (''); // return adjusted time or original string
  }
}
