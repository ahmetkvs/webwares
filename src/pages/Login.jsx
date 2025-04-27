import { useForm } from "react-hook-form";
import { validateEmail } from "../utils/validationFunctions";
import { useDispatch } from "react-redux";
import { loginUser } from "../redux/client/clientActions";
import {
  useHistory,
  useLocation,
} from "react-router-dom/cjs/react-router-dom.min";
import { Link } from "react-router-dom/cjs/react-router-dom";

function Login() {
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();

  const fromPath = location.state?.from || "/";

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ mode: "onTouched" });

  function onSubmit(data) {
    console.log(data);
    dispatch(loginUser(data, history, fromPath));
  }

  return (
    <section className="w-full">
      <div className="max-w-md mx-auto my-16">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col justify-center items-center gap-2 mb-6">
            <h3 className="text-md font-semibold text-center text-sky-600 uppercase">
              LOGIN FORM
            </h3>
            <h2 className="text-2xl font-inter font-semibold text-slate-800 text-center">
              Welcome on board!
            </h2>
            <p className="text-sm font-bold text-center text-gray-600">
              We just need a little bit of data from you to start
            </p>
          </div>
          <div className="flex flex-col gap-8">
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
                })}
              />
              {errors.password && <p>{errors.password.message}</p>}
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="remember-me"
                name="remember"
                className="mr-2 form-checkbox h-4 w-4 text-sky-600 focus:ring-sky-500 border-gray-300 rounded"
                {...register("remember")}
              />
              <label
                htmlFor="terms-and-conditions"
                className="text-gray-700 text-sm"
              >
                Remember Me
              </label>
            </div>
          </div>
          <button
            type="submit"
            className="mt-8 bg-sky-600 hover:bg-sky-700 text-white font-semibold py-2 px-6 rounded focus:outline-none flex items-center justify-center"
          >
            Submit
          </button>
        </form>
        <div className="mt-12 text-lg font-inter">
          <Link to="/signup">
            <p>
              Don't have an account?
              <span className="text-sky-600 font-bold hover:cursor-pointer hover:text-sky-950 ml-2">
                Sign Up
              </span>
            </p>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Login;
