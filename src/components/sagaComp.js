import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../redux/sagas";

const SagaComponent = () => {
  const dispatch = useDispatch();
  const [form, setForm] = useState({});
  const users = useSelector(({ User }) => User.users);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "ADD_USER_ACTION", payload: form });
    // let gen = generator();
    // console.log(gen.next());
    // console.log(gen.next());
  };

  function* generator() {
    let res = yield new Promise((resolve) =>
      setTimeout(() => resolve(25), 2000)
    );
    console.log("---------->", res);
    yield "end";
  }

  return (
    <div>
      <h1>Saga</h1>
      <form onSubmit={handleSubmit}>
        <div onChange={handleChange}>
          <input placeholder="Name" name="name" />
          <br />
          <br />
          <input placeholder="Email" name="email" />
          <br />
          <br />
          <button type="submit">Submit</button>
        </div>
      </form>
      <table>
        <thead>
          <th>S.no</th>
          <th>Name</th>
          <th>Email</th>
        </thead>
        <tbody>
          {users.map((user, i) => (
            <tr key={user.id}>
              <td>{i}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SagaComponent;
