import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import logo from "../../Image/logo2.png";
import "./Register.css";
import useFirebase from "../../hooks/useFirebase";
const Register = () => {
  const { registerEmail } = useFirebase();
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    if (data.password1 === data.password2) {
      console.log(data);
      registerEmail(data.email, data.password1, data.name, navigate);
      reset();
    } else {
      alert("Your Password Don't match");
    }
  };
  return (
    <div className="homeBanner position-relative">
      <div className="position-absolute custom-content">
        <div className="text-center">
          <img
            src={logo}
            alt="avtor"
            style={{ width: 200, marginBottom: 10 }}
          />
        </div>
        <form className="form-input-custom" onSubmit={handleSubmit(onSubmit)}>
          <input
            placeholder="Name"
            type="text"
            name="name"
            {...register("name")}
          />
          <input
            placeholder="Email"
            type="email"
            name="email"
            {...register("email", { required: true })}
          />
          {errors.exampleRequired && (
            <span className="text-danger">This field is required</span>
          )}
          <input
            placeholder="Password"
            type="password"
            name="password1"
            {...register("password1")}
          />
          <input
            placeholder="Confirm Password"
            type="password"
            name="password2"
            {...register("password2")}
          />
          <input className="singup-btn" value="Sing Up" type="submit" />
        </form>
        <div>
          <p>
            Already Account <Link to="/login">Log In</Link>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
