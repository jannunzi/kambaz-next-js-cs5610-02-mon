import Link from "next/link";

export default function SignUp() {
    return (
        <div>
            <h1>Sign Up</h1>
            <label htmlFor="username">Username</label>
            <input id="username" type="text" placeholder="Username" title="Enter your username" />
            <br />
            <label htmlFor="password">Password</label>
            <input id="password" type="password" placeholder="Password" title="Enter your password" />
            <br />
            <label htmlFor="confirm-password">Confirm Password</label>
            <input id="confirm-password" type="password" placeholder="Confirm Password" title="Confirm your password" />
            <br />
            <Link href="/account/signin">Sign In</Link>
            <br />
            <Link href="/account/profile">Sign Up</Link>
        </div>
    );
}