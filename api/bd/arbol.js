class misDatos{
    constructor(){
        this.datos=[]
    }
    agregar(nuevo){
        this.datos.push(nuevo)
    }
    buscar(id){
        return this.datos[0];
    }
}
module.exports=new misDatos();