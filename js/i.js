const createDiv = () => document.createElement('DIV');

const createDivText = (text) => {
    const element = document.createElement('DIV');
    const textNode = document.createTextNode(text);
    element.appendChild(textNode);
    return element;
}

const data = ['Labas', 'pats', 'tu labas'];

const data2 = new Set(['Labas', 'pats', 'tu labas']);

const data3 = new Map([
    ['viens', 'Labas'],
    ['du', 'pats'],
    ['trys', 'tu labas']
]);

const data4 = {
    viens: 'Labas',
    du: 'pats',
    trys: 'tu labas'
}

console.log(data4);


const root = document.querySelector('#root');


root.appendChild(createDivText('Valio'));


// function createDivOld1() {
//     const div = document.createElement('DIV');
//     return div;
// }

// const createDivOld2 = () => {
//     const div = document.createElement('DIV');
//     return div;
// }


// const createDivOld3 = () => document.createElement('DIV');


const animals = ['Kiškis', 'Lapė', 'Anakonda', 'Sausumų vėplys', 'Bebras'];



let c = 0;

const createDiv = () => document.createElement('DIV');

const createDivText = (text) => {
    const element = document.createElement('DIV');
    const textNode = document.createTextNode(text);
    element.appendChild(textNode);
    return element;
}

const data = ['Labas', 'pats', 'tu labas'];

const data2 = new Set(['Labas', 'pats', 'tu labas']);

const data3 = new Map([
    ['viens', 'Labas'],
    ['du', 'pats'],
    ['trys', 'tu labas']
]);

const data4 = {
    viens: 'Labas',
    du: 'pats',
    trys: 'tu labas'
}

console.log(data4);


const root = document.querySelector('#root');


root.appendChild(createDivText('Valio'));


// function createDivOld1() {
//     const div = document.createElement('DIV');
//     return div;
// }

// const createDivOld2 = () => {
//     const div = document.createElement('DIV');
//     return div;
// }


// const createDivOld3 = () => document.createElement('DIV');


const animals = ['Kiškis', 'Lapė', 'Anakonda', 'Sausumų vėplys', 'Bebras'];



let c = 0;

console.log(animals.slice());

animals.sort((a, b) => {

    // console.log(++c, a, b);

    return b.length - a.length
});

console.log(animals);

const V = 'Varlė';

const niceSentence = 'Ruda ' + V + ' plaukia greitai plaukia greitai plaukia greitai plaukia greitai plaukia greitai plaukia greitai plaukia greitai plaukia greitai plaukia greitai plaukia greitai';

const niceSentence1 = `Ruda ${V} plaukia greitai plaukia greitai
 plaukia greitai ${V} plaukia greitai ${V} plaukia greitai
  plaukia greitai plaukia greitai ${V} plaukia greitai plaukia
   greitai ${V} plaukia greitai`;


console.log(niceSentence1);

const A = animals.forEach((value, index) => console.log(`stalčius nr ${index} jame guli ${value}`));

console.log('-----------------------');

const B = animals.map((value) => 'labas ' + value);





console.log(B, animals);