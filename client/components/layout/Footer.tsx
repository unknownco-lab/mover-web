import { Link } from "react-router-dom";
import { Activity } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Activity className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Mover</span>
            </div>
            <p className="text-sm">
              Keep your system active with intelligent movement.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-purple-400 transition">
                  Home
                </Link>
              </li>
              <li>
                <a
                  href="/#features"
                  className="hover:text-purple-400 transition"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="/#how-it-works"
                  className="hover:text-purple-400 transition"
                >
                  How It Works
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="mailto:support@usemover.com"
                  className="hover:text-purple-400 transition"
                >
                  Email Support
                </a>
              </li>
              <li>
                <Link to="/faq" className="hover:text-purple-400 transition">
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  to="/downloads"
                  className="hover:text-purple-400 transition"
                >
                  Downloads
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/terms"
                  className="hover:text-purple-400 transition"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <p className="text-center text-sm text-gray-500">
            © 2026 Mover. All rights reserved. | Made with{" "}
            <span className="text-purple-400">♥</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
