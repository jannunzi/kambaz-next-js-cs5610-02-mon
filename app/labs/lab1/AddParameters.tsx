export default function AddParameters({a, b}: {
    a: number;
    b: number;
}) {
    const sum = a + b;
    return (
        <div>
            <h1>Add Parameters</h1>
            <p>The sum of {a} and {b} is {sum}</p>
        </div>
    );
}