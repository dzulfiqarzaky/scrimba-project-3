import React from "react"

export default function Card (props) {
    return (
        <>
        <div className="card flex">
            <img className="img-card" src={`../images/${props.img}`}/>
            <div className="flex rating">
                <div class="img-star"><img className="" src="../images/star.png" alt=""/></div>
                <p>{props.rating}</p>
                <p>({props.reviewCount}})</p>
                <p>{props.location}</p>
            </div>
            <div class="text">
                <p>{props.title}</p>
                <p><strong>From $${props.price}</strong> / person</p>
            </div>
        </div>
        </>
    )
}