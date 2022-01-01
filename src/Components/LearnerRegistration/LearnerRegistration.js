import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";

const LearnerRegistration = () => {
  const { accountCreate, upload, submitted, setSubmitted } = useAuth();
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    if (data.pass !== data.pass2 || data.pass.length < 6) {
      window.alert(
        "At least 6 charatcer or password doesn't match!! Try again"
      );
      return;
    }
    console.log(data);
    setSubmitted(true);
    accountCreate(data.email, data.pass, data, "learner");
    reset();
  };

  return (
    <div style={{ paddingTop: "40px", paddingBottom: "40px" }}>
      <div className='container centerDiv registration-form box-Shadow'>
        <div className='col-12 col-md-10 col-lg-8'>
          <h4 className='mt-5'>Register As A Learner</h4>

          <form className='formContainer' onSubmit={handleSubmit(onSubmit)}>
            <div className='row'>
              <div className='col-md-6'>
                <div className='form-floating mb-3'>
                  <input
                    type='text'
                    className='form-control'
                    id='name'
                    placeholder='Full Name'
                    {...register("name", { required: true })}
                  />
                  <label htmlFor='name'>Full Name</label>
                </div>
              </div>
              <div className='col-md-6'>
                <div className='form-floating mb-3'>
                  <input
                    type='email'
                    className='form-control'
                    id='email'
                    placeholder='Your Email'
                    {...register("email", { required: true })}
                  />
                  <label htmlFor='emal'>Your Email</label>
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='col-md-6'>
                <div className='form-floating mb-3'>
                  <input
                    type='number'
                    className='form-control'
                    id='age'
                    placeholder='Your Age'
                    {...register("age", { required: true })}
                  />
                  <label htmlFor='floatingInput'>Age</label>
                </div>
              </div>
              <div className='col-md-6'>
                <div className='form-floating mb-3'>
                  <input
                    type='text'
                    className='form-control'
                    id='phone'
                    placeholder='Your Phone Number'
                    {...register("phone", { required: true })}
                  />
                  <label htmlFor='floatingInput'>Phone Number</label>
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='col-md-6'>
                <div className='form-floating'>
                  <textarea
                    className='form-control'
                    placeholder='Your Address'
                    id='address'
                    {...register("address", { required: true })}
                  ></textarea>
                  <label htmlFor='address'>Address</label>
                </div>
              </div>
              <div className='col-md-6'>
                <div className='form-floating mb-3'>
                  <select
                    className='form-select'
                    id='type'
                    aria-label='Floating label select'
                    {...register("type", { required: true })}
                  >
                    <option value='car'>Car</option>
                    <option value='bike'>Bike</option>
                  </select>
                  <label htmlFor='type'>Vehicle type</label>
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='col-md-6'>
                <div className='mb-3'>
                  <label htmlFor='profilePicture'>Profile Picture</label>
                  <input
                    type='file'
                    className='form-control'
                    id='profilePicture'
                    {...register("profilePicture", { required: true })}
                    onChange={(e) => upload(e.target.files[0], "pp")}
                  />
                </div>
              </div>
              <div className='col-md-6'>
                <div className='mb-3'>
                  <label htmlFor='nidImage'>NID Image</label>
                  <input
                    type='file'
                    className='form-control'
                    id='nidImage'
                    {...register("nidImage", { required: true })}
                    onChange={(e) => upload(e.target.files[0], "nid")}
                  />
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='col-md-6'>
                <div className='form-floating mb-3'>
                  <input
                    type='password'
                    className='form-control'
                    id='pass'
                    placeholder='Password'
                    {...register("pass", { required: true })}
                  />
                  <label htmlFor='pass'>Password</label>
                </div>
              </div>
              <div className='col-md-6'>
                <div className='form-floating mb-3'>
                  <input
                    type='password'
                    className='form-control'
                    id='pass2'
                    placeholder='Confirm Pasword'
                    {...register("pass2", { required: true })}
                  />
                  <label htmlFor='pass2'>Confirm Password</label>
                </div>
              </div>
            </div>
            <div className='d-grid mt-3'>
              {submitted ? (
                <button className='btn btn-primary' type='button' disabled>
                  <span
                    className='spinner-border spinner-border-sm'
                    role='status'
                    aria-hidden='true'
                  ></span>{" "}
                  Submitting...
                </button>
              ) : (
                <input
                  type='submit'
                  className='btn btn-primary'
                  value='submit'
                />
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LearnerRegistration;
