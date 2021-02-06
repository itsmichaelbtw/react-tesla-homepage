import React from 'react'
import Header from './components/Header'

import TeslaItem from "./components/Item"

import Accessories from "./images/Desktop-Accessories.jpg"
import ModelS from "./images/Desktop-ModelS.jpeg"
import Model3 from "./images/Desktop-Model3.jpeg"
import ModelX from "./images/Desktop-ModelX.jpeg"
import ModelY from "./images/Desktop-ModelY.jpeg"
import SolarPanels from "./images/Desktop-SolarPanels.jpeg"
import SolarRoof from "./images/Desktop-SolarRoof.jpeg"

export default function App() {
    return (
        <div className="container">
            <Header/>

            <div className="tesla-item-container">
                <TeslaItem 
                    title="Model S"
                    image={ModelS}
                    desc="Order Online for Touchless Delivery"
                    leftText="Custom Order"
                    leftLink=""
                    rightText="Existing Inventory"
                    rightLink=""
                    first={true}
                />

                <TeslaItem
                    title="Model Y"
                    image={ModelY}
                    desc="Order Online for Touchless Delivery"
                    leftText="Custom Order"
                    leftLink=""
                    rightText="Existing Inventory"
                    rightLink=""

                />

                <TeslaItem
                    title="Model 3"
                    image={Model3}
                    desc="Order Online for Touchless Delivery"
                    leftText="Custom Order"
                    leftLink=""
                    rightText="Existing Inventory"
                    rightLink=""

                />

                <TeslaItem
                    title="Model X"
                    image={ModelX}
                    desc="Order Online for Touchless Delivery"
                    leftText="Custom Order"
                    leftLink=""
                    rightText="Existing Inventory"
                    rightLink=""

                />

                <TeslaItem
                    title="Lowest Cost Solar Panels in America"
                    image={SolarPanels}
                    desc="Money-back guarantee"
                    leftText="Order now"
                    leftLink=""
                    rightText="Learn More"
                    rightLink=""
                />

                <TeslaItem
                    title="Solar for New Roofs"
                    image={SolarRoof}
                    desc="Solar Roof Costs Less Than a New Roof Plus Solar Panels"
                    leftText="Order Now"
                    leftLink=""
                    rightText="Learn More"
                    rightLink=""
                />

                <TeslaItem
                    title="Accessories"
                    image={Accessories}
                    leftText="Shop Now"
                    leftLink=""
                    rightText="Existing Inventory"
                    rightLink=""
                    first={true}
                />
            </div>
        </div>
    )
}
