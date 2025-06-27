import UserInformation from "../components/User/userInfo/UserInformation"

export async function action({ request }) {
  const formData = await request.formData();

  function dateToTimestampObject(dateString) {
    const date = new Date(dateString);

    const milliseconds = date.getTime();
    const seconds = Math.floor(milliseconds / 1000);
    const nanoseconds = (milliseconds % 1000) * 1_000_000;

    return {
      seconds: seconds,
      nanoseconds: nanoseconds
    };
  }

  function formatTimestampToDate(timeObj) {
    if (!timeObj) return null;
    const milliseconds =
      timeObj.seconds * 1000 + Math.floor(timeObj.nanoseconds / 1_000_000);

    const date = new Date(milliseconds);

    const options = { year: "numeric", month: "long", day: "numeric" };
    return date.toLocaleDateString("en-US", options);
  }

  const createdAt = dateToTimestampObject(new Date().toISOString()) // ✅ Also server time
  const a = formatTimestampToDate(createdAt)

  console.log("Created at:", a);
  return true;
}

export default function userMain() {
  return (
    <UserInformation />
  )
}
