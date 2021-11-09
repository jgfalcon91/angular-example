import { ProviderService } from './../services/provider.service';
import { Personas } from './../models/personas.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit {
  object: any;

  personas: Personas[] = [];

  constructor(public provider: ProviderService) {
    provider.getPersonas().then(data => {
      this.object = data;
      for (let item of this.object) {
        var persona = new Personas(item['first'], item['last'], item['email'], item['address']);

        this.personas.push(persona);
      }
      
      this.setStorage(this.personas);
    });
  }

  ngOnInit(): void {
  }

  registrar(data: any){
    var persona = new Personas(data.nombre, data.apellido, data.email, data.direccion);

    this.personas.push(persona);

    this.setStorage(this.personas);
  }

  setStorage (data: any){
    localStorage.setItem('Personas', JSON.stringify(data));
  }

}
