import React, { useState, useEffect } from 'react';
import AdminOrder from '../components/admin/AdminOrder';
import AdminUser from '../components/admin/AdminUser';


const Admin = () => {

    let [toggle, setToggle] = useState(null)
    
    let ordersAdmin = document.querySelector('.ordersAdmin')
    let usersAdmin = document.querySelector('.usersAdmin')

    const switchComponents = () => {
        if(toggle === 'orders') {
            ordersAdmin.classList.add('text-decoration-underline')
            usersAdmin.classList.remove('text-decoration-underline')
            return <AdminOrder />
        }
        if(toggle === 'users') {
            ordersAdmin.classList.remove('text-decoration-underline')
            usersAdmin.classList.add('text-decoration-underline')
            return <AdminUser />
        } else {
            return null
        }
    }

    const orders = () => {
        setToggle(toggle = 'orders')
    }
    const users = () => {
        setToggle(toggle = 'users')
    }

    useEffect(() => {
        setToggle('orders')
    }, [setToggle])

    return (
            <div className="container mt-5 text-center">
                <div>
                    <ul className="list-inline h4">
                        <li className="ordersAdmin me-3 list-inline-item text-decoration-underline pointer" onClick={orders}>Orders</li>
                        <li className="usersAdmin list-inline-item pointer" onClick={users}>Users</li>
                    </ul>
                </div>
                
            <div>
                {
                    switchComponents()
                }
            </div>

            </div>

            

    )
}

export default Admin
