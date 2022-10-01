import { useEffect, useState } from "react";
import "./App.css";
import User from "../src/Component/User/User";

function App() {
  const [user, setUser] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
      });
  }, []);
  const showcity = (city) => {
    console.log("city is ", city);
  };
  return (
    <div className="App">
      <header className="App-header"></header>
      <div>
        {user.map((user) => (
          <User key={user.id} user={user} showcity={showcity}></User>
        ))}
      </div>
    </div>
  );
}
export default App;
