import React, { useState } from "react"
import { Link } from "react-router-dom"
import { Guide } from "../../components/Guide"
import images from "../../assets"
import "./Home.scss"

export const Home: React.FC = () => {
  const [transition, setTransition] = useState(false)
  const [showGuide, setShowGuide] = useState<boolean>(false)
  const [showFantasy, setShowFantasy] = useState<boolean>(false)
  const [showCheck, setShowCheck] = useState<boolean>(false)

  return (
    <div style={{ position: "relative", overflow: "hidden" }}>
      <div className={"home " + (transition ? "away" : "")}>
        <img src={images.HyposLogo} alt="Logo" width={300} height={300} />
        <span className="home__title">Clover Mint</span>
        <span className="home__description">Be Chill. Be Cool</span>
        <div className="btn-container">
          <button onClick={() => setTransition(!transition)} className="btn">
            Minimal Version <span>⚡️</span>
          </button>
          <Link to="/fantasy" className="btn">
            Fantasy Version <span>🌟</span>
          </Link>
        </div>
      </div>
      <div className="minimal">
        <div className="header">
          <img src={images.HyposLogo} alt="Logo" width={80} height={80} />
          <img src={images.WalletIcon} alt="Logo" width={20} height={20} />
        </div>
        <div className="body">
          <div className="body__container">
            <div className="body__container__content">
              <span className="connect-wallet-title">Please Connect Wallet</span>
            </div>
          </div>
          <Guide show={showGuide} />
        </div>
        <div className="footer">
          <div className="btn-group">
            <button
              className="btn"
              onClick={(e) => {
                e.preventDefault()
                setShowGuide(!showGuide)
              }}
            >
              {showGuide ? "HIDE GUIDE ❓" : "GUIDE ❓"}
            </button>
            <button
              className="btn"
              onClick={(e) => {
                e.preventDefault()
                setShowFantasy(!showFantasy)
              }}
            >
              {showFantasy ? "MINIMAL VERSION 🌟" : "FANTASY VERSION 🌟"}
            </button>
            <button
              className="btn"
              onClick={(e) => {
                e.preventDefault()
                setShowCheck(!showCheck)
              }}
            >
              Check WL 🔎
            </button>
          </div>
          <div>
            <p>solana</p>
            <p>copyright</p>
          </div>
        </div>
      </div>
    </div>
  )
}
