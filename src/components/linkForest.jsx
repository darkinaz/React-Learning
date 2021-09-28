import { Link, Switch, Route } from 'react-router-dom';
import Street from './street';

function LinkuMiskas() {

    return (
        <div className='forest'>
            <nav>
                <Link to={'home'}><h3>Linku miskas</h3></Link>
                <Link to={'road'}><h3>Linku plenta</h3></Link>
                <div>
                <Link to={'/1'}><h3>Misko gatve1</h3></Link>
                <Link to={'/2'}><h3>Misko gatve2</h3></Link>
                <Link to={'/3'}><h3>Misko gatve3</h3></Link>
                <Link to={'/4'}><h3>Misko gatve4</h3></Link>
                <Link to={'/5'}><h3>Misko gatve5</h3></Link>
                </div>
            </nav>

            <Switch>
                
                <Route path={'/home'}>
                    <h1>Home</h1>
                </Route>
                <Route path={'/road'}>
                    <h1>Road</h1>
                </Route>
                <Route path={'/:street'} children={<Street/>} />
                
                <Route path={'/'}>
                    <h1>The beggining</h1>
                </Route>
            </Switch>
        </div>
    )   
};

export default LinkuMiskas