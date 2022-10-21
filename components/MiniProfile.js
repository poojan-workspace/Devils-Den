import React from "react";
import { signOut, useSession } from "next-auth/react";

function MiniProfile() {
  const { data: session } = useSession();

  return (
    <div className="flex items-center justify-between mt-14 ml-10">
      <img
        className="w-16 h-16 rounded-full border border-blue p-[2px]"
        src={session?.user?.image}
        alt="profile pic"
      />
      <div className="flex-1 mx-4">
        <h2 className="font-bold">{session?.user?.username}</h2>
        <h3 className="text-sm text-gray-400">Welcome to Devil's Den</h3>
      </div>
      <button onClick={signOut} className="text-blue text-sm font-semibold">
        Sign Out
      </button>
    </div>
  );
}

export default MiniProfile;
