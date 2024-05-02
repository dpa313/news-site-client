import { Button } from "@/components/ui/button";
import { AuthContext } from "@/contexts/AuthProvider/AuthProvider";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { PersonIcon } from "@radix-ui/react-icons";

const Header = () => {
  const { user,logOut } = useContext(AuthContext);

  const handleLogOut = () =>{
    logOut()
    .then(()=>{})
    .catch(error=>{
      console.error(error);
    })
  }
  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link to="/">
          <span className="ml-3 text-xl">News24</span>
        </Link>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <a className="mr-5 hover:text-gray-900">Breaking</a>
          <a className="mr-5 hover:text-gray-900">National</a>
          <a className="mr-5 hover:text-gray-900">International</a>
          <a className="mr-5 hover:text-gray-900">Sports</a>
        </nav>
        <div className="flex items-center gap-x-2">
          {
            user?.uid? 
            <>
            <Button variant='outline'>{user?.displayName}</Button>
            <Button onClick={handleLogOut}>Logout</Button>
            </> : 
            <>
            <Button><Link to='/login'>Login</Link></Button>
            <Button><Link to='/register'>Register</Link></Button>
            </>
          }
          <Link to='/profile'>
          {user?.photoURL ? (
            <Avatar>
              <AvatarImage src={user.photoURL} />
            </Avatar>
          ) : (
            <div className="w-9 h-9 border rounded-full flex items-center justify-center">
              <PersonIcon />
            </div>
          )}
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
