import { addUserToDb } from '@/libs/actions/user.actions'
import React from 'react'

const FormInput = (props: { name: string, placeholder: string }) => {
    const { name, placeholder } = props;
    return <input type="text"
        name={name}
        className='p-2 rounded border border-green-500 text-yellow-300'
        placeholder={`Enter your ${placeholder}...`} />
};

const inputs: { name: string, placeholder: string }[] = [
    { name: "name", placeholder: "name" },
    { name: "userName", placeholder: "user name" },
    { name: "type", placeholder: "role" },
    { name: "years", placeholder: "number of years you have served" },
];

const AddUser = () => {
  return (
      <form action={addUserToDb} className="flex flex-col gap-5 max-w-xl mx-auto p-5">
          <FormInput placeholder="name" name="name" />
          <FormInput placeholder="user name" name="userName" />
          <FormInput placeholder="role" name="type" />
          <FormInput placeholder="number of years you have served" name="years" />
          <button style={{background: "#f14729"}} className="border border-yellow-500 text-yellow-300 p-2 rounded-md">
              Add User
          </button>
    </form>
  )
}

export default AddUser