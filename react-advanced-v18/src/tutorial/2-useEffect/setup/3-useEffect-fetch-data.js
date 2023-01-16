import React, { useState, useEffect } from 'react';

const url = 'https://api.github.com/users';

const UseEffectFetchData = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const response = await fetch(url);
    const users = await response.json();
    // setUsers(users) // this is correct but there is a different
    // problem. what is the problem? what is setState doing? It
    // preserves the value and triggers rerender. what do you think
    // will happen if we call setUsers now? it will trigger rerender
    // and we will end up in a vicious infinite loop.
    // what is the solution? let's add dependency array as a second
    // parameter of useEffect to have its callback function called
    // only during the initial render.
    setUsers(users);
    console.log(users);
  };
  useEffect(() => {
    getUsers();
  }, []); // [] was added to be able to use setUsers in getUsers
  return (
    <>
      <h3>github users</h3>
      <ul className='users'>
        {users.map((user) => {
          const { id, login, avatar_url, html_url } = user;
          return (
            <li key={id}>
              <img src={avatar_url} alt={login} />
              <div>
                <h4>{login}</h4>
                <a href={html_url}>profile</a>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default UseEffectFetchData;
