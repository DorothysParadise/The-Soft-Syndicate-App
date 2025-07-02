
export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-soft-bg text-soft-text font-sans">
      <header className="text-center py-6 shadow-sm bg-white">
        <h1 className="text-3xl font-bold font-heading">The Soft Syndicate</h1>
        <p className="text-sm text-gray-500">A space for Black women creatives & entrepreneurs to thrive together</p>
      </header>
      <main className="p-4 max-w-2xl mx-auto">{children}</main>
    </div>
  );
}
