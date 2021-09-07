// function addElement () {

//     const suo = document.createElement("div");
//     return suo;
// };  

// const suo2 = () => document.createElement("div");
// Sukuria div'a pagal id ir sukuria texta >>

// const creatDiv = () => document.createElement("div");


// const createDivText = (text) => {
//     const element = document.createElement('div');
//     const textNode = document.createTextNode(text);
//     element.appendChild(textNode);
//     return element;
// }

// const data = ['Labas', 'Pats', 'tu labas'];
// const root = document.querySelector('#root');
// root.appendChild(createDivText('TEXTAS'));


// const data = ['Labas','Pats','tu'].split(',');
// for (const d in data) {
//     var newElement = document.createElement('div');
//     newElement.id = cars[d]; newElement.className = "data";
//     newElement.innerHTML = cars[d];
//     document.body.appendChild(newElement);
// } 


  
document.getElementById('root').appendChild(document.createElement('div').appendChild(document.createTextNode('Labas')));


const createDivText = (text) => {
    const element =  document.createElement("div");
    const textNode = document.createTextNode(text);
    element.appendChild(textNode);
    return element;
}

const root = document.querySelector("#root");

const data = ['Labas', 'pats', 'tu labas'];

data.sort(function(a, b) {
    let nameA = a[2].toUpperCase(); // ignore upper and lowercase
    let nameB = b[2].toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    // names must be equal
    return 0;
  });

root.appendChild(createDivText(data[0]));
root.appendChild(createDivText(data[1]));
root.appendChild(createDivText(data[2]));


const data2 = new Set(['Labas', 'pats', 'tu labas']);

const data2_arr = Array.from(data2);

console.log(data2_arr[2]);


const data3 = new Map([

    ['viens', 'Labas'],
    ['du', 'pats'],
    ['trys', 'tu labas']

]);

const data4 = {

    viens: 'Labas',
    du: 'pats',
    trys: 'tu labas'

};

const sorting =  data.sort( function(a,b) {

    return a.charAt(2).toLowerCase().charCodeAt() - b.charAt(2).toLowerCase().charCodeAt()

  })

