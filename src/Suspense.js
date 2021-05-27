import React, { useState, useEffect } from 'react';



export const Suspense = () => {

    const [repos, setRepos] = useState([]);

    useEffect(() => {
        async function getData() {
            const responce = await fetch('https://api.github.com/users/007Abdullah/repos');
            const data = await responce?.json();
            setRepos(data);
        }
        getData()
    }, [])

    return (
        <React.Fragment>
            <br />
            <hr />
            <h1>Suspense Example</h1>
            <br />
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
    )
}


