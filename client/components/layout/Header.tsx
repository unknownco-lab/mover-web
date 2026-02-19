import { useState } from "react";
import { Link } from "react-router-dom";
import { Activity, ArrowLeft, X, Menu } from "lucide-react";

interface HeaderProps {
  variant?: "main" | "subpage";
}

export default function Header({ variant = "main" }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div
        className={`mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between ${
          variant === "subpage" ? "max-w-4xl" : "max-w-7xl"
        }`}
      >
        <Link
          to="/"
          className="flex items-center gap-2 hover:opacity-80 transition"
        >
          <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center">
            <Activity className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold text-gray-900">Mover</span>
        </Link>

        {variant === "subpage" ? (
          <Link
            to="/"
            className="flex items-center gap-2 text-purple-600 hover:text-purple-700 font-medium transition"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </Link>
        ) : (
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="/#features"
              className="text-gray-700 hover:text-purple-600 transition"
            >
              Features
            </a>
            <a
              href="/#how-it-works"
              className="text-gray-700 hover:text-purple-600 transition"
            >
              How It Works
            </a>
            <a
              href="/#pricing"
              className="text-gray-700 hover:text-purple-600 transition"
            >
              Pricing
            </a>
            <Link
              to="/downloads"
              className="text-gray-700 hover:text-purple-600 transition"
            >
              Downloads
            </Link>
          </nav>
        )}

         {/* Mobile Menu Button */}
         <button
          className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="w-6 h-6 text-gray-900" />
          ) : (
            <Menu className="w-6 h-6 text-gray-900" />
          )}
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <nav className="px-4 py-4 space-y-2 text-right">
            <a
              href="/#features"
              className="block px-4 py-2 text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </a>
            <a
              href="/#how-it-works"
              className="block px-4 py-2 text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition"
              onClick={() => setIsMenuOpen(false)}
            >
              How It Works
            </a>
            <a
              href="/#pricing"
              className="block px-4 py-2 text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </a>
            <Link
              to="/downloads"
              className="block px-4 py-2 text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Downloads
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
