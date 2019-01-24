import React, { Component } from 'react';

class BookedCar extends Component {
    // constructor(props) {
    //     super(props);
    // }

    carType(car) {
        console.log(car);
        if (car === 1)
            return "Liten bil";
        else if (car === 2)
            return "Van";
        else if (car === 3)
            return "Minibus";
        else
            return "Okänd typ"
    }

    render() {
        console.log(this.props.bookedCar)

        if (this.props.bookedCar.state)
            return (<div>
                <div>
                    Din bokade {this.carType(this.props.bookedCar.carType)} har registreringsnummer: {this.props.bookedCar.regNum}
                </div>
                <div>
                    Ditt bokningsnummer är {this.props.bookedCar.carbookingId}
                </div>
            </div>)
        else
            return (<div></div>)
    }
}

export default BookedCar;