import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { AuthContext } from "@/contexts/AuthProvider/AuthProvider"
import { useContext, useState } from "react"
import toast from "react-hot-toast"
import { useLocation, useNavigate } from "react-router-dom"

const Login = () => {
  const [error,setError] = useState('')
  const {signInUser,setLoading} = useContext(AuthContext)
  const navigate = useNavigate()
  const location = useLocation()

  const from = location.state?.from?.pathname || '/'

  const handleSigInSubmit = (e)=>{
    e.preventDefault()

    const form = e.target
    const email = form.email.value;
    const password = form.password.value;

    signInUser(email,password)
    .then((result)=>{
      const user = result.user
      form.reset()
      if(user.emailVerified){
        navigate(from, {replace:true})
      }else{
        toast.error("Please verify")
      }
      setError('')
      console.log(user);
    })
    .catch(error=>{
      setError(error.message)
      console.error(error)
    })
    .finally(()=>{
      setLoading(false)
    })
  }

  
  return (
    <form onSubmit={handleSigInSubmit} className="grid w-full max-w-sm items-center gap-2">
      <Label htmlFor="email">Email</Label>
      <Input type="email" name="email" id="email" placeholder="Email" />
      <Label htmlFor="password">Password</Label>
      <Input type="password" name="password" id="password" placeholder="password" />
      <p className="text-red-500">{error}</p>
      <Button>Login</Button>
    </form>
  )
}

export default Login