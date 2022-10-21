import React from "react";
import Image from "next/image";
import { Button } from "web3uikit";

import styles from "../styles/Cards.module.css";

const Cards = () => {
  return (
    <div>
      <h3 className={styles.title}>Services</h3>
      <div className={styles.mainContainer}>
        <div className={styles.card}>
          <Image src="/deposit.png" alt="Deposite" width={300} height={230} />

          <Button
            color="green"
            // onClick={function noRefCheck() {}}
            text="Deposit Money"
            theme="colored"
          />
        </div>
        <div className={styles.card}>
          <Image src="/withdraw.jpg" alt="Deposite" width={500} height={390} />

          <Button
            color="yellow"
            // onClick={function noRefCheck() {}}
            text="Withdraw Money"
            theme="colored"
          />
        </div>
        <div className={styles.card}>
          <Image src="/borrow.jpg" alt="Deposite" width={500} height={390} />
          <Button
            color="red"
            // onClick={function noRefCheck() {}}
            text="Borrow Money"
            theme="colored"
          />
        </div>
        <div className={styles.card}>
          <Image src="/payoff.jpg" alt="Deposite" width={500} height={390} />

          <Button
            color="blue"
            // onClick={function noRefCheck() {}}
            text="Payback Loan"
            theme="colored"
          />
        </div>
      </div>
    </div>
  );
};

export default Cards;
