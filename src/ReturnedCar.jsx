import React, { Component } from 'react';

class ReturnedCar extends Component {
    // constructor(props) {
    //     super(props);
    // }



    render() {
        console.log(this.props.returnedCar)

        if (this.props.returnedCar.state)
            return (<div>
                <div>
                    Din bil har återlämnats
                </div>
            </div>)
        else
            return (<div></div>)
    }
}

export default ReturnedCar;