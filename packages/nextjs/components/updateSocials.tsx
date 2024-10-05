"use client";

import React, { useState } from "react";
import { useScaffoldWriteContract } from "~~/hooks/scaffold-eth";

const UpdateSocials = () => {
  const { writeContractAsync: WriteUserAccountManagerAsync } = useScaffoldWriteContract("UserAccountManager");
  const [socials, setSocials] = useState("");

  return (
    <div>
      <form
        onSubmit={async () => {
          await WriteUserAccountManagerAsync({
            functionName: "updateSocials",
            args: [socials],
          });
        }}
      >
        <input
          type="text"
          name="Profile Picture URL"
          onChange={e => {
            setSocials(e.target.value);
          }}
        />
        <button type="submit" className="btn btn-primary">
          Change Socials
        </button>
      </form>
    </div>
  );
};

export default UpdateSocials;
