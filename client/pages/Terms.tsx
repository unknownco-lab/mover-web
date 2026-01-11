import { Link } from "react-router-dom";
import { Activity, ArrowLeft } from "lucide-react";

export default function Terms() {
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
              Terms of Service
            </h1>
            <div className="flex flex-col sm:flex-row gap-4 text-sm text-gray-600">
              <span>
                <strong>Effective Date:</strong> January 10, 2026
              </span>
              <span>
                <strong>Last Updated:</strong> January 10, 2026
              </span>
            </div>
          </div>

          {/* Section 1 */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              1. Acceptance of Terms
            </h2>
            <p className="text-gray-700 leading-relaxed">
              By purchasing, downloading, installing, or using Mover ("the
              Software"), you agree to be bound by these Terms of Service
              ("Terms"). If you do not agree to these Terms, do not use the
              Software.
            </p>
          </div>

          {/* Section 2 */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              2. License Grant
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Subject to your compliance with these Terms, we grant you a
              limited, non-exclusive, non-transferable, revocable license to
              install and use the Software on devices you own or control for
              legitimate productivity purposes.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              License Restrictions
            </h3>
            <p className="text-gray-700 mb-3">You may not:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-2 mb-4">
              <li>Redistribute, sell, lease, or sublicense the Software</li>
              <li>Reverse engineer, decompile, or disassemble the Software</li>
              <li>Remove or modify any proprietary notices or labels</li>
              <li>
                Use the Software in any manner that violates applicable laws or
                regulations
              </li>
              <li>
                Share your license with others or use it on more devices than
                permitted
              </li>
            </ul>
          </div>

          {/* Section 3 */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              3. Intended Use and User Responsibility
            </h2>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Legitimate Use Cases
            </h3>
            <p className="text-gray-700 mb-3">
              The Software is designed exclusively for legitimate productivity
              scenarios, including but not limited to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-2 mb-6">
              <li>
                Maintaining system activity during long-running computational
                processes, builds, or data analysis
              </li>
              <li>
                Preventing screen locks during presentations, video calls, or
                screen sharing sessions
              </li>
              <li>
                Supporting remote work flexibility during brief, legitimate
                breaks
              </li>
              <li>
                Reducing repetitive physical strain while maintaining system
                activity
              </li>
              <li>
                Keeping host systems active while working across remote desktop
                sessions, virtual machines, or other environments
              </li>
              <li>
                Maintaining connections during development, testing, or
                debugging sessions
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Prohibited Uses
            </h3>
            <p className="text-gray-700 mb-3">
              You agree NOT to use the Software to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-2 mb-6">
              <li>Misrepresent your work activity or hours to employers</li>
              <li>
                Circumvent time-tracking or monitoring systems in bad faith
              </li>
              <li>
                Violate your employment agreement, workplace policies, or
                contractual obligations
              </li>
              <li>Engage in time theft or fraud</li>
              <li>
                Violate any applicable local, state, national, or international
                law
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              User Responsibility
            </h3>
            <p className="text-gray-700 mb-3 font-semibold">
              You are solely responsible for:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-2 mb-4">
              <li>
                Ensuring your use of the Software complies with all applicable
                laws and regulations
              </li>
              <li>
                Ensuring your use complies with your employer's policies and
                your employment agreement
              </li>
              <li>
                Any consequences resulting from your use or misuse of the
                Software
              </li>
              <li>
                Determining whether the Software is appropriate for your
                specific situation
              </li>
            </ul>
            <p className="text-gray-700 font-semibold">
              We explicitly disclaim any responsibility for how you choose to
              use the Software.
            </p>
          </div>

          {/* Section 4 */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              4. No Warranty
            </h2>
            <p className="text-gray-700 leading-relaxed font-semibold mb-4">
              THE SOFTWARE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT
              WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT
              NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
              PARTICULAR PURPOSE, OR NON-INFRINGEMENT.
            </p>
            <p className="text-gray-700 mb-3">We do not warrant that:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-2">
              <li>The Software will meet your specific requirements</li>
              <li>
                The Software will be uninterrupted, timely, secure, or
                error-free
              </li>
              <li>
                The results obtained from using the Software will be accurate or
                reliable
              </li>
              <li>Any errors in the Software will be corrected</li>
            </ul>
          </div>

          {/* Section 5 */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              5. Limitation of Liability
            </h2>
            <p className="text-gray-700 leading-relaxed font-semibold mb-4">
              TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT
              SHALL WE BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL,
              CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS,
              REVENUE, DATA, OR USE, WHETHER IN AN ACTION IN CONTRACT, TORT, OR
              OTHERWISE, ARISING OUT OF OR IN CONNECTION WITH YOUR USE OF THE
              SOFTWARE, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH
              DAMAGES.
            </p>
            <p className="text-gray-700 leading-relaxed font-semibold mb-4">
              OUR TOTAL LIABILITY TO YOU FOR ALL CLAIMS ARISING FROM OR RELATING
              TO THE SOFTWARE SHALL NOT EXCEED THE AMOUNT YOU PAID FOR THE
              SOFTWARE LICENSE.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Specific Disclaimers
            </h3>
            <p className="text-gray-700 mb-3">We are not liable for:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-2">
              <li>
                Employment termination, disciplinary action, or workplace
                consequences resulting from your use of the Software
              </li>
              <li>
                Legal consequences arising from improper or unauthorized use
              </li>
              <li>Violations of third-party policies or agreements</li>
              <li>Loss of data, work, or productivity</li>
              <li>
                Any damages resulting from detection or discovery of your use of
                the Software
              </li>
            </ul>
          </div>

          {/* Section 6 */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              6. Payment and Refunds
            </h2>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Payment Terms
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-2 mb-6">
              <li>The Software is sold for a one-time fee of $4.99 USD</li>
              <li>
                Payment is processed through secure third-party payment
                processors
              </li>
              <li>All sales are final</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Refund Policy
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-2">
              <li>
                Refunds may be issued at our sole discretion within 14 days of
                purchase
              </li>
              <li>
                Refunds are only available if the Software fails to function as
                described due to technical issues
              </li>
              <li>
                Refunds will not be issued due to user error, policy violations,
                workplace consequences, or buyer's remorse
              </li>
              <li>
                To request a refund, contact us with your purchase details and
                reason for the request
              </li>
            </ul>
          </div>

          {/* Section 7 */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              7. Privacy and Data Collection
            </h2>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Local Processing
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-2 mb-6">
              <li>
                All Software functionality operates locally on your device
              </li>
              <li>
                We do not collect, transmit, or store information about your
                mouse movements or system activity
              </li>
              <li>
                The Software does not connect to external servers during normal
                operation
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Limited Data Collection
            </h3>
            <p className="text-gray-700 mb-3">
              We may collect minimal, anonymized data for:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-2 mb-4">
              <li>License validation</li>
              <li>Crash reporting and error diagnostics (if you opt in)</li>
              <li>Usage statistics to improve the Software (if you opt in)</li>
            </ul>
            <p className="text-gray-700">
              For complete details, please review our Privacy Policy.
            </p>
          </div>

          {/* Section 8 */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              8. Updates and Modifications
            </h2>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Software Updates
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-2 mb-6">
              <li>
                We may release updates, patches, or new versions of the Software
              </li>
              <li>Updates may be automatic or require manual installation</li>
              <li>
                We reserve the right to discontinue support for older versions
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Terms Modifications
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-2">
              <li>We reserve the right to modify these Terms at any time</li>
              <li>
                Continued use of the Software after changes constitutes
                acceptance of modified Terms
              </li>
              <li>
                Material changes will be communicated through the Software or
                our website
              </li>
            </ul>
          </div>

          {/* Section 9 */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              9. Termination
            </h2>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Termination by You
            </h3>
            <p className="text-gray-700 mb-6">
              You may stop using the Software at any time by uninstalling it
              from your devices.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Termination by Us
            </h3>
            <p className="text-gray-700 mb-3">
              We may terminate or suspend your license immediately, without
              prior notice, if you:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-2 mb-6">
              <li>Breach these Terms</li>
              <li>Use the Software for prohibited purposes</li>
              <li>Engage in fraudulent or illegal activity</li>
            </ul>
            <p className="text-gray-700 mb-3">Upon termination:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-2">
              <li>Your license to use the Software immediately ceases</li>
              <li>You must uninstall the Software from all devices</li>
              <li>No refunds will be issued for violations of these Terms</li>
            </ul>
          </div>

          {/* Section 10 */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              10. Intellectual Property
            </h2>
            <p className="text-gray-700 leading-relaxed">
              The Software, including all code, design, graphics, documentation,
              and related materials, is protected by copyright and other
              intellectual property laws. All rights not explicitly granted in
              these Terms are reserved.
            </p>
          </div>

          {/* Section 11 */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              11. Third-Party Services
            </h2>
            <p className="text-gray-700 leading-relaxed">
              The Software may interact with third-party services (e.g., payment
              processors). Your use of such services is governed by their
              respective terms and privacy policies. We are not responsible for
              third-party services.
            </p>
          </div>

          {/* Section 12 */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              12. Indemnification
            </h2>
            <p className="text-gray-700 leading-relaxed">
              You agree to indemnify, defend, and hold us harmless from any
              claims, damages, losses, liabilities, and expenses (including
              reasonable attorneys' fees) arising from:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-2 mt-3">
              <li>Your use or misuse of the Software</li>
              <li>Your violation of these Terms</li>
              <li>
                Your violation of any applicable laws or third-party rights
              </li>
              <li>
                Employment disputes or workplace consequences related to your
                use of the Software
              </li>
            </ul>
          </div>

          {/* Section 13 */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              13. Governing Law and Dispute Resolution
            </h2>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Governing Law
            </h3>
            <p className="text-gray-700 mb-6">
              These Terms shall be governed by and construed in accordance with
              the laws of the United States, without regard to conflict of law
              principles.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Dispute Resolution
            </h3>
            <p className="text-gray-700 mb-3">
              Any disputes arising from these Terms or your use of the Software
              shall be resolved through:
            </p>
            <ol className="list-decimal list-inside space-y-2 text-gray-700 ml-2 mb-6">
              <li>Good faith negotiation between the parties</li>
              <li>
                If negotiation fails, binding arbitration in the United States
              </li>
              <li>
                Each party bears their own costs unless otherwise awarded by the
                arbitrator
              </li>
            </ol>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Class Action Waiver
            </h3>
            <p className="text-gray-700">
              You agree to resolve disputes individually and waive the right to
              participate in class actions, class arbitrations, or
              representative proceedings.
            </p>
          </div>

          {/* Section 14 */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              14. Severability
            </h2>
            <p className="text-gray-700 leading-relaxed">
              If any provision of these Terms is found to be unenforceable or
              invalid, that provision shall be limited or eliminated to the
              minimum extent necessary, and the remaining provisions shall
              remain in full force and effect.
            </p>
          </div>

          {/* Section 15 */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              15. Entire Agreement
            </h2>
            <p className="text-gray-700 leading-relaxed">
              These Terms, together with our Privacy Policy, constitute the
              entire agreement between you and us regarding the Software and
              supersede all prior agreements and understandings.
            </p>
          </div>

          {/* Section 16 */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              16. Contact Information
            </h2>
            <p className="text-gray-700 mb-4">
              For questions about these Terms, please contact us at:
            </p>
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 text-gray-700">
              <p>
                <strong>Email:</strong>{" "}
                <a
                  href="mailto:i.am.unknownco@gmail.com"
                  className="text-purple-600 hover:text-purple-700"
                >
                  i.am.unknownco@gmail.com
                </a>
              </p>
            </div>
          </div>

          {/* Section 17 */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              17. Acknowledgment
            </h2>
            <div className="bg-purple-50 border-l-4 border-purple-600 p-4">
              <p className="text-gray-700 leading-relaxed">
                BY USING THE SOFTWARE, YOU ACKNOWLEDGE THAT:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-2 mt-3">
                <li>You have read and understood these Terms</li>
                <li>
                  You agree to use the Software only for legitimate productivity
                  purposes
                </li>
                <li>
                  You are responsible for compliance with all applicable laws
                  and policies
                </li>
                <li>You understand the risks associated with improper use</li>
                <li>
                  No refunds will be issued for workplace consequences or policy
                  violations
                </li>
              </ul>
            </div>
          </div>

          {/* Signature */}
          <div className="border-t border-gray-200 pt-8 mt-12">
            <p className="text-gray-700 leading-relaxed font-semibold">
              By installing or using Mover, you confirm that you have read,
              understood, and agree to be bound by these Terms of Service.
            </p>
          </div>
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
                <li>
                  <Link
                    to="/#pricing"
                    className="hover:text-purple-400 transition"
                  >
                    Pricing
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
                  <Link
                    to="/terms"
                    className="hover:text-purple-400 transition"
                  >
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="#privacy"
                    className="hover:text-purple-400 transition"
                  >
                    Privacy Policy
                  </a>
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
