import { Component, OnInit, ViewChild } from '@angular/core';
import { FormularioServiceService } from 'src/app/service/formulario-service.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  fechaSeleccionada : string = '';
  fechaTrabajada : string = '';
  datos : any;
  mensajeDeError : string = '';
  mensajeDeSuccess : string = '';

  constructor(private formularioService : FormularioServiceService) { }

  ngOnInit(): void {
  }

  formatDate() {
    const parteFechas = this.fechaSeleccionada.split('-');
    const fechaRefactorizada = `${parteFechas[2]}-${parteFechas[1]}-${parteFechas[0]}`;
    this.fechaTrabajada = fechaRefactorizada;
  }

    buscar(){
      const date = '17-10-2022'
      this.formularioService.getCollections(this.fechaTrabajada)
      .subscribe(response => {
        this.datos = response;
        if(this.datos.data.length <= 0){
          this.mensajeDeError = `No se encontraron datos en la fecha: ${this.fechaTrabajada}`;
          console.log('no se encontraron datos en la fecha: ', this.fechaTrabajada)
          this.mensajeDeSuccess = '';
        }else{
          this.mensajeDeSuccess = `Se encontraron ${this.datos.data.length} en la fecha: ${this.fechaTrabajada}`
          this.mensajeDeError = '';
        }
      }, error => {
        console.log(error)
      });
    }
}