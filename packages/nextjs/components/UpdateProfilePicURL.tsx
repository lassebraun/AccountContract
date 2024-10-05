"use client";

import React, { useState } from "react";
import { parseEther } from "viem";
import { useScaffoldWriteContract } from "~~/hooks/scaffold-eth";

const UpdateProfilePicURL = () => {
  const { writeContractAsync: WriteUserAccountManagerAsync } = useScaffoldWriteContract("UserAccountManager");
  const [profilePicURL, setProfilePicURL] = useState("");

  return (
    <div>
      <form
        onSubmit={async () => {
          await WriteUserAccountManagerAsync({
            functionName: "updateProfilePicURL",
            args: [profilePicURL],
          });
        }}
      >
        <input
          type="text"
          name="Profile Picture URL"
          onChange={e => {
            setProfilePicURL(e.target.value);
          }}
        />
        <button type="submit" className="btn btn-primary">
          Change Profile Picture URL
        </button>
      </form>
    </div>
  );
};

export default UpdateProfilePicURL;
