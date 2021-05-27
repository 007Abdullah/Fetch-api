import React, { useEffect, useState } from 'react';
import { Suspense } from './Suspense';
import './App.css';

function App() {

  const [repos, setRespos] = useState([]);

  useEffect(() => {
    async function getdata() {
      const response = await fetch('https://api.github.com/users/007Abdullah/repos')
      const data = await response.json();
      console.log("data ==>", data);
      setRespos(data)
    }
    getdata();
  }, [])

  return (
    <React.Fragment>
      <Suspense />
      <hr />
      <h1>Simple Repos Render</h1>
      <ul>
        {repos.map((eachItem, index) => {
          return (
            <React.Fragment key={index}>
              <li>{eachItem.name}</li>
            </React.Fragment>
          )
        })}
      </ul>
    </React.Fragment>
  );
}

export default App;
