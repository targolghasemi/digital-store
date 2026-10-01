import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { findLocalUser } from "../utils/localUsers";
import { loginWithDummyJson } from "../services/authService";
import Spinner from "../components/Spinner";

import { toast } from "react-toastify"

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import { Link } from "react-router-dom";

const loginSchema = Yup.object({
  username: Yup.string().required("Username is required"),
  password: Yup.string().required("Password is required"),
});

const Login = () => {
    const navigate = useNavigate();
    const {setCurrentUser} = useContext(AuthContext);
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-200">
      <div className="w-80 rounded-lg bg-white p-8 shadow-[0_4px_20px_rgba(0,0,0,0.12)]">
        <h2 className="mb-1 text-2xl font-bold text-gray-800">Login</h2>
        <span className="mb-6 block text-sm text-gray-500">
          Welcome back to Digital Store
        </span>

        <Formik
          initialValues={{ username: "", password: "" }}
          validationSchema={loginSchema}
          onSubmit={async(values) => {

            const localUser = findLocalUser(values.username, values.password)

            if (localUser) {
              setCurrentUser(localUser)
              toast.success("Login successful")
              navigate("/")
              return
            }

            try {
              const dummyUser = await loginWithDummyJson(values.username, values.password);
              setCurrentUser(dummyUser);
              toast.success("Login successful")
              navigate("/");
            } catch (err) {
              toast.error("Invalid username or password");
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

              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-2 flex w-full items-center justify-center rounded-lg bg-purple-700 py-2 text-sm font-medium text-white transition hover:bg-purple-800 disabled:opacity-70"
              >
                {isSubmitting ? <Spinner size={20} /> : "Login"}
              </button>
            </Form>
          )}
        </Formik>

        <div className="mt-4 text-center text-sm text-gray-500">
          <span>Don't have an account? </span>
          <Link to="/signup">
              <span className="cursor-pointer font-medium text-purple-700 hover:underline">
                  Sign up
              </span>
          </Link>
          
        </div>
      </div>
    </div>
  );
};

export default Login;