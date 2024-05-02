import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AuthContext } from "@/contexts/AuthProvider/AuthProvider";
import { useContext, useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const Register = () => {
  const { createUser,updateUserInfo,verifyEmail } = useContext(AuthContext);
  const [accepted,setAccepted] = useState(false)

  const handleChecked = (e) =>{
    setAccepted(e.target.checked)
  }

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.username.value;
    const photoUrl = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        handleUpdateUserProfile(name,photoUrl)
        handleEmailVerification()
        form.reset()
        toast.success('Plz verify your email')
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleUpdateUserProfile = (name,photoUrl) =>{
    const profile = {
      displayName: name,
      photoURL: photoUrl
    }
    updateUserInfo(profile)
    .then(()=>{})
    .catch(error=>console.error(error))
  }
  const handleEmailVerification = () =>{
    verifyEmail()
    .then(()=>{})
    .catch(error=>console.error(error))
  }
  return (
    <form
      onSubmit={handleRegisterSubmit}
      className="grid w-full max-w-sm items-center gap-2"
    >
      <Label htmlFor="username">Username</Label>
      <Input
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
        type="email"
        name="email"
        id="email"
        placeholder="Email"
        required
      />
      <Label htmlFor="password">Password</Label>
      <Input
        type="password"
        name="password"
        id="password"
        placeholder="password"
        required
      />
      <div className="flex items-center space-x-2">
        {/* <Checkbox onClick={handleChecked} id="terms" /> */}
        <input onClick={handleChecked} type="checkbox"/>
        <label
          htmlFor="terms"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          <Link to="/terms">Accept terms and conditions</Link>
        </label>
      </div>
      <Button disabled={!accepted} >Submit</Button>
    </form>
  );
};

export default Register;
