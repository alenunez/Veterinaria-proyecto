

export class Usuario{
    idUsuario: number;
    nombres: string;
    apellidos: string;
    correo: string;
    password: string;
    identificacion:number;
    telefono: string;
    direccion: string;
    fechaNacimiento:Date ;
    rol:string;



    constructor(){
        this.idUsuario = 0;
        this.nombres ="";
        this.apellidos = "";
        this.correo = "";
        this.password="";
        this.identificacion=0;
        this.telefono ="";
        this.direccion ="";
        this.fechaNacimiento= new Date();
        this.rol = "";


    }

}