
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import FeatureCard from "@/components/FeatureCard";
import { Link } from "react-router-dom";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const About = () => {
  const features = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      title: "Blockchain Security",
      description: "Patient data is secured using Starknet's ZK-rollup technology, ensuring privacy, integrity, and protection from unauthorized access."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
        </svg>
      ),
      title: "Patient Data Ownership",
      description: "Patients own and control their medical data through NFT-based records, granting specific permissions for healthcare providers."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Token Incentives",
      description: "STRK tokens reward positive health behaviors and adherence to treatment plans, creating a sustainable motivation system."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: "Community DAO",
      description: "A decentralized autonomous organization governs the platform, allowing patients and providers to vote on protocol changes."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: "Real-time Analytics",
      description: "Advanced real-time analytics for healthcare providers and patients to track health trends and make informed decisions."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Low Transaction Costs",
      description: "Starknet's Layer 2 scaling solution enables near-zero transaction fees, making the platform accessible for large-scale health systems."
    },
  ];

  const faqs = [
    {
      question: "How does STRK Schedule protect my health data?",
      answer: "STRK Schedule uses Starknet's Zero-Knowledge proof technology to encrypt your health data. Only you can grant permissions for healthcare providers to access specific parts of your medical record, and all data transactions are secured by blockchain technology."
    },
    {
      question: "What are STRK tokens and how do I earn them?",
      answer: "STRK tokens are incentives for engaging in positive health behaviors. You can earn them by consistently tracking blood glucose, following treatment plans, participating in community activities, and achieving health goals set by you and your healthcare provider."
    },
    {
      question: "Can I use STRK Schedule with my existing glucose monitor?",
      answer: "Yes, STRK Schedule is designed to integrate with most popular continuous glucose monitors and traditional glucometers. The platform supports automated data syncing from supported devices or manual entry for devices without direct integration."
    },
    {
      question: "How do healthcare providers benefit from using STRK Schedule?",
      answer: "Providers gain access to real-time patient data, streamlined workflows, and advanced analytics that help identify trends and potential issues before they become serious. The platform reduces administrative burden while improving quality of care and patient outcomes."
    },
    {
      question: "Is STRK Schedule only for diabetes management?",
      answer: "While the initial focus is on diabetes management, STRK Schedule's infrastructure is designed to support various chronic conditions. Future updates will expand functionality for hypertension, heart disease, respiratory conditions, and other chronic health issues."
    },
    {
      question: "How is STRK Schedule different from other health management apps?",
      answer: "STRK Schedule combines blockchain security, patient data ownership, financial incentives, and community support in a single platform. Unlike traditional apps, patients truly own their data, earn rewards for healthy behaviors, and participate in governance through the DAO structure."
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-strk-teal to-strk-purple text-white py-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-white opacity-20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="md:flex md:items-center md:justify-between">
              <div className="md:max-w-3xl">
                <h1 className="text-4xl md:text-5xl font-extrabold mb-6">Reinventing Chronic Disease Care</h1>
                <p className="text-xl mb-8 opacity-90">
                  STRK Schedule combines blockchain technology with healthcare expertise to create a secure, incentive-driven ecosystem for improved diabetes management.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button asChild className="bg-white text-strk-teal-dark hover:bg-white/90">
                    <Link to="/dashboard">Get Started</Link>
                  </Button>
                  <Button asChild variant="outline" className="text-white border-white hover:bg-white/10">
                    <a href="#features">Learn More</a>
                  </Button>
                </div>
              </div>
              <div className="mt-8 md:mt-0 md:ml-8 animate-float">
                <div className="bg-white/10 p-6 backdrop-blur-sm rounded-lg border border-white/20 shadow-xl">
                  <div className="flex items-center gap-3 pb-4 border-b border-white/20 mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    <div>
                      <div className="text-lg font-bold">STRK Schedule Metrics</div>
                      <div className="text-sm opacity-80">Real-time Healthcare Impact</div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between">
                        <span>Patients Served</span>
                        <span className="font-bold">25,600+</span>
                      </div>
                      <div className="w-full h-1.5 bg-white/20 rounded-full mt-1">
                        <div className="bg-white h-full rounded-full" style={{ width: '75%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between">
                        <span>Healthcare Providers</span>
                        <span className="font-bold">1,240+</span>
                      </div>
                      <div className="w-full h-1.5 bg-white/20 rounded-full mt-1">
                        <div className="bg-white h-full rounded-full" style={{ width: '60%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between">
                        <span>Rewards Issued</span>
                        <span className="font-bold">1.2M STRK</span>
                      </div>
                      <div className="w-full h-1.5 bg-white/20 rounded-full mt-1">
                        <div className="bg-white h-full rounded-full" style={{ width: '85%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between">
                        <span>Avg. Health Score Improvement</span>
                        <span className="font-bold">+24%</span>
                      </div>
                      <div className="w-full h-1.5 bg-white/20 rounded-full mt-1">
                        <div className="bg-white h-full rounded-full" style={{ width: '65%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-strk-gray-dark/80 mb-8">
                STRK Schedule was founded with a singular purpose: to transform chronic disease management by putting patients at the center of their healthcare journey, empowered by technology, community, and incentives.
              </p>
              <div className="flex justify-center">
                <div className="w-20 h-1 bg-gradient-to-r from-strk-teal to-strk-purple rounded-full"></div>
              </div>
            </div>
            
            <div className="mt-12 grid gap-8 md:grid-cols-3">
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-strk-teal/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-strk-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Patient Empowerment</h3>
                  <p className="text-strk-gray-dark/80">
                    We give patients true ownership of their health data and active participation in their care decisions through blockchain-secured medical records.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-strk-purple/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-strk-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Incentivized Health</h3>
                  <p className="text-strk-gray-dark/80">
                    Our token reward system transforms healthcare from reactive to preventive by incentivizing consistent positive health behaviors.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-strk-teal/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-strk-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Community Support</h3>
                  <p className="text-strk-gray-dark/80">
                    We build supportive ecosystems where patients connect with others facing similar challenges and healthcare providers can deliver more personalized care.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Technology Features */}
        <section id="features" className="py-16 bg-strk-gray relative overflow-hidden">
          <div className="absolute inset-0 bg-grid z-0"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-6">Powered by Starknet</h2>
              <p className="text-lg text-strk-gray-dark/80 max-w-3xl mx-auto">
                STRK Schedule leverages Starknet's Layer 2 blockchain technology to bring unmatched security, scalability, and cost-efficiency to healthcare data management.
              </p>
            </div>
            
            <div className="mt-12 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {features.map((feature, index) => (
                <FeatureCard
                  key={index}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="md:grid md:grid-cols-2 md:gap-12 lg:gap-16">
              <div>
                <h2 className="text-3xl font-bold mb-6">Benefits for Patients</h2>
                <ul className="space-y-4">
                  <li className="flex">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-strk-teal mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <h3 className="font-semibold">Complete Data Ownership</h3>
                      <p className="text-strk-gray-dark/80 text-sm">Control who sees your health data and for what purpose, with cryptographically secured permissions.</p>
                    </div>
                  </li>
                  <li className="flex">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-strk-teal mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <h3 className="font-semibold">Financial Incentives</h3>
                      <p className="text-strk-gray-dark/80 text-sm">Earn STRK tokens by maintaining treatment adherence and achieving health goals.</p>
                    </div>
                  </li>
                  <li className="flex">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-strk-teal mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <h3 className="font-semibold">Community Support</h3>
                      <p className="text-strk-gray-dark/80 text-sm">Connect with others facing similar challenges and learn from their experiences.</p>
                    </div>
                  </li>
                  <li className="flex">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-strk-teal mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <h3 className="font-semibold">Personalized Insights</h3>
                      <p className="text-strk-gray-dark/80 text-sm">Receive AI-powered recommendations based on your health data patterns.</p>
                    </div>
                  </li>
                  <li className="flex">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-strk-teal mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <h3 className="font-semibold">Voting Rights</h3>
                      <p className="text-strk-gray-dark/80 text-sm">Participate in platform governance through the STRK DAO.</p>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="mt-12 md:mt-0">
                <h2 className="text-3xl font-bold mb-6">Benefits for Providers</h2>
                <ul className="space-y-4">
                  <li className="flex">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-strk-purple mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <h3 className="font-semibold">Real-time Patient Monitoring</h3>
                      <p className="text-strk-gray-dark/80 text-sm">Access to continuous data streams for better clinical decision making.</p>
                    </div>
                  </li>
                  <li className="flex">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-strk-purple mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <h3 className="font-semibold">Streamlined Workflows</h3>
                      <p className="text-strk-gray-dark/80 text-sm">Reduced administrative burden with automated documentation and secure data sharing.</p>
                    </div>
                  </li>
                  <li className="flex">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-strk-purple mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <h3 className="font-semibold">Enhanced Patient Engagement</h3>
                      <p className="text-strk-gray-dark/80 text-sm">Patients are more motivated to follow treatment plans with incentive mechanisms.</p>
                    </div>
                  </li>
                  <li className="flex">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-strk-purple mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <h3 className="font-semibold">Advanced Analytics</h3>
                      <p className="text-strk-gray-dark/80 text-sm">Powerful insights and predictive modeling for population health management.</p>
                    </div>
                  </li>
                  <li className="flex">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-strk-purple mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <h3 className="font-semibold">Value-Based Care Support</h3>
                      <p className="text-strk-gray-dark/80 text-sm">Tools to improve quality metrics and patient outcomes for value-based reimbursement.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-strk-gray">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
              <p className="text-lg text-strk-gray-dark/80 mb-12">
                Find answers to common questions about STRK Schedule and how it works.
              </p>
            </div>
            
            <Accordion type="single" collapsible className="bg-white rounded-md shadow-sm">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`faq-${index}`}>
                  <AccordionTrigger className="px-6 py-4 hover:bg-strk-gray/10 transition-colors">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 pt-0">
                    <p className="text-strk-gray-dark/80">{faq.answer}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-strk-teal to-strk-purple text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-extrabold mb-6">Ready to Transform Diabetes Management?</h2>
            <p className="text-xl max-w-2xl mx-auto mb-8 opacity-90">
              Join thousands of patients and providers already experiencing the benefits of STRK Schedule.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild className="bg-white text-strk-teal-dark hover:bg-white/90">
                <Link to="/dashboard">Get Started</Link>
              </Button>
              <Button asChild variant="outline" className="border-white text-white hover:bg-white/10">
                <Link to="/community">Join Community</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
