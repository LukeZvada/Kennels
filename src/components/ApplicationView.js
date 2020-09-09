import React from "react"
import { Route } from "react-router-dom"
import { LocationProvider } from "./location/LocationProvider"
import { AnimalProvider } from "./animal/AnimalProvider"
import { LocationList } from "./location/LocationList"
import { AnimalList } from "./animal/AnimalList"
import { AnimalForm } from "./animal/AnimalForm"
import { CustomerProvider } from "./customer/CustomerProvider";
import { CustomerList } from "./customer/CustomerList";
import { EmployeeProvider } from "./employee/EmployeeProvider";
import { EmployeeList } from "./employee/EmployeeList";
import { EmployeeForm } from "./employee/EmployeeForm"


export const ApplicationViews = (props) => {
    return (
        <>
            <LocationProvider>
                {/* Render the location list when http://localhost:3000/ */}
                <Route exact path="/">
                    <LocationList />
                </Route>
            </LocationProvider>

            <AnimalProvider>
                <CustomerProvider>
                    <LocationProvider>
                        <Route exact path="/animals" render={(props) => {
                            return <AnimalList history={props.history} />
                        }} />

                        <Route exact path="/animals/create" render={(props) => {
                            return <AnimalForm {...props} />
                        }} />

                    </LocationProvider>
                </CustomerProvider>
            </AnimalProvider>
            
            <CustomerProvider>
                <Route path="/customers">
                    <CustomerList />
                </Route>
            </CustomerProvider>
            
           
           
           
           
            <EmployeeProvider>
                <LocationProvider>
                    <AnimalProvider>
                        <Route path="/employees/create" render ={(props) => {
                            return <EmployeeForm {...props}/>
                        }}>
                        </Route>
                    </AnimalProvider>
                </LocationProvider>
            </EmployeeProvider>

            <EmployeeProvider>
                <LocationProvider>
                    <Route exact path="/employees" render={(props) => {
                        return <EmployeeList history={props.history} />
                    }} />
                </LocationProvider>
            </EmployeeProvider>
            

        </>
    )
}