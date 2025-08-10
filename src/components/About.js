import User from "./User";
import UserClass from "./UserClass";

const About = () => {
    return (
        <div>
            <h1>About Us</h1>
            <h2>This is the Namaste React Series</h2>
            <User name="Manoj Sulyakodi" location="Chikkamagaluru"/>
            <UserClass name="Manoj Sulyakodi" location="Chikkamagaluru" />
        </div>
    )
}

export default About;