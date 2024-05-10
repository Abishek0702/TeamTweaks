import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import SignIn from './SignIn';
import { useNavigate } from 'react-router'

const validationSchema = Yup.object().shape({
    firstName: Yup.string().required('First name is required'),
    lastName: Yup.string().required('Last name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
    rePassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match').required('Please confirm your password'),
    agreePrivacy: Yup.boolean().oneOf([true], 'You must agree to Privacy Policy'),
    agreeTerms: Yup.boolean().oneOf([true], 'You must agree to Terms and Conditions')
});

const SignUp = () => {
    const navigate = useNavigate()
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(validationSchema)
    });

    const onSubmit = (data) => {
        console.log(data);
        localStorage.setItem('user', JSON.stringify(data));
        navigate("/dashboard")


    };

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className='col-md-6 d-none d-md-block'>
                        <img src="signup.png" alt="" className='w-100 h-100' />
                    </div>
                    <div className='col-md-4 p-4'>
                        <Link to="/" className='mb-5 text-decoration-none text-dark'> <i className="fa-solid fa-arrow-left me-2"></i>Back to home</Link>
                        <h1 className='mt-3'>Create an account</h1>
                        <h6 className='mb-3'>Ready to dive back into your learning journey?</h6>
                        <form className="row g-3" onSubmit={handleSubmit(onSubmit)}>
                            <div className="col-md-6">
                                <input type="text" className={`form-control ${errors.firstName ? 'is-invalid' : ''}`} placeholder="First name" {...register('firstName')} />
                                {/* {errors.firstName && <p className="text-danger">{errors.firstName.message}</p>} */}
                            </div>
                            <div className="col-md-6">
                                <input type="text" className={`form-control ${errors.lastName ? 'is-invalid' : ''}`} placeholder="Last name" {...register('lastName')} />
                                {/* {errors.lastName && <p className="text-danger">{errors.lastName.message}</p>} */}
                            </div>
                            <div className="col-12">
                                <input type="email" className={`form-control ${errors.email ? 'is-invalid' : ''}`} placeholder="Email address" {...register('email')} />
                                {/* {errors.email && <p className="text-danger">{errors.email.message}</p>} */}
                            </div>
                            <div className="col-12">
                                <input type="password" className={`form-control ${errors.password ? 'is-invalid' : ''}`} placeholder="Password" {...register('password')} />
                                {/* {errors.password && <p className="text-danger">{errors.password.message}</p>} */}
                            </div>
                            <div className="col-12 mb-2">
                                <input type="password" className={`form-control ${errors.rePassword ? 'is-invalid' : ''}`} placeholder="Re-enter password" {...register('rePassword')} />
                                {/* {errors.rePassword && <p className="text-danger">{errors.rePassword.message}</p>} */}
                            </div>
                            <div className="col-12 mb-3">
                                <div className="form-check mb-2">
                                    <input className="form-check-input" type="checkbox" id="agreePrivacy" {...register('agreePrivacy')} />
                                    <label className="form-check-label" htmlFor="agreePrivacy">
                                        I agree to the Privacy policy
                                    </label>
                                    {errors.agreePrivacy && <p className="text-danger">{errors.agreePrivacy.message}</p>}
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="agreeTerms" {...register('agreeTerms')} />
                                    <label className="form-check-label" htmlFor="agreeTerms">
                                        I agree to the Terms and condition
                                    </label>
                                    {errors.agreeTerms && <p className="text-danger">{errors.agreeTerms.message}</p>}
                                </div>
                            </div>
                            <div className=" mb-2">
                                <button type="submit" className="btn btn-dark btn-block w-100">Sign in</button>
                            </div>
                            <p className='text-center'>Already have an account? <Link className='text-decoration-none' data-bs-toggle="modal" data-bs-target="#exampleModal">Sign In</Link></p>
                        </form>
                    </div>
                </div>
            </div>
            <div class="modal " id="exampleModal" tabindex="-1" data-backdrop="true" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-xl bg-light">
                    <div class="modal-content">
                        <div class="modal-body">
                        <SignIn />
                        </div>
                    </div>
                </div>
            </div>

            
        </>
    )
}

export default SignUp;
