import { ArrowRight, Apple, Monitor, Cpu } from "lucide-react";
import { Link } from "react-router-dom";

export default function Downloads() {
  // Replace these URLs with your actual download links
  const downloads = [
    {
      id: "mac-intel",
      label: "Mac Intel",
      description: "For Intel-based Mac computers",
      icon: Apple,
      url: "https://github.com/unknownco-lab/mover-web/releases/download/v2.0.14/Mover-2.0.14-x64.dmg",
    },
    {
      id: "mac-silicon",
      label: "Mac Silicon (M1/M2/M3)",
      description: "For Apple Silicon Macs",
      icon: Cpu,
      url: "https://github.com/unknownco-lab/mover-web/releases/download/v2.0.14/Mover-2.0.14-arm64.dmg",
    },
    {
      id: "windows",
      label: "Windows",
      description: "For Windows 10 and later",
      icon: Monitor,
      url: "https://github.com/unknownco-lab/mover-web/releases/download/v2.0.14/Mover-2.0.14.Setup.exe",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header/Navigation */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">M</span>
            </div>
            <span className="text-xl font-bold text-gray-900">Mover</span>
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            <Link
              to="/"
              className="text-gray-700 hover:text-purple-600 transition"
            >
              Home
            </Link>
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
            <Link
              to="/downloads"
              className="text-gray-700 hover:text-purple-600 transition"
            >
              Downloads
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-white via-purple-50 to-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute top-0 right-0 -z-10 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 -z-10 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animation-delay-2000"></div>

        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Download{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-purple-500">
              Mover
            </span>
          </h1>

          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose your operating system and download Mover to get started.
            Installation takes less than a minute.
          </p>
        </div>
      </section>

      {/* Downloads Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {downloads.map((download) => {
              const IconComponent = download.icon;
              return (
                <div
                  key={download.id}
                  className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex flex-col"
                >
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-purple-50 rounded-lg flex items-center justify-center mb-4">
                      <IconComponent className="w-8 h-8 text-purple-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {download.label}
                    </h3>
                    <p className="text-gray-600">{download.description}</p>
                  </div>

                  <div className="mt-auto">
                    <a
                      href={download.url}
                      download
                      className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-6 py-3 rounded-lg font-semibold transition-all transform hover:scale-105"
                    >
                      Download
                      <ArrowRight className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-16 bg-blue-50 border border-blue-200 rounded-xl p-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              Need Help?
            </h2>
            <p className="text-gray-700 mb-6">
              If you encounter any issues during installation or have questions about which version to download,
              please check our resources:
            </p>
            <div className="space-y-3">
              <div>
                <Link
                  to="/macos-instructions"
                  className="text-purple-600 hover:text-purple-700 font-semibold inline-flex items-center gap-2"
                >
                  macOS Mouse Control Setup
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <p className="text-sm text-gray-600 mt-1">
                  Step-by-step guide to enable mouse permissions on macOS
                </p>
              </div>
              <div>
                <Link
                  to="/faq"
                  className="text-purple-600 hover:text-purple-700 font-semibold inline-flex items-center gap-2"
                >
                  FAQ Section
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <p className="text-sm text-gray-600 mt-1">
                  Common questions about Mover and installation
                </p>
              </div>
              <div>
                <a
                  href="mailto:support@usemover.com"
                  className="text-purple-600 hover:text-purple-700 font-semibold inline-flex items-center gap-2"
                >
                  Contact Support
                  <ArrowRight className="w-4 h-4" />
                </a>
                <p className="text-sm text-gray-600 mt-1">
                  Get help from our support team
                </p>
              </div>
            </div>
          </div>
        </div>

        
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">M</span>
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
    </div>
  );
}
