import React from 'react'
import Layout from '../core/Layout'
import { isAuthenticated } from '../auth'

const Dashboard = () => {
    const { name,email,role} = isAuthenticated()

    return (
        <Layout title="Dashboard" description='User Dashboard' className="container">
            <div className='card mb-5'>
                <h3 className="card-header">User Information</h3>
                <ul className="list-group">
                    <li className="list-group-item">Name : {name}</li>
                    <li className="list-group-item">Email : {email}</li>
                    <li className="list-group-item">Role : {role}</li>
                </ul>
            </div>
            <div className='card mb-5'>
                <h3 className="card-header">History</h3> 
            </div>
        </Layout>
    );
};

export default Dashboard ; 