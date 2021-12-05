import React from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/card"
import data from "./data"

/*
Challenge: Build the Hero component.
Check the Figma file for the design specifics.
*/

export default function App() {
    let dataCard = data.map(data => {
        return <Card 
        img = {data.coverImg}
        rating = {data.stats.rating}
        review = {data.stats.reviewCount}
        title = {data.title}
        price = {data.price}
        location = {data.location}
        />
    })
    return (
        <div>
            <Navbar />
            <Hero />
            {dataCard}
        </div>
    )
}