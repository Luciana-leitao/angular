import { Component, OnInit } from '@angular/core';

import { CursosService } from './cursos/cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  nomePortal : String;

  cursos : String[];

  constructor(private cursosSevice : CursosService) { 
    this.nomePortal = 'http://loiane.training'

    this.cursos = this.cursosSevice.getCursos();
    //var Servico = new CursosService();
  }

  ngOnInit(): void {
  }

}
