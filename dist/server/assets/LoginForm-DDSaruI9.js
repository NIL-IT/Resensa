import { jsx, jsxs } from "react/jsx-runtime";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { x as changeIsAdmin, V as authPost } from "../entry-server.js";
import { useNavigate, Link } from "react-router-dom";
import Cookies from "js-cookie";
import "react-dom/server";
import "react-router";
import "@reduxjs/toolkit";
import "axios";
import "react-helmet-async";
import "clsx";
import "tailwind-merge";
import "lucide-react";
function LoginForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { error } = useSelector((state) => state.user);
  const [form, setForm] = React.useState({
    username: "",
    password: ""
  });
  useEffect(() => {
    dispatch(changeIsAdmin(false));
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
    try {
      const resultAction = await dispatch(authPost(form));
      if (authPost.fulfilled.match(resultAction)) {
        const token = resultAction.payload;
        Cookies.set("access_token", token, { expires: 1 });
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
  return /* @__PURE__ */ jsx("article", { className: "w-screen h-screen", children: /* @__PURE__ */ jsxs("div", { className: "flex min-h-full flex-col justify-center px-6 py-12 lg:px-8", children: [
    /* @__PURE__ */ jsxs("div", { className: "sm:mx-auto sm:w-full sm:max-w-sm", children: [
      /* @__PURE__ */ jsx(Link, { to: "/", children: /* @__PURE__ */ jsx(
        "img",
        {
          className: "mx-auto h-10 w-auto",
          src: "/icon/logo.svg",
          alt: "Recensa",
          title: "Recensa"
        }
      ) }),
      /* @__PURE__ */ jsx("h2", { className: "mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900", children: "Войти в аккаунт" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "mt-10 sm:mx-auto sm:w-full sm:max-w-sm", children: /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "space-y-6", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(
          "label",
          {
            htmlFor: "username",
            className: "block text-sm/6 font-medium text-gray-900",
            children: "Имя пользователя"
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "mt-2", children: /* @__PURE__ */ jsx(
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
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("div", { className: "flex items-center justify-between", children: /* @__PURE__ */ jsx(
          "label",
          {
            htmlFor: "password",
            className: "block text-sm/6 font-medium text-gray-900",
            children: "Пароль"
          }
        ) }),
        /* @__PURE__ */ jsx("div", { className: "mt-2", children: /* @__PURE__ */ jsx(
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
      error && /* @__PURE__ */ jsx("div", { className: "text-red-500 text-sm text-center", children: error }),
      /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
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
