import { Link } from "react-router-dom";
import DefaultButton from "../components/buttons/DefaultButton";

function ErrorPage() {
  return (
    <div className="h-[600px] w-full flex items-center justify-center px-6">
      <div className="text-center max-w-xl space-y-6 font-inter">
        <div className="text-8xl font-bold text-row2prim animate-bounce drop-shadow-lg">
          404
        </div>
        <h1 className="text-3xl sm:text-4xl font-semibold text-row2prim">
          You’ve wandered off the map...
        </h1>
        <p className="text-gray-700 text-lg">
          This page doesn’t exist — or maybe it just needed a break. Happens to
          the best of us.
        </p>
        <Link to="/">
          <DefaultButton size="lg">Back to Home</DefaultButton>
        </Link>
        <div className="flex justify-center gap-2 text-sm text-row7sec mt-8 italic">
          <span className="animate-pulse">←</span>
          <span>Lost, but not forgotten.</span>
        </div>
      </div>
    </div>
  );
}

export default ErrorPage;
