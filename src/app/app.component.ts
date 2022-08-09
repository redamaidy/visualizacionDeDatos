import { Component } from '@angular/core';
import { SocketwebserviceService } from './services/socketwebservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'visualizacionDeDatos';
  constructor(private socketWeb: SocketwebserviceService,){
    this.socketWeb.outEven.subscribe((res: any) => {

      /*const { prevPost } = res;
      this.writeSingle(prevPost, false);*/
    })

  }
}
