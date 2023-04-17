import React from "react";
const Profile = (props) => {
  return (
    <div>
      {props.children}
      <h2>{props.fullName}</h2>
      <p>{props.bio}</p>
      <p>{props.profession}</p>
      <button onClick={props.handleName}>CONTACTER</button>
    </div>
  );
};

Profile.defaultProps = {
  fullName: "Nefzi",
  bio: "",
  profession: "",
  handleName: () => {},
};

export default Profile;
