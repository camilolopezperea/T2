export class Casoscovid {
    public cidad: string;
    public casosconfirmados: string;
    public casosrecuperados: string;
    public muertes: string;
    public casosactivos: string;

    constructor(raw: any){
        if(raw.hasOwnProperty('cidad')){
            this.cidad = raw.cidad;
        }
        if(raw.hasOwnProperty('casosconfirmados')){
            this.casosconfirmados = raw.casosconfirmados;
        }
        if(raw.hasOwnProperty('casosrecuperados')){
            this.casosrecuperados = raw.casosrecuperados;
        }
        if(raw.hasOwnProperty('muertes')){
            this.muertes = raw.muertes;
        }
        if(raw.hasOwnProperty('casosactivos')){
            this.casosactivos = raw.casosactivos;
        }
        
    }
}