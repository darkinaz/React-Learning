import Component from './component';
import Stalas from './stalas';

function App(props) {
return (<>
    <Component per={props.per} name={'Labas'} surname={'Antanai'}></Component>
    <Stalas per={props.per} name={'Labas'} surname={'Antanai'}></Stalas>
    </>);
}

export default App;