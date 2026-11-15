import { useState } from "react";

const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;
export default function PathParameters() {
  const [a, setA] = useState("34");
  const [b, setB] = useState("23");
  return (
    <div id="wd-path-parameters">
      <h4>Path Parameters</h4>
      <input type="text" value={a} onChange={(e) => setA(e.target.value)} />
      <input type="text" value={b} onChange={(e) => setB(e.target.value)} />
      <a id="wd-path-parameter-add"
        href={`${HTTP_SERVER}/lab5/add/${a}/${b}`}>
        Add {a} + {b}
      </a>
    </div>
  );
}