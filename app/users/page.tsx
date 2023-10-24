"use client"

import React, { useEffect, useState } from 'react'
// import { getUsers } from '../../libs/actions/user.actions';

// eslint-disable-next-line @next/next/no-async-client-component
const Users = async () => {
  const [users, setusers] = useState([]);

  // const usersFromDb = await getUsers();
  // setusers(usersFromDb);
  // console.log(usersFromDb);

  return (
    <div>Users</div>
  )
}

export default Users