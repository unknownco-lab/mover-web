import { ArrowRight, Apple, Monitor, Cpu } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function Downloads() {
  // Replace these URLs with your actual download links
  const downloads = [
    {
      id: "mac-intel",
      label: "MacOS",
      description: "For MacOS computers",
      icon: Apple,
      url: "https://github.com/unknownco-lab/mover-web/releases/download/v2.0.18/Mover-2.0.18-x64.dmg",
    },
    // {
    //   id: "mac-silicon",
    //   label: "Mac Silicon (M1/M2/M3)",
    //   description: "For Apple Silicon Macs",
    //   icon: Cpu,
    //   url: "https://github.com/unknownco-lab/mover-web/releases/download/v2.0.14/Mover-2.0.14-arm64.dmg",
    // },
    {
      id: "windows",
      label: "Windows PC",
      description: "For Windows 10 and later",
      icon: Monitor,
      url: "https://github.com/unknownco-lab/mover-web/releases/download/v2.0.18/Mover-2.0.18.Setup.exe",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

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
          <div className="grid md:grid-cols-2 gap-8">
            {downloads.map((download) => {
              const IconComponent = download.icon;
              return (
                <div
                  key={download.id}
                  className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex flex-col"
                >
                  <div className="mb-6 flex flex-col items-center justify-center">
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
                  to="/instructions"
                  className="text-purple-600 hover:text-purple-700 font-semibold inline-flex items-center gap-2"
                >
                  Platform Setup Guide
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <p className="text-sm text-gray-600 mt-1">
                  Step-by-step setup for macOS and Windows
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

      <Footer />
    </div>
  );
}
