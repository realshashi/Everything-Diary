import { useEffect, useState } from "react";
import axios from "axios";

export function LoginPage() {
  const [username, setUsername] = useState([]);
  const wroteUser = document.getElementById("username1")! as HTMLInputElement;
  const enteredUsername = wroteUser.value;
  const wrotePassword = document.getElementById(
    "password1"
  )! as HTMLInputElement;
  const enteredPassword = wrotePassword.value;
  useEffect(() => {
    axios
      .get("localhost:5000/api/username")
      .then((response) => setUsername(response.username))
      .catch((error) => console.log(error));
  }, []);

  async function signUp() {
    if (enteredUsername === username) {
      return console.log("user already exists");
    } else {
      const response = await axios.post("http://localhost:5000/api/v1/signup", {
        username: enteredUsername,
        password: enteredPassword,
      });
      console.log({ username: response.data });
    }
  }

  function login() {
    if (enteredUsername === username && authCheck == true) {
      redirect;
    } else {
    }
  }

  return (
    <div>
      <input
        id="username1"
        type="username"
        placeholder="enter username"
      ></input>
      <input
        id="password1"
        type="password"
        placeholder="enter password"
      ></input>
      <button onClick={login}>Log IN</button>
      <button onClick={signUp}>SIGN UP</button>
    </div>
  );
}
