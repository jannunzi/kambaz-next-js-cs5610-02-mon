import ImpliedReturn from "./ImpliedReturn";
import Destructing from "./Destructing";
import FunctionDestructing from "./FunctionDestructing";
import * as TheMathLibrary from "./Math";
import ClientComponentDemo from "./ClientComponentDemo";
import { add, subtract, multiply, divide } from "./Math";
import ServerComponentDemo from "./ServerComponentDemo";

export default function Lab3Page() {
  const sum = TheMathLibrary.add(1, 2);
  const difference = TheMathLibrary.subtract(4, 2);
  const product = TheMathLibrary.multiply(2, 3);
  const quotient = TheMathLibrary.divide(10, 2);
  const sum2 = add(1, 2);
  const difference2 = subtract(4, 2);
  const product2 = multiply(2, 3);
  const quotient2 = divide(10, 2);
  return (
    <div>
      <h1>Lab 3</h1>
      <ServerComponentDemo />
      <ClientComponentDemo />
      <ImpliedReturn />
      <Destructing />
      <FunctionDestructing />
    </div>
  );
}