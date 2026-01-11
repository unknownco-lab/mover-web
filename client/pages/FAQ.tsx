import { Link } from "react-router-dom";
import { Activity, ArrowLeft } from "lucide-react";

export default function FAQ() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-2 hover:opacity-80 transition"
          >
            <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center">
              <Activity className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">Mover</span>
          </Link>
          <Link
            to="/"
            className="flex items-center gap-2 text-purple-600 hover:text-purple-700 font-medium transition"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <article className="prose prose-lg max-w-none">
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-gray-600">
              Find answers to common questions about Mover
            </p>
          </div>

          {/* General Questions */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              General Questions
            </h2>

            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                What is Mover?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Mover is a productivity tool that keeps your computer active
                during legitimate work scenarios by simulating natural mouse
                movements. It prevents screen locks, system timeouts, and
                disconnections during presentations, long-running processes,
                remote work sessions, and other professional activities.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                How much does Mover cost?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Mover is available for a one-time payment of $4.99. This gives
                you a lifetime license with no subscriptions, no recurring fees,
                and includes all future updates.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                What platforms does Mover support?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Mover works on Windows, macOS, and Linux. We provide native
                versions optimized for each operating system.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Do I need an internet connection to use Mover?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                No. After initial license validation, Mover operates entirely
                offline. All processing happens locally on your device, and no
                data about your activity is transmitted anywhere.
              </p>
            </div>
          </section>

          {/* Installation & Setup */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Installation & Setup
            </h2>

            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                How do I install Mover?
              </h3>
              <ol className="list-decimal list-inside space-y-2 text-gray-700 ml-2">
                <li>Purchase and download Mover from our website</li>
                <li>Run the installer for your operating system</li>
                <li>Follow the on-screen installation prompts</li>
                <li>Enter your license key when prompted</li>
                <li>Launch Mover and configure your preferred settings</li>
              </ol>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Can I install Mover on multiple devices?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Your license allows installation on devices you personally own
                and control. The specific number depends on your license type -
                check your purchase confirmation for details.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                How do I update Mover?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Updates are automatic for most users. You can also manually
                check for updates in the application settings. All updates are
                included free with your lifetime license.
              </p>
            </div>
          </section>

          {/* Features & Usage */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Features & Usage
            </h2>

            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                What movement patterns are available?
              </h3>
              <p className="text-gray-700 mb-3">
                Mover offers several natural movement patterns:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-2">
                <li>
                  <strong>Circular</strong> - Smooth circular movements
                </li>
                <li>
                  <strong>Random</strong> - Unpredictable, natural-looking
                  movements
                </li>
                <li>
                  <strong>Figure-8</strong> - Infinity symbol pattern
                </li>
                <li>
                  <strong>Linear</strong> - Back-and-forth movements
                </li>
                <li>
                  <strong>Minimal</strong> - Tiny, subtle movements
                </li>
              </ul>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                How do I customize the movement settings?
              </h3>
              <p className="text-gray-700 mb-3">
                In the Mover interface, you can adjust:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-2">
                <li>
                  <strong>Movement Pattern</strong> - Choose from circular,
                  random, figure-8, and more
                </li>
                <li>
                  <strong>Interval</strong> - Set frequency from 1-60 seconds
                  between movements
                </li>
                <li>
                  <strong>Distance</strong> - Control movement radius from
                  10-500 pixels
                </li>
                <li>
                  <strong>Speed</strong> - Adjust how quickly the cursor moves
                </li>
              </ul>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Will Mover interfere with my actual mouse movements?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                No. Mover only activates when your mouse is idle for the
                specified interval. If you move your mouse yourself, Mover
                resets its timer and waits for the next idle period.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Can I pause Mover temporarily?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Yes. Mover includes a pause/resume button so you can quickly
                disable it when not needed. You can also set it to start paused
                by default.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Does Mover work while I'm using other applications?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Yes. Mover runs in the background and works regardless of which
                applications you're using. It's designed to be unobtrusive and
                resource-efficient.
              </p>
            </div>
          </section>

          {/* Legitimate Use Cases */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Legitimate Use Cases
            </h2>

            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                What are legitimate reasons to use Mover?
              </h3>
              <p className="text-gray-700 mb-3 font-semibold">
                Common professional scenarios include:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-2">
                <li>
                  <strong>Long-running processes</strong> - Keeping your system
                  active during builds, data analysis, or rendering
                </li>
                <li>
                  <strong>Presentations & meetings</strong> - Preventing screen
                  locks during video calls or screen sharing
                </li>
                <li>
                  <strong>Remote work</strong> - Maintaining active sessions
                  during brief, legitimate breaks
                </li>
                <li>
                  <strong>Development & testing</strong> - Keeping connections
                  alive during debugging or testing cycles
                </li>
                <li>
                  <strong>Multiple environments</strong> - Keeping your local
                  machine active while working on remote desktops or VMs
                </li>
                <li>
                  <strong>Accessibility</strong> - Reducing physical strain from
                  constant mouse movement requirements
                </li>
              </ul>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Can I use Mover while working from home?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Yes, as long as you're using it for legitimate work activities
                and it complies with your employer's policies. Many remote
                workers use Mover to prevent disconnections during video calls
                or to maintain system activity during legitimate breaks without
                losing their session.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Is Mover appropriate for developers?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Absolutely. Many developers use Mover to keep their systems
                active during long compilation times, test runs, or when running
                continuous integration processes that require an active session.
              </p>
            </div>
          </section>

          {/* Policy & Compliance */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Policy & Compliance
            </h2>

            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Will using Mover violate my company's policies?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                We cannot answer this for your specific workplace. You are
                responsible for understanding and complying with your employer's
                policies. Some companies may prohibit tools like Mover, while
                others may allow them for legitimate productivity purposes. When
                in doubt, ask your IT department or HR representative.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Is Mover designed to help me cheat my employer?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                No. Mover is designed for legitimate productivity scenarios
                where you need your system to remain active. Using it to
                misrepresent work activity or hours is a violation of our Terms
                of Service and potentially a violation of your employment
                agreement and applicable laws.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                What if my employer asks me about it?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Be honest. Explain that you use Mover for legitimate purposes
                such as preventing screen locks during presentations,
                maintaining connections during long processes, or staying
                connected during brief breaks. Transparency is always the best
                policy.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Can I get in trouble for using Mover?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                If you use Mover to violate your employer's policies,
                misrepresent your work activity, or engage in time theft, you
                could face consequences including termination. Always use Mover
                responsibly and in compliance with applicable policies and laws.
              </p>
            </div>
          </section>

          {/* Privacy & Security */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Privacy & Security
            </h2>

            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Does Mover collect any data about me?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Mover operates entirely locally on your device. We do not
                collect, transmit, or store information about your mouse
                movements, work activity, or system usage. Optional anonymized
                crash reports and usage statistics can be enabled, but these
                contain no personal or identifying information.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Is Mover safe to use?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Yes. Mover is lightweight, uses minimal system resources, and
                does not contain malware, spyware, or adware. All processing
                happens on your local machine with no external connections
                required during normal operation.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Will antivirus software flag Mover?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Some antivirus programs may flag any software that simulates
                mouse movements as potentially unwanted. This is a false
                positive. Mover is safe and contains no malicious code. You may
                need to add an exception in your antivirus software.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Can my employer detect that I'm using Mover?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Mover uses natural movement patterns designed to be
                indistinguishable from normal user activity. However,
                sophisticated monitoring systems may detect patterns or unusual
                activity. We strongly recommend using Mover only for legitimate
                purposes and in compliance with workplace policies.
              </p>
            </div>
          </section>

          {/* Technical Questions */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Technical Questions
            </h2>

            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                How much system resources does Mover use?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Mover is extremely lightweight, typically using less than 50MB
                of RAM and negligible CPU resources. It's designed to run
                continuously without impacting your computer's performance.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Does Mover work with multiple monitors?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Yes. Mover works seamlessly with single or multiple monitor
                setups. You can configure which monitor the movements occur on
                if needed.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Will Mover work if my computer is locked?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                No. Mover is designed to prevent your computer from locking, but
                once the system is already locked, it cannot unlock it or
                operate through the lock screen.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Can Mover prevent my computer from going to sleep?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Mover prevents idle-based sleep/screensaver activation by
                keeping the system active. However, it does not override manual
                sleep commands or low battery sleep modes.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Does Mover work over remote desktop connections?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Yes, but results may vary depending on your remote desktop
                configuration. Mover is most effective when running on the local
                machine you're physically using.
              </p>
            </div>
          </section>

          {/* Purchasing & Licensing */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Purchasing & Licensing
            </h2>

            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                What payment methods do you accept?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                We accept major credit cards, debit cards, and PayPal through
                our secure payment processor.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Is my payment information secure?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Yes. We use industry-standard payment processors and do not
                store your payment information on our servers.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Will I receive a receipt?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Yes. You'll receive an email receipt immediately after purchase
                with your license key and download instructions.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                What is your refund policy?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                We offer refunds within 14 days of purchase if the software
                fails to function as described due to technical issues. Refunds
                are not available for user error, policy violations, workplace
                consequences, or buyer's remorse. See our Terms of Service for
                complete details.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                I lost my license key. How do I recover it?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Contact us at{" "}
                <a
                  href="mailto:i.am.unknownco@gmail.com"
                  className="text-purple-600 hover:text-purple-700"
                >
                  i.am.unknownco@gmail.com
                </a>{" "}
                with your purchase email address, and we'll resend your license
                key.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Can I transfer my license to someone else?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                No. Licenses are non-transferable and tied to the original
                purchaser.
              </p>
            </div>
          </section>

          {/* Troubleshooting */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Troubleshooting
            </h2>

            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Mover isn't moving my mouse. What's wrong?
              </h3>
              <p className="text-gray-700 mb-3">Check the following:</p>
              <ol className="list-decimal list-inside space-y-2 text-gray-700 ml-2">
                <li>Ensure Mover is running (check system tray)</li>
                <li>Verify it's not paused</li>
                <li>Check that your interval setting isn't too long</li>
                <li>
                  Confirm you've granted necessary permissions (on macOS,
                  accessibility permissions are required)
                </li>
                <li>Try restarting Mover</li>
              </ol>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                The movements seem jerky or unnatural. How do I fix this?
              </h3>
              <p className="text-gray-700 mb-3">
                Try adjusting these settings:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-2">
                <li>Reduce the movement distance</li>
                <li>Increase the movement speed</li>
                <li>
                  Switch to a different pattern (circular or figure-8 tend to be
                  smoothest)
                </li>
                <li>
                  Lower the interval time for more frequent, smaller movements
                </li>
              </ul>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Mover won't start on my Mac. Help?
              </h3>
              <p className="text-gray-700 mb-3">
                On macOS, you need to grant Mover accessibility permissions:
              </p>
              <ol className="list-decimal list-inside space-y-2 text-gray-700 ml-2">
                <li>Go to System Preferences → Security & Privacy → Privacy</li>
                <li>Select "Accessibility" from the left sidebar</li>
                <li>Click the lock to make changes</li>
                <li>Add Mover to the list and check the box next to it</li>
                <li>Restart Mover</li>
              </ol>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                How do I completely uninstall Mover?
              </h3>
              <div className="text-gray-700 space-y-2">
                <p>
                  <strong>Windows:</strong> Use "Add or Remove Programs" in
                  Settings
                </p>
                <p>
                  <strong>macOS:</strong> Drag Mover to Trash and empty Trash
                </p>
                <p>
                  <strong>Linux:</strong> Use your package manager or delete the
                  application folder
                </p>
              </div>
            </div>
          </section>

          {/* Support & Contact */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Support & Contact
            </h2>

            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                How do I contact support?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Email us at{" "}
                <a
                  href="mailto:i.am.unknownco@gmail.com"
                  className="text-purple-600 hover:text-purple-700"
                >
                  i.am.unknownco@gmail.com
                </a>{" "}
                with your question or issue. Include your license key and
                operating system details for faster assistance.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Do you offer technical support?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Yes. We provide email support for all licensed users. Response
                times are typically within 24-48 hours on business days.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Where can I submit feature requests?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                We love hearing from users! Email your suggestions to{" "}
                <a
                  href="mailto:i.am.unknownco@gmail.com"
                  className="text-purple-600 hover:text-purple-700"
                >
                  i.am.unknownco@gmail.com
                </a>{" "}
                with "Feature Request" in the subject line.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Is there a user community or forum?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                We're working on building a community space for Mover users.
                Check our website for updates.
              </p>
            </div>
          </section>

          {/* Ethical Use */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Ethical Use
            </h2>

            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                What is Mover's position on workplace ethics?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                We believe in transparency and honesty in professional
                relationships. Mover is a tool designed for legitimate
                productivity needs, not for deception. Users should always
                comply with their employer's policies and use the software
                ethically.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Why did you create this tool if it could be misused?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Like any tool, Mover can be used appropriately or
                inappropriately. A hammer can build a house or break a window -
                the responsibility lies with the user. We created Mover to solve
                real productivity problems, and we trust our users to make
                ethical decisions.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                What happens if I use Mover inappropriately?
              </h3>
              <p className="text-gray-700 mb-3">
                Using Mover to violate workplace policies, misrepresent work
                activity, or engage in fraud is:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-2 mb-4">
                <li>A violation of our Terms of Service</li>
                <li>Potentially grounds for termination from your employer</li>
                <li>Possibly illegal depending on your jurisdiction</li>
                <li>Something we explicitly do not support or condone</li>
              </ul>
              <p className="text-gray-700">
                We may terminate licenses for users who violate our Terms of
                Service.
              </p>
            </div>
          </section>

          {/* Still Have Questions */}
          <section className="mb-12">
            <div className="bg-purple-50 border-l-4 border-purple-600 p-6 rounded">
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                Still Have Questions?
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If your question isn't answered here, please contact us at{" "}
                <a
                  href="mailto:i.am.unknownco@gmail.com"
                  className="text-purple-600 hover:text-purple-700 font-semibold"
                >
                  i.am.unknownco@gmail.com
                </a>
                . We're happy to help!
              </p>
              <p className="text-sm text-gray-600">
                <strong>Last Updated:</strong> January 10, 2026
              </p>
            </div>
          </section>
        </article>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12 px-4 sm:px-6 lg:px-8 mt-16">
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
                  <Link
                    to="/#features"
                    className="hover:text-purple-400 transition"
                  >
                    Features
                  </Link>
                </li>
                <li>
                  <Link
                    to="/#how-it-works"
                    className="hover:text-purple-400 transition"
                  >
                    How It Works
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="mailto:i.am.unknownco@gmail.com"
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
