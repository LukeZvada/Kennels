import React, { useContext, useEffect } from "react"
import { AnimalContext } from "./AnimalProvider";
import "./Animal.css"


export const AnimalList = () => {
    const {animals, getAnimals} = useContext(AnimalContext)

    useEffect(() => {
            getAnimals()
        }, [])

    // useEffect(() => {
    // }, [animals])
    //^this is not needed unless the animals array is being updated.


    return (
        <article className="animals">
            {
                animals.map(animal => {
                    return <section key={animal.id} className="animal">
                        <div><h3>{animal.name}</h3></div>
                        <div>Breed: {animal.breed}</div>
                    </section>
                })
            }
        </article>
    )

}