import styles from "../styles/Home.module.css"
import { Form, useNotification, Button } from "web3uikit"
import { useMoralis, useWeb3Contract } from "react-moralis"
import { ethers } from "ethers"
import DBankAbi from "../constants/DBank.json"
import networkMapping from "../constants/contractAddress.json"

export default function Home() {
    const { chainId, account, isWeb3Enabled } = useMoralis()
    const chainString = chainId ? parseInt(chainId).toString() : "31337"
    const dbankAddress = networkMapping[chainString]?.DBank[0]
    console.log(dbankAddress)
    const dispatch = useNotification()
    const { runContractFunction } = useWeb3Contract()

    async function BorrowAmount(data) {
        console.log("Borrowing Amount")
        const price = ethers.utils.parseUnits(data.data[0].inputResult, "ether").toString()



        const BorrowAmountOptions = {
            abi: DBankAbi,
            contractAddress: dbankAddress,
            functionName: "borrow",
            msgValue: price,            
        }

        await runContractFunction({
            params: BorrowAmountOptions,
            onSuccess: handleInitializeSuccess,
            onError: (error) => console.log(error),
        })
    }

    async function handleInitializeSuccess(tx) {
        await tx.wait(1)
        console.log("Amount borrowed")
        dispatch({
            type: "success",
            message: "Amount borrowed",
            title: "Amount borrowed",
            position: "topR",
        })
    }
    return (
        <div className={styles.container}>
            <Form
                onSubmit={BorrowAmount}
                data={[
                   
                    {
                        name: "Amount (in ETH)",
                        type: "number",
                        value: "",
                        key: "price",
                    },
                ]}
                title="Borrow Money from Us , By submitting collateral"
                id="Main Form"
            />
        </div>
    )
}