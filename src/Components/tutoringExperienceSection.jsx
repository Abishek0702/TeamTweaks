import React from 'react';

function TutoringExperienceSection() {
    return (
        <section className='mb-5'>
            <div className='mb-5'>
                <h1 className='fw-bold text-center mb-3'>How We Redefine the </h1>
                <h1 className='fw-bold text-center mb-3'>Online Tutoring Experience</h1>
            </div>
            <div className='d-flex flex-wrap justify-content-center mb-5'>
                <span className='border border-2 bg-dark text-light p-2 m-2'>Parent interaction</span>
                <span className='border border-2 p-2 m-2'>Peer classes</span>
                <span className='border border-2 p-2 m-2'>Discussion forum</span>
                <span className='border border-2 p-2 m-2'>Quiz</span>
                <span className='border border-2 p-2 m-2'>Explore more</span>
            </div>
            <div className="row">
                <div className='col-md-6 order-md-2'>
                    <img src="screen3.png" alt="" className='w-100 h-auto' />
                </div>
                <div className="col-md-6 order-md-1">
                    <h2 className='fw-bold mb-5'>We respect parents' crucial role in their child's academic journey</h2>
                    <div className="">
                        <span className='d-flex align-items-center gap-3'>
                            <i className="fa-solid fa-desktop"></i>
                            <h5>Monitor Your Child's Activity</h5>
                        </span>
                        <p>Keep track of your child's attendance, session participation, and progress in real-time, giving you insight into their engagement and dedication to learning.</p>
                    </div>
                    <div className="my-4">
                        <span className='d-flex align-items-center gap-3'>
                            <i className="fa-solid fa-calendar-minus"></i>
                            <h5>View Detailed Reports</h5>
                        </span>
                        <p>Get comprehensive reports on your child's performance with Tutorcen. View session summaries, assessment results, and tutor feedback for a complete overview of their progress.</p>
                    </div>
                    <div className="">
                        <span className='d-flex align-items-center gap-3'>
                            <i className="fa-solid fa-code-compare"></i>
                            <h5>Communicate with Tutors</h5>
                        </span>
                        <p>Establish direct communication channels with your child's tutors to discuss goals, address concerns, and collaborate on strategies to enhance your child's learning experience</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default TutoringExperienceSection;
