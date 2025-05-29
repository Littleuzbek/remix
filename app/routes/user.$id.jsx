import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";
import { useLoaderData } from "@remix-run/react";
import User from "../components/User/User";

export const loader = async ({ params }) => {
  const userId = params.id;
  const userDoc = (await getDoc(doc(db, "exko", "data", "users", userId))).data();

  const userData = {
    uid: userId,
    ...userDoc,
  };

  return { userData };
};

export default function UserPage() {
  const data = useLoaderData();
  console.log("first");
  console.log(data);
  return <User user={data} />;
}
