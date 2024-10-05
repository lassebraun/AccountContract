"use client";

import React, { useState } from "react";
import { parseEther } from "viem";
import { useScaffoldWriteContract } from "~~/hooks/scaffold-eth";

const CreateUserAccount = () => {
  const { writeContractAsync: WriteUserAccountManagerAsync } = useScaffoldWriteContract("UserAccountManager");
  const [username, setUsername] = useState("");
  const [profilePicURL, setProfilePicURL] = useState("");
  const [socials, setSocials] = useState("");

  return (
    <div>
      <form
        onSubmit={async () => {
          await WriteUserAccountManagerAsync({
            functionName: "createUser",
            args: [username, profilePicURL, socials],
          });
        }}
      >
        <input
          type="text"
          name="username"
          onChange={e => {
            setUsername(e.target.value);
          }}
        />
        <input
          type="text"
          name="Profile Picture URL"
          onChange={e => {
            setProfilePicURL(e.target.value);
          }}
        />
        <input
          type="text"
          name="Socials"
          onChange={e => {
            setSocials(e.target.value);
          }}
        />
        <button type="submit" className="btn btn-primary">
          Create Account
        </button>
      </form>
    </div>
  );
};

export default CreateUserAccount;
