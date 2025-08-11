import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "dummy",
        location: "dummy",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/manoj07-coder");
    const json = await data.json();
    console.log(json);
    this.setState({
      userInfo: json,
    });
  }

  render() {
    const { name, location, login, avatar_url } = this.state.userInfo;

    return (
      <div className="border border-gray-200 rounded-2xl p-6 my-6 mx-auto max-w-md bg-gradient-to-br from-gray-50 to-gray-100 shadow-lg hover:shadow-xl text-center transition-shadow duration-200 ease-in-out">
        <img
          src={avatar_url}
          alt={name}
          className="w-24 h-24 mx-auto rounded-full shadow-md mb-4 border border-gray-300"
        />
        <h2 className="text-xl font-semibold text-gray-800">Name: {name}</h2>
        <h3 className="text-lg text-gray-600">Location: {location}</h3>
        <h4 className="text-gray-500 text-sm mt-1">Login: {login}</h4>
      </div>
    );
  }
}

export default UserClass;
