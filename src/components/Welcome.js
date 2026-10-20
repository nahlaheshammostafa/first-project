import React from 'react';
class Welcome extends React.Component {
    state = {
        firstName: "Nahla",
        lastName: "Hesham",
    };
    render() {
        return (
            <div>
                <h1>Hi, {this.props.name}!</h1>
                <p>Your Age is {this.props.age}</p>
                <p>Your Address is {this.props.address}</p>
                <p> created by {this.state.firstName} {this.state.lastName}</p>
            </div>
        );
    }
}

export default Welcome;