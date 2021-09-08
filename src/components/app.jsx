import Kvadratas from './kvadratas';

const data = ['Rudasis', 'Baltas', 'Brigadinis'];
function App() {
    return (<>
        {data.map((b,i) => <Kvadratas key={i} bebras={b} />)}


    </>);
}

export default App;