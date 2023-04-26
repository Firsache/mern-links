import { useState } from "react";

export const AuthPage = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const changeHandler = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="row">
      <div className="col s6 offset-s3">
        <h1>Shorten your link</h1>
        <div className="card teal lighten-3">
          <div className="card-content white-text">
            <span className="card-title">Authorization</span>
            <div>
              <div className="input-field">
                <input
                  id="email"
                  type="text"
                  name="email"
                  onChange={changeHandler}
                />
                <label for="email">Email</label>
              </div>
              <div className="input-field">
                <input
                  id="password"
                  type="password"
                  name="password"
                  onChange={changeHandler}
                />
                <label for="password">Password</label>
              </div>
            </div>
          </div>
          <div className="card-action">
            <button className="btn teal darken-2" style={{ marginRight: 10 }}>
              Log in
            </button>
            <button className="btn grey lighten-1 black-text">Register</button>
          </div>
        </div>
      </div>
    </div>
  );
};
