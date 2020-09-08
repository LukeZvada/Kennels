import React, { useContext, useEffect } from "react"
import { EmployeeContext } from "./EmployeeProvider";
import "./Employee.css"


export const EmployeeList = (props) => {
    const {employees, getEmployees} = useContext(EmployeeContext)

    useEffect(() => {
            getEmployees()
        }, [])

    return (
        <>
        <button onClick={() => props.history.push("/employees/create")}>
        Add Employee
        </button>
        <article className="employees">
            {
                employees.map(employee => {
                    return <section key={employee.id} className="employee">
                        <div><h3>{employee.name}</h3></div>
                        <div>Address: {employee.address}</div>
                    </section>
                })
            }
        </article>
        </>
    )
}