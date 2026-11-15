"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAccountContext, type User } from "../AccountContext";

const fieldClass = "mb-2 w-full rounded border border-neutral-300 px-3 py-2";

export default function Profile() {
  const { currentUser, setCurrentUser, updateUser } = useAccountContext();
  const [profile, setProfile] = useState<User | null>(currentUser);
  const [dob, setDob] = useState("2000-01-01");
  const router = useRouter();

  useEffect(() => {
    if (!currentUser) router.push("/account/signin");
  }, [currentUser, router]);

  const update = () => {
    if (!profile) return;
    updateUser(profile);
    setCurrentUser(profile);
  };

  const signout = () => {
    setCurrentUser(null);
    router.push("/account/signin");
  };

  if (!profile) return null;
  return (
    <div id="wd-profile-screen" className="max-w-sm">
      <h1 className="mb-3 text-2xl font-semibold">Profile</h1>
      <input
        id="wd-username"
        placeholder="username"
        value={profile.username}
        onChange={(e) => setProfile({ ...profile, username: e.target.value })}
        className={`wd-username ${fieldClass}`}
      />
      <input
        id="wd-password"
        placeholder="password"
        type="password"
        value={profile.password}
        onChange={(e) => setProfile({ ...profile, password: e.target.value })}
        className={`wd-password ${fieldClass}`}
      />
      <input
        placeholder="First Name"
        id="wd-firstname"
        value={profile.firstName}
        onChange={(e) => setProfile({ ...profile, firstName: e.target.value })}
        className={fieldClass}
      />
      <input
        placeholder="Last Name"
        id="wd-lastname"
        value={profile.lastName}
        onChange={(e) => setProfile({ ...profile, lastName: e.target.value })}
        className={fieldClass}
      />
      <input
        type="date"
        id="wd-dob"
        value={dob}
        onChange={(e) => setDob(e.target.value)}
        className={fieldClass}
      />
      <input
        type="email"
        id="wd-email"
        placeholder="email"
        value={profile.email}
        onChange={(e) => setProfile({ ...profile, email: e.target.value })}
        className={fieldClass}
      />
      <select
        id="wd-role"
        value={profile.role}
        onChange={(e) =>
          setProfile({ ...profile, role: e.target.value as User["role"] })
        }
        className={fieldClass}
      >
        <option value="USER">User</option>
        <option value="ADMIN">Admin</option>
        <option value="FACULTY">Faculty</option>
        <option value="STUDENT">Student</option>
        <option value="TA">TA</option>
      </select>
      <button
        type="button"
        onClick={update}
        id="wd-update-btn"
        className="mb-2 block w-full rounded bg-yellow-400 px-3 py-2 text-center font-medium"
      >
        Update
      </button>
      <button
        type="button"
        onClick={signout}
        id="wd-signout-btn"
        className="block w-full rounded bg-red-600 px-3 py-2 text-center text-white"
      >
        Sign out
      </button>
    </div>
  );
}
