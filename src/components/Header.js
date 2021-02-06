import React from "react"

import TeslaLogo from "../images/teslaLogoSmall.svg"

export default function Header() {
    return (
        <div className="header">
            <div className="logo">
                <img src={TeslaLogo} alt="Tesla"/>
            </div>

            <div className="center">
                <p>Model S</p>
                <p>Model 3</p>
                <p>Model X</p>
                <p>Model Y</p>
                <p>Solar Proof</p>
                <p>Solar Panels</p>
            </div>

            <div className="right">
                <p>Shop</p>
                <p>Tesla Account</p>
            </div>
        </div>
    )
}

