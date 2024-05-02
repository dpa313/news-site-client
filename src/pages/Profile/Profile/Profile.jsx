import React, { useContext, useRef, useState } from 'react'
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from '@/components/ui/button';
import { AuthContext } from '@/contexts/AuthProvider/AuthProvider';
const Profile = () => {
  const {user} = useContext(AuthContext)
  const [name,setName] = useState(user.displayName)
  const passwordRef = useRef(user.password)
  
  const handleSubmit = (e) =>{
    e.preventDefault()
    console.log(passwordRef.current.value);
  }

  const handleChange = (e) => {
    setName(e.target.value)
  }
  return (
    <div>
        <h2 className='text-xl'>Profile</h2>
        <form
      onSubmit={handleSubmit}
      className="grid w-full max-w-sm items-center gap-2"
    >
      <Label htmlFor="username">Username</Label>
      <Input
        onChange={handleChange}
        defaultValue={name}
        type="username"
        name="username"
        id="username"
        placeholder="Username"
      />
      <Label htmlFor="photoURL">Photo URL</Label>
      <Input
        type="photoURL"
        name="photoURL"
        id="photoURL"
        placeholder="photoURL"
      />
      <Label htmlFor="email">Email</Label>
      <Input
        readOnly
        defaultValue={user?.email}
        type="email"
        name="email"
        id="email"
        placeholder="Email"
        required
      />
      <Label htmlFor="password">Password</Label>
      <Input
      ref={passwordRef}
        type="password"
        name="password"
        id="password"
        placeholder="password"
        required
      />
      <Button>Submit</Button>
    </form>
    </div>
  )
}

export default Profile