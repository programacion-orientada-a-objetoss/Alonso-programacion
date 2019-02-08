class Auto {
    constructor  (color, marca, modelo){
        this.estado = "Apagado";
        this.color = color;
        this.marca = marca;
        this.modelo = modelo;
        this.kilometraje = 0;
    }
    encender(){
        this.estado = "Encendido";
    
    }

    apagar(){
        this.estado = "Apagado";
    }
}