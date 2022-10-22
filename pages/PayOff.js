import React, { useState } from "react";
import { Input, useNotification } from "web3uikit";
import { useMoralis, useWeb3Contract } from "react-moralis";
import { ethers } from "ethers";
import DBankAbi from "../constants/DBank.json";
import networkMapping from "../constants/contractAddress.json";

import styles from "../styles/Cards.module.css";

const Withdraw = () => {
  const { chainId, account, isWeb3Enabled } = useMoralis();
  const chainString = chainId ? parseInt(chainId).toString() : "31337";

  const dbankAddress = networkMapping[chainString]?.DBank[0];
  console.log(dbankAddress);
  const dispatch = useNotification();

  const handleInitializeSuccess = async (tx) => {
    await tx.wait(1);
    dispatch({
      type: "success",
      message: "Amount Paybacked",
      title: "payOff",
      position: "topR",
    });
  };

  const { runContractFunction: payOff } = useWeb3Contract({
    abi: DBankAbi,
    contractAddress: dbankAddress,
    functionName: "payOff",
    // onSuccess: handleInitializeSuccess,
    // onError: (error) => console.log(error),
  });

  //   ----------------

  // ===============

  return (
    <div>
      <h3 className={styles.title}>Give your loan back here</h3>
      <button
        className={styles.btn}
        onClick={() =>
          payOff({
            onError: (error) => {
              console.log(error);
            },
            onSuccess: handleInitializeSuccess,
          })
        }
      >
        Give loan back
      </button>
    </div>
  );
};

export default Withdraw;
