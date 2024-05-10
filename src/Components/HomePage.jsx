import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from './navbar'
import MultiCarousel from './carouselCard'
import TutoringExperienceSection from './tutoringExperienceSection'
import WorldClassTutorsSection from './worldClassSetion'
import "react-multi-carousel/lib/styles.css";
import Footer from './Footer'

const HomePage = () => {
    const items = [
        {
            image: "screen13.webp",
            date: "20 March 2024",
            title: "Product managemnet basic-course",
            author: "By Chrishemsworth"
        },
        {
            image: "screen12.jpg",
            date: "20 March 2024",
            title: "BM Data science professional certificate",
            author: "By Chrishemsworth"
        },
        {
            image: "screen13.webp",
            date: "20 March 2024",
            title: "Product managemnet basic-course",
            author: "By Chrishemsworth"
        },
        {
            image: "screen12.jpg",
            date: "20 March 2024",
            title: "BM Data science professional certificate",
            author: "By Chrishemsworth"
        },
        {
            image: "screen13.webp",
            date: "20 March 2024",
            title: "Product managemnet basic-course",
            author: "By Chrishemsworth"
        },
        {
            image: "screen12.jpg",
            date: "20 March 2024",
            title: "BM Data science professional certificate",
            author: "By Chrishemsworth"
        },
        {
            image: "screen13.webp",
            date: "20 March 2024",
            title: "Product managemnet basic-course",
            author: "By Chrishemsworth"
        },
        {
            image: "screen12.jpg",
            date: "20 March 2024",
            title: "BM Data science professional certificate",
            author: "By Chrishemsworth"
        },
    ];

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <>
            <section>
                <Navbar />
            </section>
            <div className='container'>
                
                <section className='mb-5'>
                    <div className="row">
                        <div className="col-md-6  d-flex align-items-center justify-content-center">
                            <div>
                                <h5 className='mb-2'>EMPOWERING STUDENTS TO EXCEL</h5>
                                <h1 className='fw-bold mb-5' style={{ fontSize: '3.5rem' }}>Your Gateway to Effective Learning</h1>
                                <div className='border border-2 p-2'>
                                    <div className='row'>
                                        <div className='col-md-4'>
                                            <div className='d-flex align-items-center'>
                                                <span> <i className="fa-solid fa-location-dot"></i></span>
                                                <span>
                                                    <select className="form-control form-select border-0">
                                                        <option selected>Enter Location</option>
                                                        <option>Chennai</option>
                                                        <option>Bangalore</option>
                                                    </select>
                                                </span>
                                            </div>
                                        </div>
                                        <div className='col-md-8 border-start'>
                                            <div className='d-flex align-items-center gap-3'>
                                                <span>
                                                    <input type="text" class="form-control border-0" placeholder="Search for a Subjects" />
                                                </span>
                                                <span>
                                                    <button type="submit" class="btn btn-dark"><i className="fa-solid fa-magnifying-glass taxt-light me-2"></i>Search</button>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-6 '>
                            <div className='image-transition'>
                                <img src="screen8.png" alt="" className='w-100 h-100' />
                                <img src="screen16.png" alt="" className='w-100 h-100' />
                            </div>
                        </div>
                    </div>
                </section>

                <section className='mb-5'>
                    <div className='d-flex justify-content-between align-items-center mb-5'>
                        <h1 className='fw-bold'>Top course of study fields</h1>
                        <Link className='text-decoration-none fw-bold'>See all</Link>
                    </div>
                    <MultiCarousel items={items} responsive={responsive} />

                </section>
                <section className='mb-3'>
                    <div className="row">
                        <div className='col-md-6 '>
                            <img src="screen2.png" alt="" className='w-100 h-100' />
                        </div>
                        <div className="col-md-6 p-5 ">
                            <h1 className=' fw-bold  mb-3'>Elevate Your Learning Journey with Tutorcen</h1>
                            <p className='mb-5 '>Welcome to Tutorcen's Events and Seminars! Explore a world of educational experiences. From webinars to workshops, there's something for everyone. Stay updated on upcoming events and secure your spot. Let's learn, grow, and inspire together!</p>
                            <div className=" mb-2">
                                <button type="submit" className="btn btn-dark btn-block">Explore more</button>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='mb-5'>
                    <div className="row">
                        <div className="col-md-6 p-5 ">
                            <h1 className=' fw-bold  mb-3'>Join our global team, share your passion</h1>
                            <p className='mb-5 '>At Tutorcen, we extend a warm invitation to join our worldwide network of tutors and learners. Whether you're a seasoned educator or a student hungry for knowledge, our platform fosters a supportive community where learning has no limits</p>
                            <div className=" mb-2">
                                <button type="submit" className="btn btn-dark btn-block">Apply for Tutor</button>
                            </div>
                        </div>
                        <div className='col-md-6 '>
                            <img src="screen1.png" alt="" className='w-100 h-100' />
                        </div>
                    </div>
                </section>
                <section className='mb-5 p-3' style={{ backgroundColor: "#0D4528" }}>
                    <div className="row">
                        <div className="col-md-6  ">
                            <img src="screen7.png" alt="" width={300} height={100} />
                            <h1 className=' fw-bold text-light  mb-5 '>Discover Your Perfect Tutor Find Expert Guidance for Every Subject</h1>
                            <div className=" mb-2">
                                <button type="submit" className="btn btn-dark btn-block">Find Tutor</button>
                            </div>
                        </div>
                        <div className='col-md-6 '>
                            <img src="screen6.png" alt="" className='w-100 h-100' />
                        </div>
                    </div>
                </section>
                <TutoringExperienceSection />
                <WorldClassTutorsSection />
                <section className='mb-5 p-3 gradient'>
                    <div className="row">
                        <div className="col-md-6 p-5 ">
                            {/* <div className='col-md-10 d-flex flex-column align-items-center justify-content-center'> */}
                            <h1 className=' fw-bold text-light  mb-5 '>Ready to take your learning journey to the next level</h1>
                            {/* </div> */}
                            <div className=" mb-2">
                                <button type="submit" className="btn  btn-block text-light" style={{ background: "#03A9F5" }}>Get started</button>
                            </div>
                        </div>
                        <div className='col-md-6 '>
                            <img src="screen9.png" alt="" className='w-100 h-100' />
                        </div>
                    </div>
                </section>
            </div >
            <Footer />
        </>
    )
}

export default HomePage