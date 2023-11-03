import AddUser from "@/components/AddUser";
// import { getUsers } from "@/libs/actions/user.actions";

export type User = {
  id?: string,
  name?: string,
  type?: string,
  userName?: string,
  years?: number
};


// eslint-disable-next-line @next/next/no-async-client-component
const Users = async () => {
  let users: User[] = [];

  return <div className=" bg-black">
    <AddUser />
    <h1 className="font-bold p-5 align-middle">List of Users</h1>
    <div className="flex flex-wrap gap-5">
      {users.map((user) => <div key={user.id} className="p-5 shadow bg-pink-700 border-2">
        <p><span className="font-bold">Username:</span> {user.userName}</p>
        <p><span className="font-bold">Name:</span> {user.name}</p>
        <p><span className="font-bold">User Role:</span> {user.type}</p>
        <p><span className="font-bold">Years:</span> {user.years}</p>
      </div>)}
    </div>
  </div>
}

export default Users;