import { useEffect, useState } from "react";
import UserInformation from "../components/User/userInfo/UserInformation"

export default function userMain() {
  const [userData, setUserData] = useState(null);
  useEffect(()=>{
    const localData = JSON.parse(localStorage.getItem("user"))
    setUserData(localData);
  },[])
  return (
    <UserInformation data={userData} />
  )
}
