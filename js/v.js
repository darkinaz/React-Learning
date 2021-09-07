const createDiv = () => document.createElement('DIV');

// Komponentas
const createDivText = (text) => {
    const element = document.createElement('DIV');
    const textNode = document.createTextNode(text);
    element.appendChild(textNode);
    return element;
}

const addClass = (element, className) => element.classList.add(className);

const withClassName = (element, className) => element.classList.add(className);


// HOC
const GrazusCreateDivText = (text, className) => {
    const div = createDivText(text);
    withClassName(div, className);
    return div;
}




const root = document.querySelector('#root');


root.appendChild(createDivText('Valio'));


const animals = ['Kiškis', 'Lapė', 'Anakonda', 'Sausumų vėplys', 'Bebras'];


const booksTypes = '[{"id":1,"title":"Gro\u017ein\u0117 literat\u016bra"},{"id":2,"title":"Populiarioji psichologija"},{"id":3,"title":"Literat\u016bra vaikams ir jaunimui"},{"id":4,"title":"Pom\u0117giai"},{"id":5,"title":"\u0160eima, sveikata"},{"id":6,"title":"Literat\u016bra u\u017esienio kalbomis"},{"id":7,"title":"Dalykin\u0117 literat\u016bra"},{"id":8,"title":"Vadov\u0117liai, pratybos ir knygos mokslams"}]';


// animals.forEach(animal => {
//     // const div = createDivText(animal); // elemento sukurimas
//     // addClass(div, 'grozis');
//     const div = GrazusCreateDivText(animal, 'grozis');
//     root.appendChild(div); // nuleidimas ant zemes i root diva
// });


JSON.parse(booksTypes).forEach(type => {
    const div = GrazusCreateDivText(type.title, 'grozis');
    root.appendChild(div); // nuleidimas ant zemes i root diva
})


// fetch('https://in3.dev/knygos/types/')
//     .then(response => response.json())
//     .then(data => {
//         data.forEach(type => {
//             const div = GrazusCreateDivText(type.title, 'grozis');
//             root.appendChild(div); // nuleidimas ant zemes i root diva
//         })
//     })