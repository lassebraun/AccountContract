import React from "react";
import { Address } from "viem";
import { useScaffoldReadContract } from "~~/hooks/scaffold-eth";

const GetUserDataFromAddress = (props: { address: string }) => {
  //   interface User {
  //     address: Address;
  //     username: string;
  //     profilePicURL: string;
  //     socials: string;
  //   }

  const { data: User } = useScaffoldReadContract({
    contractName: "UserAccountManager",
    functionName: "getUser",
    args: [props.address],
  });

  return (
    <div>
      <ul>{User?.[3]}</ul>
    </div>
  );
};

export default GetUserDataFromAddress;
