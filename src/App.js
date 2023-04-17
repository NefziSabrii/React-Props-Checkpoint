import Profile from "./profile/component/Profile.js"
import './App.css';

function App(props) {
  return (
    <div className="divp">
      <Profile
        fullName="Nefzi Sabri"
        bio="developper"
        profession="Full stack  Developer"
        handleName={() => alert("My Name is Nefzi Sabri")}
      >
        <img
          src="https://st2.depositphotos.com/1104517/11965/v/950/depositphotos_119659092-stock-illustration-male-avatar-profile-picture-vector.jpg"
          alt="profile image"
        />
      </Profile>
    </div>
  );
}

export default App;
