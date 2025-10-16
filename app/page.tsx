import { auth } from "@/auth";
import SignIn from "@/components/sign-in-button";
import SignOut from "@/components/sign-out-button";

export default async function Home() {
  const session = await auth()
  return (
    <div>
      <h1>Home</h1>
      {session?.user?.name && <p>Welcome {session.user.name}</p>}
      <SignIn />
      <SignOut />
    </div>
  );
}
