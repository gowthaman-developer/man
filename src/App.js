import logo from "./logo.svg";
import "./App.css";

function App() {
  try {
    const data = await fetch("https://api.github.com/users/arun", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    users = await data.json();
    // console.log(users);
  } catch (error) {
    console.log(error);
  }
  return users;
}
return <div className="App"></div>;

export default App;
