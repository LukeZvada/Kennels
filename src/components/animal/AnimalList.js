import React, { useContext, useEffect } from "react"
import { AnimalContext } from "./AnimalProvider";
import { LocationContext } from "../location/LocationProvider"
import { CustomerContext } from "../customer/CustomerProvider"
import "./Animal.css"


export const AnimalList = () => {
    const {animals, getAnimals} = useContext(AnimalContext)
    const {locations, getLocations} = useContext(LocationContext)
    const {customers, getCustomers} = useContext(CustomerContext)

    useEffect(() => {
            getAnimals()
            getLocations()
            getCustomers()
        }, [])


    return (
        <article className="animals">
            {
                animals.map(animal => {
                    const animalLocation = locations.find(location => (location.id === animal.locationId)) || {}
                    const animalOwner = customers.find(customer => (customer.id === animal.customerId)) || {}
                    return <section key={animal.id} className="animal">
                        <div><h3>{animal.name}</h3></div>
                        <div>Breed: {animal.breed}</div>
                        <div> Location: {animalLocation.name}</div>
                        <div> Owner: {animalOwner.name}</div>
                    </section>
                })
            }
        </article>
    )

}