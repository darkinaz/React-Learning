import React from 'react';
import SmallCow from './smallCow';



class App extends React.Component {

    constructor() {
        super();
        this.state = {
            cows: [],
            cowInput: '',

        };
    }
    addCow = () => {
        const cow = { color: this.state.cowInput };
        const cows = this.state.cows.slice();
        // this.setState(state => ({ cows: state.cows.slice().push(cow) }));
        cows.push(cow);
        this.setState({
            cows: cows
        })
        localStorage.setItem('AllCows', JSON.stringify(cows));
    }

    // doColor = (e) => {
    //     this.setState({
    //         cowInput: e.target.value,
    //     });
    // }
    cowInputHandler = (e) => {
        this.setState({
            cowInput: e.target.value,
        });
    }
    componentDidMount() {
        const cows = JSON.parse(localStorage.getItem('AllCows'));
        if (null === cows) {
            return;
        }
        this.setState({
            cows: cows
        })
    }

    render() {
        return (
            <>
                {this.state.cows.map((b, i) => <SmallCow key={i} color={b.color} />)}
                <div>
                    <input type="text" value={this.state.cowInput} onChange={this.cowInputHandler}></input>
                    <button className="input-button" onClick={this.addCow}>Add Cow</button>
                </div>
            </>
        );
    }
}

export default App;