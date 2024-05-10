import React from 'react'

const Footer = () => {
  return (
    <>
    <section className='mb-3' style={{ backgroundColor: "#F1F1F1" }}>
        <div className='row'>
            <div className='col-md-4 p-5'>
                <img src="screen15.png" className='pb-3' alt="" />
                <p>Discover endless learning opportunities with Tutorcen! Whether you're a student seeking academic support or a tutor looking to share your expertise, Tutorcen is your go-to platform.</p>
            </div>
            <div className='col-md-8 p-5'>
                <div className='d-flex justify-content-between flex-wrap'>
                    <div>
                        <h6 className='fw-bold'>About us</h6>
                        <hr className='rule' />
                        <ul className="list-unstyled">
                            <li className="mb-3">contact us</li>
                            <li className="mb-3">Voice of success</li>
                            <li className="mb-3">Blog post</li>
                            <li className="mb-3">Best tutors</li>
                        </ul>
                    </div>
                    <div>
                        <h6 className='fw-bold'>Policies</h6>
                        <hr className='rule' />
                        <ul className="list-unstyled">
                            <li className='mb-3'>Privacy policy</li>
                            <li className='mb-3'>Security</li>
                            <li className='mb-3'>Memberships</li>
                            <li className='mb-3'>FAQ</li>
                            <li className='mb-3'>Terms & use</li>
                            <li className='mb-3'>Refund policy</li>
                        </ul>
                    </div>
                    <div>
                    <h6 className="fw-bold fs-6 fs-md-5 fs-lg-4 fs-xl-3">Help & Feedback</h6>

                        <hr className='rule' />
                        <ul className="list-unstyled">
                            <li className='mb-3'>Mail us</li>
                            <li className='mb-3'>Share your story</li>
                            <li className='mb-3'>24/7 Student support</li>
                            <li className='mb-3'>Feedback</li>
                        </ul>
                    </div>
                    <div>
                        <h6 className='fw-bold'>Social</h6>
                        <hr className='rule' />
                        <span>
                            <i className="fa-brands fa-square-facebook fs-4 me-3"></i>
                            <i className="fa-brands fa-square-instagram fs-4  me-3"></i>
                            <i className="fa-brands fa-square-youtube fs-4  me-3"></i>
                            <i className="fa-brands fa-square-x-twitter fs-4 me-3 "></i>
                        </span>
                    </div>
                </div>
            </div>
        </div>
        <div className="text-center">
            <hr className=' ' style={{marginLeft:"200px", marginRight:"200px"}}  />
            <span className="fw-bold fs-5 rule_footer">Our other products & services</span>
        </div>
        <div></div>
    </section>
    <div>
        <h6 className='text-center'>Copyright &copy; tutorcen | Terms & Conditions | Privacy Policy</h6>
    </div>
</>
  )
}

export default Footer