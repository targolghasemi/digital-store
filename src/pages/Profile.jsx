import { useNavigate } from "react-router-dom";
import { useContext, useEffect , useState } from "react";
import { AuthContext } from "../context/AuthContext";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import {toast} from "react-toastify"

import { getProfile, saveProfile } from "../utils/localProfiles";

const profileSchema = Yup.object({
  fullName: Yup.string().required("Fullname is required"),
  email: Yup.string().email("Invalid email address").required("email is required"),
  phone: Yup.string()
    .matches(/^[0-9]{10,11}$/, "Phone number must be 10-11 digits")
    .required("Phone is required"),
  address: Yup.string()
    .min(10, "Address is too short")
    .required("Address is required"),
  postalCode: Yup.string()
    .matches(/^[0-9]{10}$/, "Postal code must be 10 digits")
    .required("Postal code is required"),
});



const Profile = () => {
  const [profileData, setProfileData] = useState(null)
  const navigate = useNavigate();
  const { currentUser , setCurrentUser } = useContext(AuthContext);

  const logoutHandler = (event)=>{
    setCurrentUser(null);
    navigate("/")
    toast.success('Log out was successful')
  }

  useEffect(() => {
    if (!currentUser) {
      navigate("/login");
      return;
    }

    const data = getProfile(currentUser.username)
    setProfileData(data)
  }, [currentUser, navigate]);

  if (!currentUser || !profileData) {
    return null;
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-200 py-10">
      <div className="w-96 rounded-lg bg-white p-8 shadow-[0_4px_20px_rgba(0,0,0,0.12)]">
        <div className="mb-6 flex flex-col items-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-purple-700 text-2xl font-semibold text-white">
            {currentUser.username.charAt(0).toUpperCase()}
          </div>

          <span className="mt-2 text-lg font-bold text-gray-800">
            {currentUser.username}
          </span>
        </div>

        <Formik
          enableReinitialize
          initialValues={{
            fullName: profileData.fullName,
            email: profileData.email,
            phone: profileData.phone,
            address: profileData.address,
            postalCode: profileData.postalCode,
          }}
          validationSchema={profileSchema}
          onSubmit={(values) => {
            const {fullName, email, phone, address, postalCode} = values;
            saveProfile(currentUser.username, {fullName , email, phone, address, postalCode})
            toast.success("The information was successfully recorded")
          }}
        >
          <Form className="flex flex-col gap-4">
            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <Field
                name="fullName"
                className="w-full rounded-lg border border-gray-300 px-4 py-2 text-sm outline-none transition focus:border-purple-500 focus:ring-2 focus:ring-purple-100"
              />
              <ErrorMessage
                name="fullName"
                component="p"
                className="mt-1 text-xs text-red-600"
              />
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">
                Email
              </label>
              <Field
                name="email"
                className="w-full rounded-lg border border-gray-300 px-4 py-2 text-sm outline-none transition focus:border-purple-500 focus:ring-2 focus:ring-purple-100"
              />
              <ErrorMessage
                name="email"
                component="p"
                className="mt-1 text-xs text-red-600"
              />
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">
                Phone
              </label>
              <Field
                name="phone"
                className="w-full rounded-lg border border-gray-300 px-4 py-2 text-sm outline-none transition focus:border-purple-500 focus:ring-2 focus:ring-purple-100"
              />
              <ErrorMessage
                name="phone"
                component="p"
                className="mt-1 text-xs text-red-600"
              />
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">
                Address
              </label>
              <Field
                as="textarea"
                name="address"
                rows="3"
                className="w-full rounded-lg border border-gray-300 px-4 py-2 text-sm outline-none transition focus:border-purple-500 focus:ring-2 focus:ring-purple-100"
              />
              <ErrorMessage
                name="address"
                component="p"
                className="mt-1 text-xs text-red-600"
              />
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">
                Postal Code
              </label>
              <Field
                name="postalCode"
                className="w-full rounded-lg border border-gray-300 px-4 py-2 text-sm outline-none transition focus:border-purple-500 focus:ring-2 focus:ring-purple-100"
              />
              <ErrorMessage
                name="postalCode"
                component="p"
                className="mt-1 text-xs text-red-600"
              />
            </div>

            <button
              type="submit"
              className="mt-2 w-full rounded-lg bg-purple-700 py-2 text-sm font-medium text-white transition hover:bg-purple-800"
            >
              Save Changes
            </button>

            <button 
              type="button"
              className="mt-2 w-full rounded-lg bg-purple-700 py-2 text-sm font-medium text-white transition hover:bg-purple-800"
              onClick={logoutHandler}
            >
              Log out
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default Profile;
