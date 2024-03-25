import Link from "next/link";

function NotFoundError() {
  return (
    <main className="not-found">
      <h1>Meal Not Found</h1>
      <p>Unfortunately, we could not find the requested meal.</p>
      <p>
        <Link href="/meals">Go to meals page</Link>
      </p>
    </main>
  );
}

export default NotFoundError;
