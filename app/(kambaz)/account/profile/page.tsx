import Link from "next/link";

export default function Profile() {
    return (
        <div>
            <h1>Profile</h1>
            <Link href="/account/signin">Sign Out</Link>
        </div>
    );
}