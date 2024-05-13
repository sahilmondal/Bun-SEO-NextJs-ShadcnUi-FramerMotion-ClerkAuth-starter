import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="w-full h-[100dvh] grid place-items-center ">
      <SignUp afterSignOutUrl={"/"} />
    </div>
  );
}
