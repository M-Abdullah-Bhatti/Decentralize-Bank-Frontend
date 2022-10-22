import React from "react";
import Image from "next/image";
import { Button } from "web3uikit";
import { useRouter } from "next/router";

import styles from "../styles/Cards.module.css";

const Cards = () => {
  const router = useRouter();
  // const handleClick = (route) => {
  //   // e.preventDefault()
  //   router.push(route);
  // };

  return (
    <div>
      <h3 className={styles.title}>Services</h3>
      <div className={styles.mainContainer}>
        <div className={styles.card}>
          <Image src="/deposit.png" alt="Deposite" width={300} height={230} />

          <Button
            color="green"
            onClick={() => router.push("/Deposit")}
            text="Deposit Money"
            theme="colored"
          />
        </div>
        <div className={styles.card}>
          <Image src="/withdraw.jpg" alt="Deposite" width={500} height={390} />

          <Button
            color="yellow"
            onClick={() => router.push("/Withdraw")}
            text="Withdraw Money"
            theme="colored"
          />
        </div>
        <div className={styles.card}>
          <Image src="/borrow.jpg" alt="Deposite" width={500} height={390} />
          <Button
            color="red"
            onClick={() => router.push("/Borrow")}
            text="Borrow Money"
            theme="colored"
          />
        </div>
        <div className={styles.card}>
          <Image src="/payoff.jpg" alt="Deposite" width={500} height={390} />

          <Button
            color="blue"
            onClick={() => router.push("/PayOff")}
            text="Payback Loan"
            theme="colored"
          />
        </div>
      </div>
    </div>
  );
};

export default Cards;
