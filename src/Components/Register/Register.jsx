import { useState } from "react";
import "./Register.css";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import axios from "axios";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import { Oval } from "react-loader-spinner";

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [showrePassword, setreShowPassword] = useState(false);
  const [loading, setloading] = useState(false);
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const togglerePasswordVisibility = () => {
    setreShowPassword(!showrePassword);
  };
  const apiForm = async (values) => {
    setloading(true);
    try {
      const { data } = await axios.post(
        "https://ecommerce.routemisr.com/api/v1/auth/signup",
        values
      );
      if (data.message === "success") {
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "Registration completed successfully",
          showConfirmButton: false,
          timer: 1500,
          customClass: {
            popup: "my-swal-popup",
            title: "my-swal-title",
            icon: "my-swal-icon",
          },
          backdrop: `
            rgba(0,0,0,0.4)
            url("https://i.gifer.com/YCZH.gif")
            left top
            no-repeat
          `,
        });

        setTimeout(() => {
          navigate("/login");
        }, 1500);
      }
    } catch (error) {
      toast.error(error.response.data.message, {
        style: {
          backgroundColor: "red",
          color: "white",
        },
      });
    }
    setloading(false);
  };
  const handleForm = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      password: "",
      rePassword: "",
    },
    onSubmit: apiForm,
    validate: (values) => {
      let errors = {};
      const regexName = /^[A-Za-z\s]{3,}$/;
      const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
      const regexPhone =
        /^(?:\+20)?(?:0?(10|11|12|13|15)\d{8}|(?:2[1-9]\d{7}))$/;

      if (!regexName.test(values.name)) {
        errors.name =
          "Name must be at least 3 characters long and contain only letters and spaces.";
      }

      if (!regexEmail.test(values.email)) {
        errors.email = "Invalid email address.";
      }

      if (!regexPassword.test(values.password)) {
        errors.password =
          "Password must be at least 8 characters long and include uppercase letters, lowercase letters, and numbers.";
      }

      if (!regexPhone.test(values.phone)) {
        errors.phone = "Please enter a valid Egyptian phone number.";
      }

      if (values.rePassword !== values.password) {
        errors.rePassword = "Passwords do not match.";
      }

      return errors;
    },
  });
  return (
    <div className="d-flex justify-content-center align-items-center">
      <section className="w-50 bg-image register">
        <div className="mask d-flex align-items-center gradient-custom-3 py-4">
          <div className="container  ">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                <div className="card" style={{ borderRadius: "15px" }}>
                  <div className="card-body p-5 shadow-lg">
                    <h2 className="text-center mb-3">Create an account</h2>
                    <form onSubmit={handleForm.handleSubmit}>
                      <div className="form-outline mb-2">
                        <label className="form-label" htmlFor="name">
                          Your Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          className="form-control form-control-lg"
                          value={handleForm.values.name}
                          onChange={handleForm.handleChange}
                          onBlur={handleForm.handleBlur}
                        />
                        {handleForm.errors.name && handleForm.touched ? (
                          <div
                            className="alert alert-danger  my-2"
                            role="alert"
                          >
                            {handleForm.errors.name}
                          </div>
                        ) : (
                          ""
                        )}
                      </div>

                      <div className="form-outline mb-2">
                        <label className="form-label" htmlFor="email">
                          Your Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          className="form-control form-control-lg"
                          value={handleForm.values.email}
                          onChange={handleForm.handleChange}
                          onBlur={handleForm.handleBlur}
                        />
                        {handleForm.errors.email && handleForm.touched ? (
                          <div
                            className="alert alert-danger  my-2"
                            role="alert"
                          >
                            {handleForm.errors.email}
                          </div>
                        ) : (
                          ""
                        )}
                      </div>
                      <div className="form-outline mb-2">
                        <label className="form-label" htmlFor="phone">
                          Your Phone
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          className="form-control form-control-lg"
                          value={handleForm.values.phone}
                          onChange={handleForm.handleChange}
                          onBlur={handleForm.handleBlur}
                        />
                        {handleForm.errors.phone && handleForm.touched ? (
                          <div
                            className="alert alert-danger  my-2"
                            role="alert"
                          >
                            {handleForm.errors.phone}
                          </div>
                        ) : (
                          ""
                        )}
                      </div>

                      <div className="form-outline mb-2 position-relative">
                        <label className="form-label" htmlFor="password">
                          Password
                        </label>
                        <input
                          type={showPassword ? "text" : "password"}
                          id="password"
                          className="form-control form-control-lg"
                          value={handleForm.values.password}
                          onChange={handleForm.handleChange}
                          onBlur={handleForm.handleBlur}
                        />
                        <i
                          className={`fa-solid ${
                            showPassword ? "fa-eye-slash" : "fa-eye"
                          }`}
                          onClick={togglePasswordVisibility}
                          style={{
                            position: "absolute",
                            right: "10px",
                            top: "70%",
                            transform: "translateY(-50%)",
                            cursor: "pointer",
                            color: "#aaa",
                          }}
                          aria-label="Toggle Password Visibility"
                        ></i>
                        {handleForm.errors.password && handleForm.touched ? (
                          <div
                            className="alert alert-danger  my-2"
                            role="alert"
                          >
                            {handleForm.errors.password}
                          </div>
                        ) : (
                          ""
                        )}
                      </div>

                      <div className="form-outline mb-2  position-relative">
                        <label className="form-label" htmlFor="rePassword">
                          Repeat your password
                        </label>
                        <input
                          type={showrePassword ? "text" : "password"}
                          id="rePassword"
                          className="form-control form-control-lg"
                          value={handleForm.values.rePassword}
                          onChange={handleForm.handleChange}
                          onBlur={handleForm.handleBlur}
                        />
                        <i
                          className={`fa-solid ${
                            showrePassword ? "fa-eye-slash" : "fa-eye"
                          }`}
                          onClick={togglerePasswordVisibility}
                          style={{
                            position: "absolute",
                            right: "10px",
                            top: "70%",
                            transform: "translateY(-50%)",
                            cursor: "pointer",
                            color: "#aaa",
                          }}
                          aria-label="Toggle Password Visibility"
                        ></i>
                        <div>
                          {handleForm.errors.rePassword &&
                          handleForm.touched ? (
                            <div
                              className="alert alert-danger  my-2"
                              role="alert"
                            >
                              {handleForm.errors.rePassword}
                            </div>
                          ) : (
                            ""
                          )}
                        </div>
                      </div>

                      <div className="d-flex justify-content-center">
                        <button
                          disabled={!handleForm.dirty || !handleForm.isValid}
                          type="submit"
                          className="btn btn-danger btn-block btn-lg my-2 form-control"
                        >
                          {loading ? (
                            <Oval
                              visible={true}
                              height="40"
                              width="40"
                              color="#fff"
                              ariaLabel="oval-loading"
                              wrapperStyle={{
                                display: "flex",
                                justifyContent: "center",
                              }}
                              wrapperClass=""
                            />
                          ) : (
                            "Register"
                          )}
                        </button>
                      </div>

                      <p className="text-center text-muted mt-5 mb-0">
                        Have already an account?{" "}
                        <Link to="/login" className="fw-bold text-body">
                          <u>Login here</u>
                        </Link>
                      </p>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
