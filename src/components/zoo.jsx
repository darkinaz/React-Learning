import { animals as list } from "../data/animals";
import { useState } from 'react';
import { Route, Switch } from "react-router";
import AnimalLink from "./animalLink";

function Zoo() {

    const [animals, setAnimals] = useState(list);


    return (
        <div className="zoo">
            <h1>Welcome to the ZOO</h1>
            <Switch>
                <Route path={'/:id'}>


                </Route>
                <Route path={'/'}>
                    <ul>
                        {animals.map(animal => <AnimalLink key={animal.id} animal={animal} />)}
                    </ul>
                </Route>
            </Switch>

        </div>
    )
}

export default Zoo;