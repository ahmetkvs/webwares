import { useForm } from "react-hook-form";
import {
  validateName,
  validateEmail,
  validatePassword,
  doPasswordsMatch,
  validateTurkishPhone,
  validateTaxId,
  validateIBAN,
} from "../utils/validationFunctions";
import { useEffect, useState } from "react";
import api from "../services/api";
import { formatSignUpData } from "../utils/formatObject";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useSelector, useDispatch } from "react-redux";
import { fetchRoles } from "../redux/client/clientActions";
import { Link } from "react-router-dom/cjs/react-router-dom";

function SignUpFormPage() {
  const dispatch = useDispatch();
  const roles = useSelector((state) => state.client.roles);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const history = useHistory();
  const {
    register,
    handleSubmit,
    watch,
    trigger,
    formState: { errors },
    clearErrors,
  } = useForm({
    mode: "onTouched",
    defaultValues: { role: "customer" },
  });

  useEffect(() => {
    if (!roles || roles.length === 0) {
      dispatch(fetchRoles());
    }
  }, []);

  const passwordValue = watch("password");
  const confirmPasswordValue = watch("confirmPassword");

  useEffect(() => {
    trigger("confirmPassword");
  }, [passwordValue, confirmPasswordValue, trigger]);

  useEffect(() => {
    trigger("password");
  }, [passwordValue, trigger]);

  const selectedRole = watch("role");

  useEffect(() => {
    if (selectedRole !== "store") {
      clearErrors([
        "storeName",
        "storePhone",
        "storeTaxNo",
        "storeBankAccount",
      ]);
    }
  }, [selectedRole, clearErrors]);

  async function onSubmit(data) {
    console.log(data);
    const formattedData = formatSignUpData(data);
    console.log(formattedData);
    setIsSubmitting(true);

    try {
      const formattedData = formatSignUpData(data);
      const response = await api.post("/signup", formattedData);

      console.log("Registration success: ", response.data);

      //redirect
      history.push("/login");
    } catch (err) {
      console.log("Registration error: ", err);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section className="w-full bg-gray-100 py-16 lg:py-24">
      <div className="max-w-md mx-auto bg-white rounded-md shadow-lg p-6 md:p-8">
        <form
          className="space-y-6"
          onSubmit={handleSubmit(onSubmit, (errors) =>
            console.log("Validation errors:", errors)
          )}
        >
          <div className="flex flex-col justify-center items-center gap-2 mb-6">
            <h3 className="text-md font-semibold text-center text-sky-600 uppercase">
              SIGNUP FORM
            </h3>
            <h2 className="text-2xl font-inter font-semibold text-slate-800 text-center">
              Welcome on board!
            </h2>
            <p className="text-sm font-bold text-center text-gray-600">
              We just need a little bit of data from you to get you started
            </p>
            <Link to="/login">
              <p>
                Already have an account
                <span className="text-sky-600 font-bold hover:cursor-pointer hover:text-sky-950 ml-2">
                  Log In
                </span>
              </p>
            </Link>
          </div>

          <div>
            <label
              htmlFor="name"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="shadow border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:border-sky-600"
              {...register("name", {
                required: "Full Name is required",
                validate: validateName,
              })}
            />
            {errors.name && <p>{errors.name.message}</p>}
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="shadow border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:border-sky-600"
              {...register("email", {
                required: "Email is required",
                validate: validateEmail,
              })}
            />
            {errors.email && <p>{errors.email.message}</p>}
          </div>

          <div className="space-y-4">
            <div>
              <label
                htmlFor="password"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="shadow border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:border-sky-600"
                {...register("password", {
                  required: "Password is required",
                  validate: validatePassword,
                })}
              />
              {errors.password && <p>{errors.password.message}</p>}
            </div>

            <div>
              <label
                htmlFor="confirm-password"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Confirm Password
              </label>
              <input
                type="password"
                id="confirm-password"
                name="confirmPassword"
                className="shadow border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:border-sky-600"
                {...register("confirmPassword", {
                  required: "Confirm Password is required",
                  validate: (value) =>
                    doPasswordsMatch(watch("password"), value),
                })}
                onBlur={() => trigger("confirmPassword")}
              />
              {errors.confirmPassword && (
                <p>{errors.confirmPassword.message}</p>
              )}
            </div>
          </div>

          <hr className="border-gray-300" />

          <div>
            <label
              htmlFor="role"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              What are you signing up as?
            </label>
            <select
              id="role"
              name="role"
              className="shadow border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:border-sky-600"
              {...register("role", { required: "Role is required" })}
            >
              {roles.reverse().map((role) => {
                return (
                  <option key={role.id} value={role.code}>
                    {role.name}
                  </option>
                );
              })}
              {/*<option value="customer">Customer</option>
              <option value="admin">Admin</option>
              <option value="store">Store</option>*/}
            </select>
            <p className="text-xs text-gray-500 mt-1">
              Selecting 'Store' will reveal additional business information
              fields.
            </p>
          </div>

          <div
            id="store-fields"
            className={`space-y-4 mt-4 border-t pt-4 border-gray-300 ${
              selectedRole === "store" ? "" : "hidden"
            }`}
          >
            <h3 className="text-lg font-semibold text-gray-700">
              Store Information
            </h3>
            <div>
              <label
                htmlFor="storeName"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Store Name
              </label>
              <input
                type="text"
                id="storeName"
                name="storeName"
                className="shadow border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:border-sky-600"
                {...register("storeName", {
                  required:
                    selectedRole === "store" ? "Store Name is required" : false,
                  validate: selectedRole === "store" ? validateName : undefined,
                })}
              />
              {errors.storeName && <p>{errors.storeName.message}</p>}
            </div>
            <div>
              <label
                htmlFor="storePhone"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="storePhone"
                name="storePhone"
                className="shadow border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:border-sky-600"
                {...register("storePhone", {
                  required:
                    selectedRole === "store"
                      ? "Store Phone is required"
                      : false,
                  validate:
                    selectedRole === "store" ? validateTurkishPhone : undefined,
                })}
              />
              {errors.storePhone && <p>{errors.storePhone.message}</p>}
            </div>
            <div>
              <label
                htmlFor="storeTaxNo"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Tax Number
              </label>
              <input
                type="text"
                id="storeTaxNo"
                name="storeTaxNo"
                className="shadow border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:border-sky-600"
                {...register("storeTaxNo", {
                  required:
                    selectedRole === "store" ? "TaxNo is required" : false,
                  validate:
                    selectedRole === "store" ? validateTaxId : undefined,
                })}
              />
              {errors.storeTaxNo && <p>{errors.storeTaxNo.message}</p>}
            </div>
            <div>
              <label
                htmlFor="storeBankAccount"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Bank Account
              </label>
              <input
                type="text"
                id="storeBankAccount"
                name="storeBankAccount"
                className="shadow border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:border-sky-600"
                {...register("storeBankAccount", {
                  required:
                    selectedRole === "store" ? "IBAN is required" : false,
                  validate: selectedRole === "store" ? validateIBAN : undefined,
                })}
              />
              {errors.storeBankAccount && (
                <p>{errors.storeBankAccount.message}</p>
              )}
            </div>
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              id="terms-and-conditions"
              name="terms"
              className="mr-2 form-checkbox h-4 w-4 text-sky-600 focus:ring-sky-500 border-gray-300 rounded"
              {...register("terms", { required: "Terms is required" })}
            />
            <label
              htmlFor="terms-and-conditions"
              className="text-gray-700 text-sm"
            >
              I agree to the terms and conditions
            </label>
          </div>
          {errors.terms && <p>{errors.terms.message}</p>}

          <div className="flex justify-end gap-4">
            <button
              type="reset"
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded focus:outline-none"
            >
              Reset
            </button>
            <button
              type="submit"
              className="bg-sky-600 hover:bg-sky-700 text-white font-semibold py-2 px-6 rounded focus:outline-none flex items-center justify-center"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              ) : (
                "Sign up"
              )}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default SignUpFormPage;
