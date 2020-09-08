import React, { useContext, useEffect } from "react"
import { EmployeeContext } from "./EmployeeProvider";
import "./Employee.css"
import { LocationContext } from "../location/LocationProvider";


export const EmployeeList = (props) => {
    const {employees, getEmployees} = useContext(EmployeeContext)
    const {locations, getLocations} = useContext(LocationContext)


    useEffect(() => {
            getEmployees()
            getLocations()
        }, [])

    return (
        <>
        <button onClick={() => props.history.push("/employees/create")}>
        Add Employee
        </button>
        <article className="employees">
            {
                employees.map(employee => {
                    const employeeLocation = locations.find(location => location.id === employee.locationId) || {}
                    return <section key={employee.id} className="employee">
                        <div><h3>{employee.name}</h3></div>
                        <div>Address: {employeeLocation.name}</div>
                    </section>
                })
            }
        </article>
        </>
    )
}