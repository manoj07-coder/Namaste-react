import React from "react";

class UserClass extends React.Component {

    constructor(props) {
        super(props);
    }
    render (){
        const {name,location} = this.props;

        return (
        <div className="user-card">
            <h2>Name: {name} (class)</h2>
            <h3>Location: {location}</h3>
            <h4>Contact: @ManojSulyakodi67</h4>
        </div>
        )
    }
}

export default UserClass;