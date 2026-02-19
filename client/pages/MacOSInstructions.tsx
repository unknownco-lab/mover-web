import { ArrowRight, AlertCircle } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function MacOSInstructions() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-white via-purple-50 to-white pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="absolute top-0 right-0 -z-10 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>

        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Enable Mouse Control on{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-purple-500">
              macOS
            </span>
          </h1>

          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Follow these simple steps to grant Mover permission to control your mouse on macOS
          </p>
        </div>
      </section>

      {/* Instructions Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          {/* Important Note */}
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-8 mb-12">
            <div className="flex gap-4">
              <AlertCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-lg font-bold text-blue-900 mb-2">
                  Important
                </h2>
                <p className="text-blue-800">
                  macOS requires explicit permission for applications to control your mouse. This is a security feature to protect your system. Mover needs this permission to function properly.
                </p>
              </div>
            </div>
          </div>

          {/* Step-by-Step Instructions */}
          <div className="space-y-8">
            {/* Step 1 */}
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-gradient-to-br from-purple-600 to-purple-700 text-white font-bold text-lg">
                    1
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    Open System Preferences
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Click the Apple menu in the top-left corner of your screen and select
                    <span className="font-semibold"> System Settings</span> (or
                    <span className="font-semibold"> System Preferences</span> on older macOS versions).
                  </p>
                  <div className="bg-gray-100 rounded-lg p-4">
                    <p className="text-sm text-gray-600">
                      <strong>Keyboard shortcut:</strong> Press{" "}
                      <span className="bg-white px-2 py-1 rounded border border-gray-300 font-mono text-xs">
                        Cmd ⌘ + Space
                      </span>{" "}
                      and type "System Settings" then press Enter
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-gradient-to-br from-purple-600 to-purple-700 text-white font-bold text-lg">
                    2
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    Navigate to Privacy & Security
                  </h3>
                  <p className="text-gray-700 mb-4">
                    In the sidebar, scroll down and click on{" "}
                    <span className="font-semibold">Privacy & Security</span>.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-gradient-to-br from-purple-600 to-purple-700 text-white font-bold text-lg">
                    3
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    Find Accessibility Settings
                  </h3>
                  <p className="text-gray-700 mb-4">
                    In the Privacy & Security panel, look for{" "}
                    <span className="font-semibold">Accessibility</span> in the list on the left side.
                    Click on it.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-gradient-to-br from-purple-600 to-purple-700 text-white font-bold text-lg">
                    4
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    Add Mover to the Allowed Apps
                  </h3>
                  <p className="text-gray-700 mb-4">
                    On the right side, you'll see a list of applications. Look for{" "}
                    <span className="font-semibold">Mover</span> in the list. If it's already there,
                    make sure the checkbox next to it is
                    <span className="font-semibold"> checked (enabled)</span>.
                  </p>
                  <p className="text-gray-700">
                    If Mover is not in the list, click the{" "}
                    <span className="font-semibold">+ (plus) button</span> at the bottom and navigate
                    to your Applications folder. Select Mover and click Open.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 5 */}
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-gradient-to-br from-purple-600 to-purple-700 text-white font-bold text-lg">
                    5
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    Verify and Test
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Close System Settings and launch Mover. The application should now have
                    permission to control your mouse.
                  </p>
                  <p className="text-gray-700">
                    Try starting Mover—you should see your mouse moving according to your configured
                    settings.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Troubleshooting Section */}
          <div className="mt-16 bg-purple-50 rounded-xl p-8 border border-purple-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Troubleshooting
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Mover is not moving the mouse
                </h3>
                <p className="text-gray-700 mb-3">
                  Make sure Mover appears in the Accessibility list and is enabled. If it's not there:
                </p>
                <ul className="space-y-2 ml-4">
                  <li className="flex gap-3">
                    <span className="text-purple-600 font-bold">•</span>
                    <span className="text-gray-700">
                      Quit Mover completely (use Cmd ⌘ + Q)
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-purple-600 font-bold">•</span>
                    <span className="text-gray-700">
                      Open System Settings → Privacy & Security → Accessibility
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-purple-600 font-bold">•</span>
                    <span className="text-gray-700">
                      Click the + button and add Mover from Applications
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-purple-600 font-bold">•</span>
                    <span className="text-gray-700">
                      Launch Mover again
                    </span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  I don't see an Accessibility option
                </h3>
                <p className="text-gray-700">
                  This might happen on very new macOS versions. Look for "App Management" or "Accessibility"
                  in the Privacy & Security settings. If you're still having issues,{" "}
                  <a
                    href="mailto:support@usemover.com"
                    className="text-purple-600 hover:text-purple-700 font-semibold"
                  >
                    contact our support team
                  </a>
                  .
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Permission still not working after enabling
                </h3>
                <p className="text-gray-700 mb-3">
                  Try restarting your Mac. Sometimes macOS needs a restart to fully apply permission changes.
                </p>
              </div>
            </div>
          </div>

          {/* Help Section */}
          <div className="mt-16 bg-blue-50 rounded-xl p-8 border border-blue-200">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              Still Need Help?
            </h2>
            <p className="text-gray-700 mb-6">
              If you're still experiencing issues or have questions about the permission process,
              we're here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="mailto:support@usemover.com"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-6 py-3 rounded-lg font-semibold transition-all"
              >
                Contact Support
                <ArrowRight className="w-5 h-5" />
              </a>
              <Link
                to="/faq"
                className="inline-flex items-center justify-center gap-2 bg-purple-100 hover:bg-purple-200 text-purple-700 px-6 py-3 rounded-lg font-semibold transition-all"
              >
                View FAQ
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
