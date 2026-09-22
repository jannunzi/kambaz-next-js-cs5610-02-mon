import Link from "next/link";

export default function SignIn() {
    return (
        <div>
            <h1>Sign In</h1>
            <label htmlFor="username">Username</label>
            <input id="username" type="text" placeholder="Username" title="Enter your username" />
            <br />
            <label htmlFor="password">Password</label>
            <input id="password" type="password" placeholder="Password" title="Enter your password" />
            <br />
            <Link href="/dashboard">Sign In</Link>
            <br />
            <Link href="/account/signup">Sign Up</Link>
        </div>
    );
}