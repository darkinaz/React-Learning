import React from 'react'



class Mygtukas extends React.Component {
    constructor() {
        super();
        this.state = { counter: 0 };
        // this.tick = this.tick.bind(this);
    }
    activateLasers(e) {
        // console.log(e);
        e.stopPropagation();
        e.preventDefault();
        //wrong
        // this.setState({
        //     counter: this.state.counter + 1,
        //   });
        // correct
        this.setState((state, props) => ({
            counter: state.counter + props.amount
        }));
        console.log(`Lazeriai ${this.props.textas} aktyvuoti`);

    }
    valio(e) {
        console.log('Valio', this.props.textas);
    }
    // tick() {
    //     this.setState({ date: new Date() });
    // }

    componentDidMount() {


    }

    componentWillUnmount() {

    }

    render() {
        return (
            <div className="bin" onClick={(e) => this.valio(e)}>
                <a href="" className="container" onClick={(e) => this.activateLasers(e)}>
                    <div className="submit-feedback">{this.props.tekstas}</div>
                </a>
                <CountDisplay digit={this.state.counter}></CountDisplay>
                <mygtukas2 virve={this.activateLasers}></mygtukas2>
            </div>
        );
    }
}




export default Mygtukas;