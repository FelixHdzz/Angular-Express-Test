import { Component, OnInit} from '@angular/core';
import { ItemService } from './restapi.service';
import { Notify } from 'notiflix';
import { Title } from '@angular/platform-browser';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  
  returnItem: any;

  constructor(private itemService: ItemService, titleService: Title, private spinner: NgxSpinnerService) {
    titleService.setTitle('Express Server Test Frontend');
  }
  
  getData(id:string) {

    this.spinner.show();

      setTimeout(() => {

        this.spinner.hide();
      }, 1000);

    try
    {
      var id2;

      if(id == ""){
        id2 = 0;
      }
      else{
        id2 = parseInt(id);
      }

      if (id2 > 0 && id2 < 1001)
      {
        this.itemService.getItems(id).subscribe(data => {
          this.returnItem = data;
        });

        Notify.success('Accion realizada correctamente.');
      }
      else if (id2 > 1000){
        Notify.failure('Valor superior a los registros.');
      }
      else if (id2 < 0)
      {
        Notify.failure('Valores negativos no soportados.');
      }
      else
      {
        Notify.warning('Existen campos vacios.');
      }
      
    }
    catch (exception)
    {
      Notify.failure('Error en obtener informacion del servidor. Codigo: ' + exception);
    }
    finally{
      
    }
  }

  ngOnInit() {
    
  }
}
