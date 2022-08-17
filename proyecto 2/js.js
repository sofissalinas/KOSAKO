console.log('Hola mundo!');
const myName = 'Sofi Salinas';
let myAge = 18;
let x = 3;
let y = 4;
const likesMusic = true;
console.log('myName', myName);
console.log('myAge', myAge);
console.log('x', x);
console.log('y', y);
console.log('likesMusic', likesMusic);

// myName='Juan';

console.log('myName', typeof myName);
console.log('myAge', typeof myAge);
console.log('x', typeof x);
console.log('y', typeof y);
console.log('likesMusic', typeof likesMusic);

let z = y * x;
console.log(z);

z = y / x;
console.log(z);

z = y + x;
console.log(z);

z = y - x;
console.log(z);

console.log(x == y);
console.log(x != y);
console.log(x === y);
console.log(x !== y);
console.log(x > y);
console.log(x >= y);
console.log(x < y);
console.log(x <= y);

if (likesMusic == true) {
  console.log('Me gusta la música');
} else {
  console.log('No me gusta la música');
}
let compraRealizada = false;
let pisoBarrido = true;
let dinero;
if (compraRealizada == true || pisoBarrido == true) {
  dinero = 10;
} else {
  dinero = 5;
}

console.log('El dinero de tu hermanito es:', dinero);

let compraRealizada2 = false;
let pisoBarrido2 = true;
let dinero2;
if (compraRealizada2 == true || pisoBarrido2 == true) {
  dinero2 = 20;
} else {
  dinero2 = 0;
}

console.log('El dinero de tu hermanito es:', dinero2);

let YOB = 2004;
const d = new Date();

let CY = d.getFullYear();

for (let year = YOB; year <= CY; year++) {
  if (year == YOB) {
    console.log('En ' + year + ' yo nací');
  } else if (year - YOB == 1) {
    console.log('En ' + year + ' yo tenía ' + (year - YOB) + ' año');
  } else if (year == CY) {
    console.log('En el ' + year + ' yo tendré ' + (year - YOB) + ' años');
  } else {
    console.log('En ' + year + ' yo tenía ' + (year - YOB) + ' años');
  }
}

for (let num = 0; num <= 35; num++) {
  console.log('No debo de comerme el lonche de mis compañeros');
}

let year = YOB;
while (year <= CY) {
  let age = year - YOB;
  if (year == YOB) {
    console.log('En ' + year + ' yo nací');
  } else if (age == 1) {
    console.log('En ' + year + ' yo tenía ' + age + ' año');
  } else if (year == CY) {
    console.log('En el ' + year + ' yo tendré ' + age + ' años');
  } else {
    console.log('En ' + year + ' yo tenía ' + age + ' años');
  }
  year++;
}

const aCelsius = (fahrenheit) => (5 / 9) * (fahrenheit - 32);
console.log(aCelsius(100));

const WHITE_KEYS = ['z', 'x', 'c', 'v', 'b', 'n', 'm'];
const BLACK_KEYS = ['s', 'd', 'g', 'h', 'j'];

const keys = document.querySelectorAll('.key');
const whiteKeys = document.querySelectorAll('.key.white');
const blackKeys = document.querySelectorAll('.key.black');
function playNote(key) {
  const noteAudio = document.getElementById(key.dataset.note);
  noteAudio.play();
  key.classList.add('active');
  noteAudio.addEventListener('ended', () => {
    key.classList.remove('active');
  });
}
document.addEventListener('keydown', (e) => {
  if (e.repeat) return;
  const key = e.key;
  const whiteKeyIndex = WHITE_KEYS.indexOf(key);
  const blackKeyIndex = BLACK_KEYS.indexOf(key);
  console.log(whiteKeys[whiteKeyIndex]);
  if (whiteKeyIndex > -1) playNote(whiteKeys[whiteKeyIndex]);
  if (blackKeyIndex > -1) playNote(blackKeys[blackKeyIndex]);
});


const kosako={
    nombre: {
            nombre: 'kosako',
especie: 'conejo',
        color: 'blanco con cafe',
    },
    bio:function(){
    console.log (this.nombre+'es un'+this.especie+'el es de color:'+this.color);
},
      presentarseArrownFn: ()=>{console.log (this.nombre.especie)},
          presentarse: function(){
              console.log ('mi mascota es un'+this.especie+'de nombre '+this.nombre);
          }
};

const frutas= ['melon', 'sandia', 'mango', 'fresa', 'cereza'];
console.log (frutas [5]);
frutas.push('frambuesa');
console.log('Mis frutas agregando frambuesa: ',frutas);
frutas.push ('piña');
frutas[0]='Higo';
console.log('Mis frutas cambiando melon por Higo: ',frutas)
frutas.shift ();
frutas.shift(); 
console.log('Mis frutas removiendo el primer elemento: ',frutas)

const calificaciones= [10,6,7,9,9,8];
const reprobado = calificaciones.find( calificacion => calificacion < 6);

let valorInicial=0;
const sumaCalificaciones = calificaciones.reduce( (valorPrevio, valorActual) => valorPrevio + valorActual, valorInicial) 
keys.forEach((key) => {
  key.addEventListener('click', () => playNote(key));
});

const getAge = async () => {
    const response = await fetch('https://api.agify.io/?name=sofi');
    console.log(response);

    const data = await response.json();
    console.log(data)
}

const printJuan = () => {
    let age = 2;
    let years = 1/2;
    console.log('Kui' + (age + years));
}

const main = async () => {
    await getAge();

    printJuan();
    console.log('Kosako')
}
main();
