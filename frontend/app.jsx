import './scss/style.scss';
import Potatoes from './img/potatoes.jpg';
import Timer from './timer.jsx';
import React from 'react';

const I_SAID = "HOLA";

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: true,
            msg: ""
        };
    }

    componentDidMount() {
        // Get message from the API endpoint
        fetch(`/api/v1/hello?input=${I_SAID}`).then((response) => {
            return response.json();
        }).then(data => {
            this.setState({
                loading: false,
                msg: data.msg,
                youSaid: data.youSaid
            });
        });
    }

    render() {
        return (
            <div className="content">
                <div className="bar top"></div>
                <div className="text">
                    <img className="photo" src={Potatoes} alt="Potatoes"></img>

                    <h1>Hello World!</h1>
                    <p>This is a simple sample template.</p>

                    {(this.state.loading) ? (
                        <p>Loading...</p>
                    ) : (
                        <div>
                            <p>We got the following msg from the server: <i>{this.state.msg}</i></p>
                            <p>I say HOLA, you say: {this.state.youSaid}</p>
                        </div>
                    )}
                </div>
                <div className="bar bottom"><Timer/></div>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
