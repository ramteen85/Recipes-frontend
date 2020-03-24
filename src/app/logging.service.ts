import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class LoggingService {
  lastlog: string;

  printLog(message: string) {
    // if (message !== undefined) {
    //   console.log(message);
    // }
    // console.log(this.lastlog);
    this.lastlog = message;
  }
}
