import Link from "next/link";

function NotFoundError() {
  return (
    <main className="not-found">
      <h1>Not Found</h1>
      <p>Unfortunately, we could not find the requested page or resource.</p>
      <p>
        <Link href="/">Go to homepage</Link>
      </p>
    </main>
  );
}

export default NotFoundError;
