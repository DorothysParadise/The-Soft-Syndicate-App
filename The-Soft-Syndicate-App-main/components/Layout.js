import Link from "next/link";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-soft-bg text-soft-text font-sans">
      <header className="text-center py-6 shadow-sm bg-white">
        <h1 className="text-3xl font-heading tracking-wide">The Soft Syndicate</h1>
        <p className="text-sm mt-2 text-gray-500">A space for Black women creatives & entrepreneurs to thrive together</p>

        <nav className="mt-4 flex justify-center space-x-4 text-sm text-gray-700">
          <Link href="/" className="hover:underline">Home</Link>
          <Link href="/opportunities" className="hover:underline">Opportunities</Link>
          <Link href="/directory" className="hover:underline">Directory</Link>
          <Link href="/mutual-aid" className="hover:underline">Mutual Aid</Link>
        </nav>
      </header>

      <main className="p-4 max-w-2xl mx-auto">
        {children}
      </main>
    </div>
  );
}
