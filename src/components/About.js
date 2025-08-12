import User from "./User";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";
import { useContext } from "react";

const About = () => {
  const { loggedInUser } = useContext(UserContext);

  return (
    <div className="p-5">
      <h1 className="text-4xl text-[#333] mb-2.5">About Us</h1>
      <h2 className="text-xl text-[#555] mb-5">
        This is the Namaste React Series
      </h2>
      <h3>loggedIn User: {loggedInUser}</h3>
      {/* <User name="Manoj Sulyakodi" location="Chikkamagaluru"/> */}
      <UserClass name="Manoj Sulyakodi" location="Chikkamagaluru" />
    </div>
  );
};

export default About;
