import React, { Component } from 'react';

class Return extends Component {
    constructor() {
        super();
        this.submitHandler = this.submitHandler.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            bookingNumber: ""
        };
    }

    handleChange(e) {
        this.setState({ bookingNumber: e.target.value })
    }

    submitHandler(e) {
        e.preventDefault();
        if (this.state.bookingNumber)
            this.props.returnCar(this.state.bookingNumber);
    }
    render() {
        return (
            <div>
                <h3>
                    Lämna bil här
                </h3>
                <div>
                    <h6>
                        Vilket var ditt bokningsnummer?
                    </h6>
                    <p>
                        Välj 1 för liten bil, välj 2 för van, välj 3 för minibuss
                    </p>
                    <div>
                        <form onSubmit={this.submitHandler}>
                            <input type="text" placeholder="Biltyp" onChange={this.handleChange} required />
                            <input type="submit" value="Välj bil" />
                        </form >
                    </div>
                </div>
            </div>
        );
    }
}

export default Return;