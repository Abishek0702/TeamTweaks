import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { Link, useNavigate } from 'react-router-dom';

const validationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
});

const SignIn = () => {
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
    <div className=''>
      <div className="row">
        <div className="col-md-6 p-5">
          <div className=' d-flex flex-column align-items-center justify-content-center'>
            <h3 className='text-center fw-bold'>Login to tutorsen</h3>
            <h6 className='mb-5 text-center'>Ready to dive back into your learning journey?</h6>
            <form className="col-lg-10 row g-3" onSubmit={handleSubmit(onSubmit)}>
              <div className="col-12 position-relative">
                <input type="email" className={`form-control ${errors.email ? 'is-invalid' : ''} ps-5`} placeholder="Email address" {...register('email')} />
                <i className="fa-regular fa-envelope position-absolute start-1 top-50 translate-middle-y ms-2"></i>
                {/* {errors.email && <p className="text-danger">{errors.email.message}</p>} */}
              </div>
              <div className="col-12 position-relative">
                <input type="password" className={`form-control ${errors.password ? 'is-invalid' : ''} ps-5`} placeholder="Password" {...register('password')} />
                <i className="fa-solid fa-key position-absolute start-1 top-50 translate-middle-y ms-2"></i>
                {/* {errors.password && <p className="text-danger">{errors.password.message}</p>} */}
              </div>

              <div className="col-12 mb-2">
                <button type="submit" className="btn btn-primary btn-block w-100">Login</button>
              </div>
              <Link className='text-center text-decoration-none'>Forgot password ?</Link>
              <div className="text-center">
                <hr className="w-100" />
                <span className="or-span">or</span>
              </div>
            </form>
            <div className='d-flex gap-4 mb-5'>
              <div className='border border-2 pe-4'>
                <img src="Google.webp" alt="Google" width={50} height={50} />
                <span className='fw-bold'>Google</span>
              </div>
              <div className='border border-2 pe-3'>
                <img src="facebook.webp" alt="Facebook" width={45} height={45} />
                <span className='fw-bold'>Facebook</span>
              </div>
            </div>
            <p className='text-center '>Don't have an account? <Link className='text-decoration-none' to="/signup">Sign Up</Link></p>
          </div>
        </div>
        <div className='col-md-6 d-none d-md-block'>
          <img src="signin.png" alt="" className='w-100 h-100' />
        </div>

      </div>
    </div>
  )
}

export default SignIn;
