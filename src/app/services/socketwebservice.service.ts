import { Injectable, Output,EventEmitter, } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root'
})
export class SocketwebserviceService extends Socket{
  @Output() outEven: EventEmitter<any> = new EventEmitter();
  constructor() {
    super({
      url:'http://localhost:5000/'
    })
  }
}
