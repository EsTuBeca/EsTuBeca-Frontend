import { Component, OnInit } from '@angular/core';
import { Beca } from 'src/app/models/beca';
import {BecaService} from './../../services/beca.service';
@Component({
  selector: 'app-becas',
  templateUrl: './becas.component.html',
  styleUrls: ['./becas.component.css']
})
export class BecasComponent implements OnInit {
  
  becas: Beca[]=[];

  constructor(private becaService:BecaService) { }

  ngOnInit(): void {
    this.getBeca();
  }

  getBeca(){
    this.becas=this.becaService.getBeca();
  }

}
