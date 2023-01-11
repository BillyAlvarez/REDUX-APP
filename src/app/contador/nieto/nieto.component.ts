import { Store } from '@ngrx/store';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { reset } from '../contador.actions';
import { AppState } from '../app.reducer';


@Component({
  selector: 'app-nieto',
  templateUrl: './nieto.component.html',
  styleUrls: []
})
export class NietoComponent implements OnInit {

contador!: number;
  
  

constructor(private store : Store<AppState>){}

ngOnInit(): void {
  this.store.select('contador').subscribe(contador => this.contador = contador);
}
reset(){
  this.store.dispatch(reset());
}

}
