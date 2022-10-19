import { Injectable } from '@angular/core';
import { Beca } from '../models/beca';

@Injectable({
  providedIn: 'root'
})
export class BecaService {

  becas: Beca[]=[{
    title:'Concurso Beca 18 - Convocatoria 2022',
    imgurl:'https://trabajando.pe/wp-content/uploads/2022/07/Beca-18.jpg',
    description:'Concurso dirigido a estudiantes del último año de secundaria y egresados del colegio, con alto rendimiento académico y escasos recursos económicos o en condición de vulnerabilidad o en situaciones especiales.'
  },
  {
    title:'Concurso de Becas Técnicas 2022',
    imgurl:'https://www.formate.pe/eventos/202101/bn-imagen-BCP-Programa-Becas-BCP-estudiar-universidades-institutos-pais.png',
    description:'Las becas son ofrecidas a jóvenes peruanos que están iniciando sus estudios técnicos por primera vez, con la posibilidad de estudiar en institutos como CIBERTEC, CERTUS, TECSUP y Toulouse Lautrec.'
  },
  {
    title:'Estudia en Suiza-Convocatoria 2022',
    imgurl:'https://becasyconvocatorias.org/wp-content/uploads/2020/09/becas-en-suiza-para-latinoamericanos.jpg',
    description:'Dirigido a investigadores, profesionales con grado de magíster y estudiantes posgraduados interesados en continuar con su formación en importantes universidades de Suiza.'
  },
  {
    title:'Concurso de Becas Técnicas 2022',
    imgurl:'https://www.formate.pe/eventos/202101/bn-imagen-BCP-Programa-Becas-BCP-estudiar-universidades-institutos-pais.png',
    description:'Las becas son ofrecidas a jóvenes peruanos que están iniciando sus estudios técnicos por primera vez, con la posibilidad de estudiar en institutos como CIBERTEC, CERTUS, TECSUP y Toulouse Lautrec.'
  },
  {
    title:'Estudia en Suiza-Convocatoria 2022',
    imgurl:'https://becasyconvocatorias.org/wp-content/uploads/2020/09/becas-en-suiza-para-latinoamericanos.jpg',
    description:'Dirigido a investigadores, profesionales con grado de magíster y estudiantes posgraduados interesados en continuar con su formación en importantes universidades de Suiza.'
  },
  {
    title:'Concurso de Becas Técnicas 2022',
    imgurl:'https://www.formate.pe/eventos/202101/bn-imagen-BCP-Programa-Becas-BCP-estudiar-universidades-institutos-pais.png',
    description:'Las becas son ofrecidas a jóvenes peruanos que están iniciando sus estudios técnicos por primera vez, con la posibilidad de estudiar en institutos como CIBERTEC, CERTUS, TECSUP y Toulouse Lautrec.'
  },
  {
    title:'Estudia en Suiza-Convocatoria 2022',
    imgurl:'https://becasyconvocatorias.org/wp-content/uploads/2020/09/becas-en-suiza-para-latinoamericanos.jpg',
    description:'Dirigido a investigadores, profesionales con grado de magíster y estudiantes posgraduados interesados en continuar con su formación en importantes universidades de Suiza.'
  },
]

  constructor() { }

  public getBeca(){
    return this.becas.slice();
  }
  public addBeca(beca:Beca){
    this.becas.unshift(beca);
  }
}