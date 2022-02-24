import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import logo from "../../Image/logo2.png";
import useFirebase from '../../hooks/useFirebase';
const Login = () => {
  const navigate = useNavigate();
  const { logIn } = useFirebase();
    const {
      register,
      handleSubmit,
      reset,
      formState: { errors },
    } = useForm();
    const onSubmit = (data) => {
        logIn(data.email,data.password,navigate)
        reset();
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
              {...register("password")}
            />
            <input className="singup-btn" value="Log In" type="submit" />
          </form>
          <div>
            <p>
              New user <Link to="/register">Register</Link>.
            </p>
          </div>
        </div>
      </div>
    );
};

export default Login;