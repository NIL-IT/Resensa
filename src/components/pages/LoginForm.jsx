import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authPost, changeIsAdmin } from "../../utils/slice/userSlice";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

export default function LoginForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { error } = useSelector((state) => state.user);
  const [form, setForm] = React.useState({
    username: "",
    password: "",
  });

  useEffect(() => {
    dispatch(changeIsAdmin(false));
    // Check for existing token
    const token = Cookies.get("access_token");
    if (token) {
      dispatch(changeIsAdmin(true));
      navigate("/admin/1");
    }
  }, [dispatch, navigate]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(form, "forma");
    try {
      const resultAction = await dispatch(authPost(form));
      console.log("resultAction", resultAction);
      console.log(authPost.fulfilled, "authPost");
      if (authPost.fulfilled.match(resultAction)) {
        const token = resultAction.payload;
        console.log("Token", token);
        // Store token in cookies for 1 day
        Cookies.set("access_token", token, { expires: 1 });
        dispatch(changeIsAdmin(true));
        navigate("/admin/1");
      }
    } catch (err) {
      console.error("Login failed:", err);
    }
    setForm({
      username: "",
      password: "",
    });
  };

  return (
    <div className="w-screen h-screen">
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src="/icon/logo.svg"
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
            Войти в аккаунт
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="username"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Имя пользователя
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="username"
                  id="username"
                  value={form.username}
                  onChange={handleChange}
                  required
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  Пароль
                </label>
              </div>
              <div className="mt-2">
                <input
                  type="password"
                  name="password"
                  id="password"
                  value={form.password}
                  onChange={handleChange}
                  required
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-gray-400 sm:text-sm/6"
                />
              </div>
            </div>

            {error && (
              <div className="text-red-500 text-sm text-center">{error}</div>
            )}

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-gray-400 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-gray-300 transition-colors"
              >
                Войти
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
