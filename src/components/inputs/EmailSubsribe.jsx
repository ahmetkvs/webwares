function EmailSubscribe() {
  return (
    <>
      <div className="flex rounded-md overflow-hidden border border-gray-300 focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500">
        <input
          type="email"
          placeholder="Your Email"
          className="px-3 py-2 text-sm focus:outline-none flex-grow"
        />
        <button className="bg-blue-500 text-white px-4 py-2 text-sm font-semibold hover:bg-blue-600 focus:outline-none">
          Subscribe
        </button>
      </div>
      <p className="text-gray-500 text-xs mt-1">
        No spam. Just the good stuff — news, deals & fresh content every month.
      </p>
    </>
  );
}

export default EmailSubscribe;
