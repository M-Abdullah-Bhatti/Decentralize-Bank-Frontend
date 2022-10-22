import React, { useState } from "react";
import { Input, useNotification } from "web3uikit";
import { useMoralis, useWeb3Contract } from "react-moralis";
import { ethers } from "ethers";
import DBankAbi from "../constants/DBank.json";
import networkMapping from "../constants/contractAddress.json";

const Withdraw = () => {
  const [withdrawAmount, setWithDrawAmount] = useState("0");

  const { chainId, account, isWeb3Enabled } = useMoralis();
  const chainString = chainId ? parseInt(chainId).toString() : "31337";

  const dbankAddress = networkMapping[chainString]?.DBank[0];
  console.log(dbankAddress);
  const dispatch = useNotification();
  // =========================

  //   const { runContractFunction } = useWeb3Contract()
  //   async function WithDrawAmount(data) {
  //     console.log("WithDrawing Amount")
  //     const price = ethers.utils.parseUnits(data.data[0].inputResult, "ether").toString()

  //     const WithDrawAmountOptions = {
  //         abi: DBankAbi,
  //         contractAddress: dbankAddress,
  //         functionName: "withdraw",
  //         msgValue: price,

  //     }

  //     await runContractFunction({
  //         params: DepositAmountOptions,
  //         onSuccess: handleInitializeSuccess,
  //         onError: (error) => console.log(error),
  //     })
  // }

  // async function handleInitializeSuccess(tx) {
  //     await tx.wait(1)
  //     console.log("Amount deposited")
  //     dispatch({
  //         type: "success",
  //         message: "Amount deposited",
  //         title: "Amount deposited",
  //         position: "topR",
  //     })

  // =============================

  const handleInitializeSuccess = async (tx) => {
    await tx.wait(1);
    dispatch({
      type: "success",
      message: "Amount WithDrawed",
      title: "Amount WithDrawed",
      position: "topR",
    });
  };

  const { runContractFunction: withdraw } = useWeb3Contract({
    abi: DBankAbi,
    contractAddress: dbankAddress,
    functionName: "withdraw",
    params: {
      amount: ethers.utils.parseEther(withdrawAmount || "0"),
    },
    // onSuccess: handleInitializeSuccess,
    // onError: (error) => console.log(error),
  });

  //   ----------------

  // ===============
  return (
    <div>
      <Input
        label="WithDraw Amount (ETH)"
        name="WithDraw Amount (ETH)"
        type="number"
        onChange={(event) => {
          setWithDrawAmount(event.target.value);
        }}
      />
      <button
        onClick={() =>
          withdraw({
            onError: (error) => {
              console.log(error);
            },
            onSuccess: handleInitializeSuccess,
          })
        }
      >
        With Draw Amount
      </button>
    </div>
  );
};

export default Withdraw;
