
import { Usuario } from "./usuario";
export class Mascota{
    idMascota: number;
    nombre: string;
    usuario:Usuario;
    fechaNacimiento:Date ;



    constructor(){
        this.idMascota = 0;
        this.nombre ="";
        this.usuario=new Usuario();
        this.fechaNacimiento= new Date();
    }

}