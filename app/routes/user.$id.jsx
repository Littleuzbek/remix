import { useLoaderData } from "@remix-run/react";
import { useEffect } from "react";
import { getUserData } from "../firebase";
import User from "../components/User/User";

export const loader = async ({ params }) => {
  const userId = params.id;
  const user = await getUserData(userId);

  const userData = {
    uid: userId,
    ...user,
  };

  return userData;
};

export default function UserPage() {
  const data = useLoaderData();

  useEffect(() => {
    const userLocalData = localStorage.getItem("user");
    if (!userLocalData) {
      localStorage.setItem("user", JSON.stringify(data));
    }

    if(userLocalData){
      localStorage.removeItem("user");
      localStorage.setItem("user", JSON.stringify(data));
    }
  }, []);

  return <User user={data} />;
}
