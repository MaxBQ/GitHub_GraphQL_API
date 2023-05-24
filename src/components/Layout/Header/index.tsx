import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="w-full bg-slate-700 h-24 border-b border-slate-500 sticky top-0">
      <div className="container h-full mx-auto flex items-center  justify-between">
        <Link to="/">Home</Link>
        <Link to="/repository">repository</Link>
      </div>
    </header>
  );
};
