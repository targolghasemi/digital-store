import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

import { userExists } from "../utils/localUsers";
import { saveLocalUser } from "../utils/localUsers";
import Spinner from "../components/Spinner";

import { toast } from "react-toastify"

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const signupSchema = Yup.object({
  username: Yup.string().required("Username is required"),
  password: Yup.string().required("Password is required"),
  confirmpassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords do not match")
    .required("Confirm password is required"),
});

const Signup = () => {
    const navigate = useNavigate();
    const {setCurrentUser} = useContext(AuthContext);
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-200">
      <div className="w-80 rounded-lg bg-white p-8 shadow-[0_4px_20px_rgba(0,0,0,0.12)]">
        <h2 className="mb-1 text-2xl font-bold text-gray-800">Sign up</h2>
        <span className="mb-6 block text-sm text-gray-500">
          Welcome back to Digital Store
        </span>

        <Formik
          initialValues={{ username: "", password: "", confirmpassword:"" }}
          validationSchema={signupSchema}
          onSubmit={async(values) => {
            const isUserExists = userExists(values.username);

            if (isUserExists) {
                toast.error("Username already exists")
                return
            }else{
                const newUser = {username:values.username, password:values.password}
                saveLocalUser(newUser);
                setCurrentUser(newUser);
                toast.success("Account created successfully")
                navigate("/")
            }
          }}
        >
          {({ isSubmitting }) => (
            <Form className="flex flex-col gap-4">
              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">
                  Username
                </label>
                <Field
                  name="username"
                  placeholder="email"
                  className="w-full rounded-lg border border-gray-300 px-4 py-2 text-sm outline-none transition focus:border-purple-500 focus:ring-2 focus:ring-purple-100"
                />
                <ErrorMessage
                  name="username"
                  component="p"
                  className="mt-1 text-xs text-red-600"
                />
              </div>

              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">
                  Password
                </label>
                <Field
                  name="password"
                  placeholder="password"
                  type="password"
                  className="w-full rounded-lg border border-gray-300 px-4 py-2 text-sm outline-none transition focus:border-purple-500 focus:ring-2 focus:ring-purple-100"
                />
                <ErrorMessage
                  name="password"
                  component="p"
                  className="mt-1 text-xs text-red-600"
                />
              </div>

              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">
                  Confirm password
                </label>
                <Field
                  name="confirmpassword"
                  placeholder="password again"
                  type="password"
                  className="w-full rounded-lg border border-gray-300 px-4 py-2 text-sm outline-none transition focus:border-purple-500 focus:ring-2 focus:ring-purple-100"
                />
                <ErrorMessage
                  name="confirmpassword"
                  component="p"
                  className="mt-1 text-xs text-red-600"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-2 flex w-full items-center justify-center rounded-lg bg-purple-700 py-2 text-sm font-medium text-white transition hover:bg-purple-800 disabled:opacity-70"
              >
                {isSubmitting ? <Spinner size={20} /> : "Sign up"}
              </button>
            </Form>
          )}
        </Formik>

        <div className="mt-4 text-center text-sm text-gray-500">
          <span>Already have an account? </span>
          <Link to="/login" className="cursor-pointer font-medium text-purple-700 hover:underline">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;