"use client";

import { usePathname, useSearchParams, useParams } from "next/navigation";

export default function ClientComponentDemo() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const params = useParams();
  return (
    <div id="wd-client-component-demo">
      <h1>Client Component Demo</h1>
      <p>Current pathname: {pathname}</p>
      <p>Current search params: {JSON.stringify(searchParams)}</p>
      <p>Current params: {JSON.stringify(params)}</p>
    </div>
  );
}