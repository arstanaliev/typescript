import React, {useEffect, useState} from 'react';
import './App.css';
import {IUserInterface} from "./interfaces/UserInterface";
import axios from "axios";
import User from "./components/User";
import {IPhotoInterface} from "./interfaces/IPhotoInterface";

function App() {
  const [user, setUser] = useState<IPhotoInterface[]>([])
  const fetchingUsers = async () => {
    const responsive = await axios.get<IPhotoInterface[]>(`https://jsonplaceholder.typicode.com/photos`)
    setUser(responsive.data)
  }
  useEffect(() => {
    fetchingUsers()
  },[])
  return (
    <div className="App">
        <h1>happy birthday to Chyngyz</h1>
        <div style={{
            display: "flex",
            flexWrap: "wrap",
            margin: "0 auto"
        }}>
            {
                user.slice(1,11).map(el => <User user={el}/>)
            }
        </div>

    </div>
  );
}

export default App;
