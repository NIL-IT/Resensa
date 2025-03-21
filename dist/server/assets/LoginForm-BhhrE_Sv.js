import { u as useDispatch, F as useNavigate, a as useSelector, G as changeIsAdmin, z as api, j as jsxRuntimeExports, L as Link, a5 as authPost } from "./index-D-mRqp05.js";
import React__default, { useEffect } from "react";
import "react-dom";
function LoginForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { error } = useSelector((state) => state.user);
  const [form, setForm] = React__default.useState({
    username: "",
    password: ""
  });
  useEffect(() => {
    dispatch(changeIsAdmin(false));
    const token = api.get("access_token");
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
    try {
      const resultAction = await dispatch(authPost(form));
      if (authPost.fulfilled.match(resultAction)) {
        const token = resultAction.payload;
        api.set("access_token", token, { expires: 1 });
        dispatch(changeIsAdmin(true));
        navigate("/admin/1");
      }
    } catch (err) {
      console.error("Login failed:", err);
    }
    setForm({
      username: "",
      password: ""
    });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("article", { className: "w-screen h-screen", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex min-h-full flex-col justify-center px-6 py-12 lg:px-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sm:mx-auto sm:w-full sm:max-w-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "img",
        {
          className: "mx-auto h-10 w-auto",
          src: "/icon/logo.svg",
          alt: "Recensa",
          title: "Recensa"
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900", children: "Войти в аккаунт" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 sm:mx-auto sm:w-full sm:max-w-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit, className: "space-y-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "label",
          {
            htmlFor: "username",
            className: "block text-sm/6 font-medium text-gray-900",
            children: "Имя пользователя"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "text",
            name: "username",
            id: "username",
            value: form.username,
            onChange: handleChange,
            required: true,
            className: "block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
          }
        ) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-between", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "label",
          {
            htmlFor: "password",
            className: "block text-sm/6 font-medium text-gray-900",
            children: "Пароль"
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "password",
            name: "password",
            id: "password",
            value: form.password,
            onChange: handleChange,
            required: true,
            className: "block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-gray-400 sm:text-sm/6"
          }
        ) })
      ] }),
      error && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-red-500 text-sm text-center", children: error }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "submit",
          className: "flex w-full justify-center rounded-md bg-gray-400 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-gray-300 transition-colors",
          children: "Войти"
        }
      ) })
    ] }) })
  ] }) });
}
export {
  LoginForm as default
};
