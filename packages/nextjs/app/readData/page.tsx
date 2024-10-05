"use client";

import React from "react";
import { ethers } from "ethers";
import { NextPage } from "next";
import GetUserDataFromAddress from "~~/components/GetUserDataFromAddress";

const readData: NextPage = () => {
  return (
    <div>
      <GetUserDataFromAddress address={"0x6439833623cd3b0b530A4c59c929CE8A45f1A01b"} />
    </div>
  );
};

export default readData;
