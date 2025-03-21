var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};
import { a as React, r as reactExports, j as jsxRuntimeExports } from "./three-vendor-CLIGOdvC.js";
import { u as useDispatch, E as useNavigate, a as useSelector, F as changeIsAdmin, y as api, L as Link, a3 as authPost } from "./index-aArvgGxB.js";
import "./react-vendor-D_QSeeZk.js";
function LoginForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { error } = useSelector((state) => state.user);
  const [form, setForm] = React.useState({
    username: "",
    password: ""
  });
  reactExports.useEffect(() => {
    dispatch(changeIsAdmin(false));
    const token = api.get("access_token");
    if (token) {
      dispatch(changeIsAdmin(true));
      navigate("/admin/1");
    }
  }, [dispatch, navigate]);
  const handleChange = (e) => {
    setForm(__spreadProps(__spreadValues({}, form), { [e.target.name]: e.target.value }));
  };
  const handleSubmit = (e) => __async(this, null, function* () {
    e.preventDefault();
    try {
      const resultAction = yield dispatch(authPost(form));
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
  });
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
