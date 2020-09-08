import React, { useContext, useEffect } from "react"
import { AnimalContext } from "./AnimalProvider";
import { LocationContext } from "../location/LocationProvider"
import { CustomerContext } from "../customer/CustomerProvider"
import { Animal } from "./Animal";
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
                animals.map(animalObj => {
                    const animalLocation = locations.find(location => (location.id === animalObj.locationId)) || {}
                    const animalOwner = customers.find(customer => (customer.id === animalObj.customerId)) || {}
                    
                    
                    return <Animal key={animalObj.id} animalKey={animalObj} ownerKey={animalOwner} locationKey={animalLocation} /> 
                })
            }
        </article>
    )

}