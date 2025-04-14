// Non {} Imports import named functions, can be multiple functions; {} Imports only import one default function inside the file
import { useAuthStore } from "../../store/authUser";
import AuthScreen from "./AuthScreen";
import HomeScreen from "./HomeScreen";

const HomePage = () => {
  const {user} = useAuthStore(); 
  return (
    <>
      {/* If User is Authenticated, go to Home Screen, if not go to Auth Screen*/}
      {user ? <HomeScreen/> : <AuthScreen/>}
    </>
  )
}

export default HomePage;