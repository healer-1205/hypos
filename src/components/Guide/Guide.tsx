import React from "react"
import images from "../../assets"
import "./Guide.scss"

type Props = {
  show: boolean
}

export const Guide: React.FC<Props> = ({ show }) => {
  console.log(show)
  return (
    <div className={"guide " + (show ? "" : "hidden")}>
      <p className="guide__title">Guide</p>
      <p className="guide__description">Welcome to the Clover Raffle Mint system</p>
      <p className="guide__description">
        Step 1 - Purchase: Buy as many capsules as you'd like (max 99 tickets per wallet).
      </p>
      <p className="guide__description">Step 2 - Wait: Wait for the raffle results phase.</p>
      <p className="guide__description">Step 3 - Twist: Open your capsules. There are two types of capsules:</p>
      <p className="guide__description">a) SOL refund;</p>
      <p className="guide__description">b) One of Hypos NFTs!</p>
      <div className="container">
        <div className="d-flex flex-row align-items-center">
          <img src={images.CautionIcon} alt="caution" width="20" height="20" />
          <p className="caution__description px-2">Note:</p>
        </div>
        <p className="caution__description">
          1. All refunds will be claimed in a single transaction. Hypos will be minted one by one.
        </p>
        <p className="caution__description">
          2. For security reasons, minting Hypos will send two transactions. Please approve both and don't leave the
          page in between.
        </p>
      </div>
    </div>
  )
}
