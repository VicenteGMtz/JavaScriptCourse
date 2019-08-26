
//herencia


const Universidad=function(nombre,ciudad,pais){
    this.nombre=nombre;
    this.ciudad=ciudad;
    this.pais=pais;

}

//prootype
Universidad.prototype.nombreUni=function(){
    return `La universidad ${this.nombre},se encuentra en ${this.pais}, en la ciudad de ${this.ciudad}`;
}

const universidad1=new Universidad('utp','puebla','mexico');

//console.log(universidad1.nombreUni());
console.log(universidad1);



const alumno=function(nombre,ciudad,pais,alumno,matricula){

    Universidad.call(this,nombre,ciudad,pais);
    this.matricula=matricula;
    this.alumno=alumno;
}






//heredar un prototipo

alumno.prototype=Object.create(Universidad.prototype);

const alumno1=new alumno('utp','puebla','mexico','vicente',22234301092);

alumno.prototype.nombreAlumno=function(){
    return `${this.alumno}, tu matricula es: ${this.matricula}, y asistes a la universidad ${this.nombre},en la ciudad de ${this.ciudad}`;
}

console.log(alumno1.universidad1);
//console.log(alumno1);

//imprimir alumno con la herencia de la info de la universiada
console.log(alumno1.nombreUni());

//
console.log(alumno1.nombreAlumno());