import React from 'react'
import { useRouter } from 'next/dist/client/router'
import styles from "../Cards/card.module.css"

export default function Card({name,breed,age,gender,price,description,id,image}) {
  const router = useRouter();
  return (
    <>
    <div className={styles["card-container"]} >
    <div className="card" key={id} style={{width: "18rem"}}>
    <img src={image} className="card-img-top" alt="dog image" />
        <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <h6 className="card-subtitle mb-2 text-muted">{breed}</h6>
            <p className="card-text">{description}</p>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">Age: {age}</li>
                <li className="list-group-item">Gender: {gender}</li>
                <li className="list-group-item">Price: {price}</li>
            </ul>
            <a onClick={()=> router.push(`dogs/${id}`)} className="btn btn-primary">Buy</a>
        </div>
    </div>
    </div>
    </>
    
  )
}
