import { json } from "@remix-run/node";

export const loader = async () => {
  return json({ error: "Forbidden" }, { status: 403 });
};

export default function BlockedPage() {
  return null; 
}
