import { Component, OnInit } from '@angular/core';
import { Beca } from 'src/app/models/beca';
import { User } from './../../models/user';
import {BecaService} from './../../services/beca.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute} from '@angular/router';
import { environment } from './../../../environments/environment';
import { MatTableDataSource } from '@angular/material/table';
import { SearchPipe } from '../shared/search.pipe';
@Component({
  selector: 'app-becas',
  templateUrl: './becas.component.html',
  styleUrls: ['./becas.component.css']
})
export class BecasComponent implements OnInit {
  
  becas: Beca[]=[];
  user!:any;
  userId:any;
  becaId:any;
  snackBar: any;
  searchText!:string;
  Title='';
  // isReadMore: boolean=false;
  data!: string;
  dataSource = new MatTableDataSource(this.becas);
  
  constructor(
    public route:ActivatedRoute,
    private becaService:BecaService) { }

  ngOnInit(): void {
    this.userId = this.route.snapshot.paramMap.get('id3');
    this.getBeca();
  }

  getBeca(){
    this.becaService.getBeca().subscribe((data:Beca[])=>{
      this.becas= data;
    })
  }
  deleteBeca(id: number) {
    this.becaService.deleteBeca(id).subscribe(() => {
      this.becas = this.becas.filter((e: Beca) => {
        return e.id !== id ? e : false;
      });
      this.snackBar.open('La beca fue eliminada con exito!', '', {
        duration: 6000,
      });
    });
  }

    processBecaResponse(resp: any) {
      const dateBeca: Beca[] = [];
  
      
      this.data
   
    }

    filterBecaByTitle(title: any) {
      if (title.length === 0) {
        return this.getBeca();
      }
  
      this.becaService.getBecaByTitle(title).subscribe((resp: any) => {
        this.processBecaResponse(resp);
      });
    }

    /*applyFilter(filterValue: string) {
      this.dataSource.filter = filterValue.trim().toLowerCase();
    }*/
    applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLowerCase();
    }
  }
/*   checkDataLength(data:string){

  } */
  


