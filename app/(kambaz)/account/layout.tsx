import Link from "next/link";

export default function AccountLayout({ children }: { children: React.ReactNode }) {
    return (
        <table>
            <tr>
                <td align="left" valign="top">
                    <ul>
                        <li><Link href="/account/profile">Profile</Link></li>
                        <li><Link href="/account/signin">Sign In</Link></li>
                        <li><Link href="/account/signup">Sign Up</Link></li>
                    </ul>
                </td>
                <td>
                {children}
                </td>
            </tr>
        </table>
    );
}