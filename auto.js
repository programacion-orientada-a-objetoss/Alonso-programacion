import Auto from "./main.js";

let auto1 = new Auto("Ford", 2000, "rojo", 100);
let auto2 = new Auto("nissan gtr 500", 2017, "negro", 100);
let auto3 = new Auto("honda", 2008,);

console.log(`color ${auto1.color}`);//lectura
console.log(`color ${auto2.color}`);//lectura
auto1.color = "amarillo";//escritura
auto2.color = "gris lunar";//escritura


auto1.encender();
auto2.encender();
auto3.encender();

auto1.avanzar(50,2);


auto1.apagar();


auto1.avanzar(20,1);