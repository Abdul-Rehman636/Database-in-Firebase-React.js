import React, { useState } from "react";
import "./form.css";

function Form() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    confirm_password: "",
  });

  let name, value;
  const getuserdata = (event) => {
    name = event.target.name;
    value = event.target.value;

    setUser({ ...user, [name]: value });
  };

  const sendData = async (e) => {
    e.preventDefault();

    const { name, email, password, confirm_password } = user;

    const res = await fetch(
      "https://database-form-f3535-default-rtdb.firebaseio.com/firebase-data.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
          confirm_password,
        }),
      }
    );
  };

  return (
    <>
      <div id="form-1">
        <div id="form-2">
          <form action="" id="form-main" method="POST">
            <div id="form-3">
              <label htmlFor="name" id="label-text">
                Name
              </label>
              <input
                autoComplete="off"
                name="name"
                type="text"
                placeholder="Name"
                id="name"
                value={user.name}
                onChange={getuserdata}
                required
              />
            </div>
            <div id="form-4">
              <label htmlFor="email" id="label-text">
                Email
              </label>
              <input
                autoComplete="off"
                name="email"
                type="email"
                placeholder="Email"
                id="email"
                value={user.email}
                onChange={getuserdata}
                required
              />
            </div>
            <div id="form-5">
              <label htmlFor="password" id="label-text">
                Password
              </label>
              <input
                autoComplete="off"
                name="password"
                type="password"
                placeholder="Password"
                id="password"
                value={user.password}
                onChange={getuserdata}
                required
              />
            </div>
            <div id="form-6">
              <label htmlFor="confirm_password" id="label-text">
                Confirm Password
              </label>
              <input
                autoComplete="off"
                name="confirm_password"
                type="password"
                placeholder="Confirm Password"
                id="confirm_password"
                value={user.confirm_password}
                onChange={getuserdata}
                required
              />
            </div>
            <div id="form-7">
              <button type="submit" id="button" onClick={sendData}>
                Register Now
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Form;

//   const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
//     useFormik({
//       initialValues: initialValues,
//       validationSchema: registerSchema,
//       onSubmit: (values) => {
//         console.log(values);
//       },
//     });
//   console.log(errors);
