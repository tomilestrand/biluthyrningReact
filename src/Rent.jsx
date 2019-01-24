import React, { Component } from 'react';

class Rent extends Component {

    constructor() {
        super();
        this.submitHandler = this.submitHandler.bind(this);
        this.handleChangeCarType = this.handleChangeCarType.bind(this);
        this.handleChangeSSN = this.handleChangeSSN.bind(this);
        this.state = {
            carType: "",
            SSN: ""
        };
    }

    handleChangeCarType(e) {
        this.setState({ carType: e.target.value })
    }

    handleChangeSSN(e) {
        this.setState({ SSN: e.target.value })
    }

    submitHandler(e) {
        e.preventDefault();
        if (this.state.carType)
            this.props.bookCar(this.state.carType, this.state.SSN);
    }

    render() {
        return (
            <div>
                <h3>
                    Hyr bil här:
                </h3>
                <div>
                    <h6>
                        Vilken typ av bil vill du hyra?
                    </h6>
                    <p>
                        Välj 1 för liten bil, välj 2 för van, välj 3 för minibuss
                    </p>
                    <div>
                        <form onSubmit={this.submitHandler}>
                            <input type="text" placeholder="Biltyp" onChange={this.handleChangeCarType} required />
                            <input type="text" placeholder="Personnummer" onChange={this.handleChangeSSN} required />
                            <input type="submit" value="Välj bil" />
                        </form >
                    </div>
                </div>
            </div>
        );
    }
}

export default Rent;