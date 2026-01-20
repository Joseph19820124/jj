export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-white">Nexus</div>
          <div className="hidden md:flex space-x-8">
            <a href="#features" className="text-gray-300 hover:text-white transition">Features</a>
            <a href="#pricing" className="text-gray-300 hover:text-white transition">Pricing</a>
            <a href="#about" className="text-gray-300 hover:text-white transition">About</a>
          </div>
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-full transition">
            Get Started
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Launch Your Next
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"> Big Idea</span>
          </h1>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            A modern platform to help you build, launch, and scale your products faster than ever. Join thousands of creators who trust us with their vision.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition transform hover:scale-105">
              Start Free Trial
            </button>
            <button className="border border-gray-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/10 transition">
              Watch Demo
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 max-w-4xl mx-auto">
          {[
            { number: '10K+', label: 'Active Users' },
            { number: '99.9%', label: 'Uptime' },
            { number: '150+', label: 'Countries' },
            { number: '24/7', label: 'Support' },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold text-white">{stat.number}</div>
              <div className="text-gray-400 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="container mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-white text-center mb-4">Powerful Features</h2>
        <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">
          Everything you need to bring your ideas to life, all in one place.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              ),
              title: 'Lightning Fast',
              description: 'Optimized performance that keeps your users engaged and your metrics soaring.',
            },
            {
              icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              ),
              title: 'Secure by Default',
              description: 'Enterprise-grade security with end-to-end encryption and compliance built-in.',
            },
            {
              icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                </svg>
              ),
              title: 'Flexible & Scalable',
              description: 'Grows with your needs from startup to enterprise without missing a beat.',
            },
            {
              icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              ),
              title: 'Analytics Dashboard',
              description: 'Real-time insights and metrics to help you make data-driven decisions.',
            },
            {
              icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              ),
              title: 'Team Collaboration',
              description: 'Work together seamlessly with built-in collaboration tools and permissions.',
            },
            {
              icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                </svg>
              ),
              title: 'API & Integrations',
              description: 'Connect with your favorite tools through our extensive API and integrations.',
            },
          ].map((feature, index) => (
            <div key={index} className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 hover:bg-white/10 transition">
              <div className="text-purple-400 mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works Section */}
      <section className="container mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-white text-center mb-4">How It Works</h2>
        <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">
          Get started in minutes with our simple three-step process.
        </p>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            {
              step: '01',
              title: 'Create Account',
              description: 'Sign up for free and set up your workspace in under a minute.',
            },
            {
              step: '02',
              title: 'Build Your Project',
              description: 'Use our intuitive tools to bring your vision to life quickly.',
            },
            {
              step: '03',
              title: 'Launch & Scale',
              description: 'Deploy with one click and scale effortlessly as you grow.',
            },
          ].map((item, index) => (
            <div key={index} className="text-center relative">
              <div className="text-6xl font-bold text-purple-600/20 mb-4">{item.step}</div>
              <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-gray-400">{item.description}</p>
              {index < 2 && (
                <div className="hidden md:block absolute top-8 -right-4 text-purple-600/40">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="container mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-white text-center mb-4">What Our Users Say</h2>
        <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">
          Join thousands of satisfied customers who have transformed their workflow.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              quote: "Nexus completely transformed how we build products. We shipped 3x faster within the first month.",
              name: 'Sarah Chen',
              role: 'CTO at TechFlow',
              avatar: 'SC',
            },
            {
              quote: "The best investment we made this year. Our team productivity has never been higher.",
              name: 'Marcus Johnson',
              role: 'Founder at LaunchPad',
              avatar: 'MJ',
            },
            {
              quote: "Finally, a platform that just works. No more juggling between dozens of tools.",
              name: 'Emily Rodriguez',
              role: 'Product Lead at Innovate',
              avatar: 'ER',
            },
          ].map((testimonial, index) => (
            <div key={index} className="bg-white/5 backdrop-blur-lg rounded-2xl p-8">
              <div className="flex items-center gap-1 text-yellow-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-300 mb-6 italic">&ldquo;{testimonial.quote}&rdquo;</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-semibold">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="text-white font-semibold">{testimonial.name}</div>
                  <div className="text-gray-400 text-sm">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="container mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-white text-center mb-4">Simple, Transparent Pricing</h2>
        <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">
          Choose the plan that fits your needs. No hidden fees, cancel anytime.
        </p>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            {
              name: 'Starter',
              price: '$0',
              period: 'forever',
              description: 'Perfect for trying out Nexus',
              features: ['Up to 3 projects', '1 team member', 'Basic analytics', 'Community support'],
              cta: 'Get Started',
              popular: false,
            },
            {
              name: 'Pro',
              price: '$29',
              period: 'per month',
              description: 'For growing teams and businesses',
              features: ['Unlimited projects', 'Up to 10 team members', 'Advanced analytics', 'Priority support', 'Custom integrations'],
              cta: 'Start Free Trial',
              popular: true,
            },
            {
              name: 'Enterprise',
              price: 'Custom',
              period: 'contact us',
              description: 'For large-scale operations',
              features: ['Everything in Pro', 'Unlimited team members', 'Dedicated account manager', '99.99% SLA', 'Custom contracts'],
              cta: 'Contact Sales',
              popular: false,
            },
          ].map((plan, index) => (
            <div key={index} className={`rounded-2xl p-8 ${plan.popular ? 'bg-gradient-to-b from-purple-600 to-pink-600 scale-105' : 'bg-white/5 backdrop-blur-lg'}`}>
              {plan.popular && (
                <div className="text-sm font-semibold text-white bg-white/20 rounded-full px-3 py-1 inline-block mb-4">
                  Most Popular
                </div>
              )}
              <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
              <div className="mb-4">
                <span className="text-4xl font-bold text-white">{plan.price}</span>
                <span className="text-gray-300 ml-2">/{plan.period}</span>
              </div>
              <p className={`mb-6 ${plan.popular ? 'text-white/80' : 'text-gray-400'}`}>{plan.description}</p>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <svg className={`w-5 h-5 ${plan.popular ? 'text-white' : 'text-purple-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className={plan.popular ? 'text-white' : 'text-gray-300'}>{feature}</span>
                  </li>
                ))}
              </ul>
              <button className={`w-full py-3 rounded-full font-semibold transition ${plan.popular ? 'bg-white text-purple-600 hover:bg-gray-100' : 'bg-purple-600 text-white hover:bg-purple-700'}`}>
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section id="about" className="container mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-white text-center mb-4">Frequently Asked Questions</h2>
        <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">
          Got questions? We have answers.
        </p>
        <div className="max-w-3xl mx-auto space-y-4">
          {[
            {
              question: 'How do I get started with Nexus?',
              answer: 'Simply sign up for a free account and you can start building immediately. No credit card required for the Starter plan.',
            },
            {
              question: 'Can I upgrade or downgrade my plan anytime?',
              answer: 'Yes! You can change your plan at any time. When upgrading, you will be prorated for the remainder of the billing cycle.',
            },
            {
              question: 'Is my data secure?',
              answer: 'Absolutely. We use enterprise-grade encryption and security practices. Your data is encrypted at rest and in transit, and we are SOC 2 Type II certified.',
            },
            {
              question: 'Do you offer refunds?',
              answer: 'Yes, we offer a 30-day money-back guarantee. If you are not satisfied, contact our support team for a full refund.',
            },
            {
              question: 'Can I use Nexus with my existing tools?',
              answer: 'Yes! Nexus integrates with popular tools like Slack, GitHub, Jira, Figma, and many more. Check our integrations page for the full list.',
            },
          ].map((faq, index) => (
            <details key={index} className="group bg-white/5 backdrop-blur-lg rounded-xl">
              <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                <span className="text-lg font-semibold text-white">{faq.question}</span>
                <svg className="w-5 h-5 text-purple-400 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-gray-400">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Join thousands of innovators who are already building the future with our platform.
          </p>
          <button className="bg-white text-purple-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition transform hover:scale-105">
            Start Your Free Trial
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800">
        <div className="container mx-auto px-6 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold text-white mb-4">Nexus</div>
              <p className="text-gray-400">Building the future, one idea at a time.</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition">Features</a></li>
                <li><a href="#" className="hover:text-white transition">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition">Changelog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition">About</a></li>
                <li><a href="#" className="hover:text-white transition">Blog</a></li>
                <li><a href="#" className="hover:text-white transition">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition">Privacy</a></li>
                <li><a href="#" className="hover:text-white transition">Terms</a></li>
                <li><a href="#" className="hover:text-white transition">Security</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Nexus. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
