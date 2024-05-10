import React, { useEffect, useState } from 'react';
import Navbar from './navbar';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const navigate = useNavigate();
    const [firstName, setFirstName] = useState('');
    const [email, setEmail] = useState('');

    const handleLogout = () => {
        localStorage.removeItem('user');
        navigate('/');
    };

    useEffect(() => {
        const userData = localStorage.getItem('user');
        if (userData) {
            const userObj = JSON.parse(userData);
            setFirstName(userObj.firstName);
            setEmail(userObj.email);
        }
    }, []);

    return (
        <>
            <Navbar />

            <div className='container mb-3'>
                <div className='d-flex justify-content-end mt-3'>
                    <button className='btn btn-primary ' onClick={handleLogout}>
                        Logout <i className='fa-solid fa-right-from-bracket mx-2'></i>
                    </button>
                </div>
                <div className='d-flex justify-content-center mt-5'>
                    <div class='col-md-6 shadow card mb-3'>
                        <img src='welcome.avif' alt='' />
                        <div class='card-body'>
                            <h3 class='card-title text-center'>{firstName ? firstName : email}</h3>
                            <p class='card-text text-center'>
                                This is a wider card with supporting text below as a natural lead-in to additional
                                content. This content is a little bit longer.
                            </p>
                            <p class='card-text text-end'>
                                <small class='text-muted'>Last Login 2 hour ago</small>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Dashboard;
