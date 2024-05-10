import React from 'react';
import './css/common.css';

function WorldClassTutorsSection() {
    return (
        <section className='mb-5'>
            <div className='container'>
                <div className='row justify-content-center align-items-center'>
                    <div className='col-lg-6 text-center mb-4 mb-lg-0'>
                        <h1 className='fw-bold'>World-class Tutors, Global</h1>
                        <h1 className='fw-bold'>Learning Search</h1>
                    </div>
                    <div className='col-lg-6 col-sm-10 text-center'>
                        <div className='animated-image'>
                            <img src="screen5.png" alt="" className='img-fluid w-50 h-50' />
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <img src="screen4.png" alt="" className='w-100 h-100' />
            </div>
        </section>
    );
}

export default WorldClassTutorsSection;
