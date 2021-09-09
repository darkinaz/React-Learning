
import Bebras from './bebras'

function Kvadratas(props) {
    if ('Brigadinis' == props.bebras) {
        return (
            <div className="kvadratas br">
                <Bebras bebras={props.bebras} />
            </div>
        );
    }

    return (
        <div className="kvadratas">
            <Bebras bebras={props.bebras} />
        </div>
    );
}
export default Kvadratas;