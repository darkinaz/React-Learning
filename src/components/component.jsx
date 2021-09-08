// import person from '../Data/person';

function Component(props) {
    // props.name = 'Labas';
return (
    <div>
    <h1>Hello, Barsukas!</h1>
    <small>{props.name} {props.surname} per {props.per}</small>
    </div>
    );
}

export default Component;