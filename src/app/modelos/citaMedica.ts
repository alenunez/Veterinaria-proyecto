import { Mascota } from './mascota';

import { Usuario } from "./usuario";

export class CitaMedica{
    idCitaMedica: number;
    diagnostico: string;
    tratamiento:string;
    usuario:Usuario;
    mascota:Mascota;
    fecha:Date ;



    constructor(){
        this.idCitaMedica = 0;
        this.diagnostico ="";
        this.tratamiento ="";
        this.usuario=new Usuario();
        this.mascota=new Mascota();
        this.fecha= new Date();
    }

}