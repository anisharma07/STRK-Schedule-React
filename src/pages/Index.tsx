
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import FeatureCard from "@/components/FeatureCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  const features = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      title: "Secure Data Management",
      description: "Blockchain technology ensuring privacy, integrity, and protection of patient records, minimizing risks of fraud and unauthorized access.",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: "Real-time Monitoring",
      description: "Provides governments and healthcare providers with real-time insights into diabetes trends for faster, more informed responses.",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      title: "Efficient Healthcare",
      description: "Streamlines administrative tasks and healthcare workflows, improving overall efficiency and reducing operational overhead.",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Cost Reduction",
      description: "Leverages Starknet's Layer 2 scalability to enable low-cost, high-speed transaction processing for large-scale health data.",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
      title: "Incentive-Based Health",
      description: "Employs DAO structures and token rewards to encourage positive health behaviors, promoting engagement and lifestyle improvements.",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: "Community Support",
      description: "Creates a supportive ecosystem of patients, healthcare providers, and community members working together for better health outcomes.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        
        {/* Features Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold text-strk-gray-dark sm:text-4xl">
                Redefining Diabetes Management
              </h2>
              <p className="mt-4 max-w-2xl mx-auto text-xl text-strk-gray-dark/80">
                Combining cutting-edge blockchain technology with healthcare expertise
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
        
        {/* How It Works */}
        <section className="py-16 bg-strk-gray relative overflow-hidden">
          <div className="absolute inset-0 bg-grid z-0"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold text-strk-gray-dark sm:text-4xl">
                How STRK Schedule Works
              </h2>
              <p className="mt-4 max-w-2xl mx-auto text-xl text-strk-gray-dark/80">
                A seamless ecosystem connecting patients, providers, and communities
              </p>
            </div>
            
            <div className="mt-16">
              <div className="lg:grid lg:grid-cols-3 lg:gap-8">
                {/* Step 1 */}
                <div className="relative animate-fade-in">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-strk-teal text-white mb-4">
                    <span className="text-lg font-bold">1</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Secure Your Health Data</h3>
                  <p className="text-strk-gray-dark/80">
                    Connect your devices and health records securely to the STRK platform. Your data is encrypted and only accessible with your permission.
                  </p>
                </div>
                
                {/* Step 2 */}
                <div className="mt-10 lg:mt-0 relative animate-fade-in" style={{ animationDelay: "0.2s" }}>
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-strk-purple text-white mb-4">
                    <span className="text-lg font-bold">2</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Engage & Monitor</h3>
                  <p className="text-strk-gray-dark/80">
                    Track your health metrics, follow treatment plans, and set goals. Healthcare providers get real-time insights to provide better care.
                  </p>
                </div>
                
                {/* Step 3 */}
                <div className="mt-10 lg:mt-0 relative animate-fade-in" style={{ animationDelay: "0.4s" }}>
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-gradient-to-r from-strk-teal to-strk-purple text-white mb-4">
                    <span className="text-lg font-bold">3</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Earn Rewards & Improve</h3>
                  <p className="text-strk-gray-dark/80">
                    Complete health tasks, maintain treatment adherence, and earn STRK tokens. Use them for healthcare services or community benefits.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-strk-teal/90 to-strk-purple/90 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-extrabold sm:text-4xl">
              Ready to revolutionize diabetes management?
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl opacity-90">
              Join the STRK Schedule community today and take control of your health journey.
            </p>
            <div className="mt-8 flex justify-center gap-4 flex-wrap">
              <Button asChild className="bg-white text-strk-teal-dark hover:bg-strk-gray">
                <Link to="/dashboard">Patient Dashboard</Link>
              </Button>
              <Button asChild className="bg-strk-teal-dark hover:bg-strk-teal">
                <Link to="/community">Join Community</Link>
              </Button>
              <Button asChild variant="outline" className="text-white border-white hover:bg-white/10">
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
