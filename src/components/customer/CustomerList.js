import React, { useContext, useEffect } from "react"
import { CustomerContext } from "./CustomerProvider";
import "./Customer.css"


export const CustomerList = () => {
    const {customers, getCustomers} = useContext(CustomerContext)

    useEffect(() => {
            getCustomers()
        }, [])

    return (
        <article className="customers">
            {
                customers.map(customer => {
                    return <section key={customer.id} className="customer">
                        <div><h3>{customer.name}</h3></div>
                        <div>Address: {customer.address}</div>
                    </section>
                })
            }
        </article>
    )

}