import React from "react"
import "./Animal.css"

export const Animal = ({animalKey, ownerKey, locationKey}) => (
                    <section key={animalKey.id} className="animal">
                        <div><h3>{animalKey.name}</h3></div>
                        <div>Breed: {animalKey.breed}</div>
                        <div> Location: {locationKey.name}</div>
                        <div> Owner: {ownerKey.name}</div>
                    </section>
)