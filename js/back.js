
function Calcular(){

    var ac = document.getElementById("Alturacaidalibre");
    var ap = document.getElementById("Alturaproyectil");
    var d = document.getElementById("Distancia");

    ac=parseFloat(ac.value);
    ap=parseFloat(ap.value);
    d=parseFloat(d.value);

    var angulo= Math.atan(ac/d);
    var coseno=(Math.cos(angulo));

    var velocidad=(d/coseno)*(Math.sqrt(9.81/(2*(ac+ap))));

    var a = document.getElementById("Resultado1");

    var resultado=String(velocidad.toFixed(2));
    a.value= resultado.concat(" m/s");

}