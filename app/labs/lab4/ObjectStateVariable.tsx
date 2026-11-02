"use client";

import { useState } from "react";

export default function ObjectStateVariable() {
  const [user, setUser] = useState({
    username: "johndoe",
    firstName: "John Doe",
    lastName: "Doe",
    email: "john.doe@example.com",
    salary: 100000,
    dob: "1990-01-01",
    isAdmin: false,
  });
  return (
    <div id="wd-object-state-variable">
      <h2>Object State Variable</h2>
      <pre>{JSON.stringify(user, null, 2)}</pre>
      <input type="text"
        value={user.username}
        onChange={(e) => setUser({ ...user, username: e.target.value })} />
      <br />
      <input type="text"
        value={user.firstName}
        onChange={(e) => setUser({ ...user, firstName: e.target.value })} />
      <br />
      <input type="text"
        value={user.lastName}
        onChange={(e) => setUser({ ...user, lastName: e.target.value })} />
      <br />
      <input type="text"
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })} />
      <br />
      <input
        value={user.salary}
        type="number"
        onChange={(e) => setUser({ ...user, salary: parseInt(e.target.value) })} />
      <br />
      <input type="date"
        value={user.dob}
        onChange={(e) => setUser({ ...user, dob: e.target.value })} />
      <br />
      <input type="checkbox"
        checked={user.isAdmin}
        onChange={(e) => setUser({ ...user, isAdmin: e.target.checked })} />
      <br />
      <button onClick={() => setUser({ ...user, isAdmin: !user.isAdmin })}>Toggle Admin</button>
      <br />
      <button onClick={() => setUser({ ...user, username: "johndoe", firstName: "John Doe", lastName: "Doe", email: "john.doe@example.com", salary: 100000, dob: "1990-01-01", isAdmin: false })}>Reset</button>
      <br />
      <hr />
    </div>
  );
}