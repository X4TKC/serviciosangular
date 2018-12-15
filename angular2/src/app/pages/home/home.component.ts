import { Component, OnInit } from '@angular/core';
import { UserClass } from '../../clases/UserClass';
import { WSService } from '../../servicios/ws.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public valor1: string;
  public valor2: string;
  public resultado: number;
  private userClass: Array<UserClass>;
  constructor(private wsService: WSService) { }

  ngOnInit() {
  }
  public sumar() {

    this.wsService.get<Array<UserClass>>('/angular/todos', '')
      .subscribe(data => {
        this.userClass = data;
        this.userClass[0].nombre;
       
      }, error => {
        console.log(error);
      });

    this.resultado =
      parseInt(this.valor1, 10) +
      parseInt(this.valor2, 10);
  }

  public restar(){
    this.wsService.put('/angular/modificar/Choque',{nombre:'x4',usuario:'x4',pass:'x4'},'').subscribe(data=>{
      console.log(data);
    });
    this.resultado = parseInt(this.valor1,10)-parseInt(this.valor2,10);
  }
  public multiplicar(){
    this.wsService.post('/angular/insert',{nombre:'x6',usuario:'x6',pass:'x6'},'').subscribe(data=>{
      console.log(data);
    });
    this.resultado = parseInt(this.valor1,10)*parseInt(this.valor2,10);
  
  }
  public dividir(){
    this.wsService.delete('/angular/delete/Choque','').subscribe(data=>{
      console.log(data);
    });
    this.resultado = parseInt(this.valor1,10)/parseInt(this.valor2,10);
  }

}
