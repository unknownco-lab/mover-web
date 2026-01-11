import { ArrowRight, Activity, Zap, Settings, Smartphone } from "lucide-react";
import { Link } from "react-router-dom";

export default function Index() {
  const stripeCheckoutUrl = "https://buy.stripe.com/test_5kQ8wP5ZwgNm1e2eUe5Vu00"; // Replace with your actual Stripe checkout URL

  return (
    <div className="min-h-screen bg-white">
      {/* Header/Navigation */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center">
              <Activity className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">Mover</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-gray-700 hover:text-purple-600 transition">
              Features
            </a>
            <a href="#how-it-works" className="text-gray-700 hover:text-purple-600 transition">
              How It Works
            </a>
            <a href="#pricing" className="text-gray-700 hover:text-purple-600 transition">
              Pricing
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-white via-purple-50 to-white pt-20 pb-32 px-4 sm:px-6 lg:px-8">
        <div className="absolute top-0 right-0 -z-10 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 -z-10 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animation-delay-2000"></div>

        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full mb-8">
            <div className="relative w-2 h-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
            </div>
            <span className="text-sm font-medium">Keep your system active, always</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Never Let Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-purple-500">System Sleep</span> Again
          </h1>

          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Mover is a lightweight application that keeps your system active with natural, configurable movement patterns. Perfect for presentations, long work sessions, or <span className="font-bold">when you need your PC to stay responsive</span>.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href={stripeCheckoutUrl}
              target="_blank"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105 shadow-lg"
            >
              Get Mover Now
              <ArrowRight className="w-5 h-5" />
            </a>
            <button
              onClick={() => document.getElementById("features")?.scrollIntoView({ behavior: "smooth" })}
              className="inline-flex items-center justify-center gap-2 bg-purple-100 hover:bg-purple-200 text-purple-700 px-8 py-4 rounded-lg font-semibold transition-all"
            >
              Learn More
            </button>
          </div>

          <div className="grid grid-cols-3 gap-4 text-center text-sm">
            <div>
              <div className="text-2xl font-bold text-purple-600">100%</div>
              <div className="text-gray-600">Lightweight</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-purple-600">∞</div>
              <div className="text-gray-600">Always Active</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-purple-600">∞</div>
              <div className="text-gray-600">Customizable</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Powerful Features</h2>
            <p className="text-xl text-gray-600">Everything you need to keep your system active</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Configurable Movement Patterns</h3>
              <p className="text-gray-600">Choose from multiple movement patterns including random movement, circular motion, and custom patterns. Adjust the frequency and distance to match your needs.</p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Settings className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Easy Configuration</h3>
              <p className="text-gray-600">Intuitive settings panel to customize movement intervals, distances, and patterns. Start with one click and adjust on the fly.</p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Activity className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">System Status Indicator</h3>
              <p className="text-gray-600">Real-time status indicator shows when Mover is active. See movement interval, distance, and pattern configuration at a glance.</p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Smartphone className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Lightweight & Unobtrusive</h3>
              <p className="text-gray-600">Minimal system resource usage. Runs quietly in the background without interfering with your work or gaming.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How Mover Works</h2>
            <p className="text-xl text-gray-600">Get started in three simple steps</p>
          </div>

          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-gradient-to-br from-purple-600 to-purple-700 text-white font-bold text-lg">
                  1
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Download & Install</h3>
                <p className="text-lg text-gray-600">Get Mover from our secure checkout. Installation takes less than a minute on Windows, macOS, or Linux.</p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-gradient-to-br from-purple-600 to-purple-700 text-white font-bold text-lg">
                  2
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Configure Your Settings</h3>
                <p className="text-lg text-gray-600">Choose your preferred movement pattern, set the interval (1s to 60s), and adjust the distance (10px to 200px). Or use the default settings for immediate protection.</p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-gradient-to-br from-purple-600 to-purple-700 text-white font-bold text-lg">
                  3
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Click Start & Relax</h3>
                <p className="text-lg text-gray-600">Hit the "Start Mover" button and your system will automatically stay active. No more sleep mode interruptions during important moments.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing/CTA Section */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 to-purple-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Get Mover Today</h2>
          <p className="text-xl text-gray-600 mb-8">One-time purchase. Own it forever. No subscriptions.</p>

          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border-2 border-purple-200">
            <div className="mb-8">
              <p className="text-gray-600 mb-4">Lifetime License</p>
              <p className="text-5xl font-bold text-gray-900 mb-4">
                $4.99
                <span className="text-lg text-gray-600 font-normal"> USD</span>
              </p>
              <p className="text-gray-600 mb-8">One-time payment. Keep Mover forever.</p>
            </div>

            <div className="space-y-3 mb-8 text-left">
              <div className="flex items-center gap-3">
                <span className="text-purple-600 font-bold">✓</span>
                <span className="text-gray-700">Lifetime access & updates</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-purple-600 font-bold">✓</span>
                <span className="text-gray-700">All movement patterns included</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-purple-600 font-bold">✓</span>
                <span className="text-gray-700">Unlimited usage, no limits</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-purple-600 font-bold">✓</span>
                <span className="text-gray-700">Windows, macOS & Linux support</span>
              </div>
            </div>

            <a
              href={stripeCheckoutUrl}
              target="_blank"
              className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105 shadow-lg"
            >
              Purchase Now
              <ArrowRight className="w-5 h-5" />
            </a>

            <p className="text-gray-500 text-sm mt-6">
              Secure payment powered by Stripe. 30-day money-back guarantee.
            </p>
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
                  <Activity className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-white">Mover</span>
              </div>
              <p className="text-sm">Keep your system active with intelligent movement.</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#features" className="hover:text-purple-400 transition">Features</a></li>
                <li><a href="#how-it-works" className="hover:text-purple-400 transition">How It Works</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="mailto:i.am.unknownco@gmail.com" className="hover:text-purple-400 transition">Email Support</a></li>
                <li><a href="#faq" className="hover:text-purple-400 transition">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#privacy" className="hover:text-purple-400 transition">Privacy Policy</a></li>
                <li><Link to="/terms" className="hover:text-purple-400 transition">Terms of Service</Link></li>
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
