import { useContext, useState } from "react";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import axios from "axios";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import { Oval } from "react-loader-spinner";
import { authContext } from "../../context/AuthContextProvider";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setloading] = useState(false);
  const { settoken } = useContext(authContext);
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const apiForm = async (values) => {
    setloading(true);
    try {
      const { data } = await axios.post(
        "https://ecommerce.routemisr.com/api/v1/auth/signin",
        values
      );
      if (data.message === "success") {
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "Welcome Back",
          showConfirmButton: false,
          timer: 1000,
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
        settoken(data.token);
        localStorage.setItem("tkn", data.token);

        setTimeout(() => {
          navigate("/");
        }, 1000);
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
      email: "",

      password: "",
    },
    onSubmit: apiForm,
    validate: (values) => {
      let errors = {};
      const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

      if (!regexEmail.test(values.email)) {
        errors.email = "Invalid email address.";
      }

      if (!regexPassword.test(values.password)) {
        errors.password =
          "Password must be at least 8 characters long and include uppercase letters, lowercase letters, and numbers.";
      }

      return errors;
    },
  });
  return (
    <div className="d-flex justify-content-center align-items-center">
      <section className="w-50 bg-image login">
        <div className="mask d-flex align-items-center gradient-custom-3 py-4">
          <div className="container  ">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                <div className="card" style={{ borderRadius: "15px" }}>
                  <div className="card-body p-5 shadow-lg">
                    <h2 className="text-center mb-3">Welcome Back,</h2>
                    <form onSubmit={handleForm.handleSubmit}>
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
                            "Login"
                          )}
                        </button>
                      </div>

                      <p className="text-center text-muted mt-5 mb-0">
                        Havn't an account?{" "}
                        <Link to="/register" className="fw-bold text-body">
                          <u>Register here</u>
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
