
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="relative overflow-hidden bg-background">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-grid z-0"></div>
      <div className="absolute top-20 right-0 w-96 h-96 bg-strk-teal/20 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-strk-purple/20 rounded-full filter blur-3xl"></div>
      
      <div className="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 lg:py-24 z-10">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
            <h1 className="mt-4 text-4xl tracking-tight font-extrabold text-strk-gray-dark sm:mt-5 sm:text-5xl lg:mt-6 xl:text-6xl">
              <span className="block">Revolutionizing</span>
              <span className="block text-strk-teal-dark">Diabetes Management</span>
            </h1>
            <p className="mt-3 text-base text-strk-gray-dark sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
              STRK Schedule combines blockchain technology with healthcare expertise to create a secure, incentive-driven platform for chronic disease management. Own your health data, earn rewards for healthy behaviors, and experience truly personalized care.
            </p>
            <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
              <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
                <Button asChild className="bg-strk-teal hover:bg-strk-teal-dark text-white shadow-lg shadow-strk-teal/25">
                  <Link to="/dashboard">Patient Dashboard</Link>
                </Button>
                <Button asChild variant="outline" className="border-strk-teal text-strk-teal-dark hover:bg-strk-teal/10">
                  <Link to="/provider">Provider Portal</Link>
                </Button>
              </div>
            </div>
          </div>
          <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
            <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md animate-float">
              <div className="relative block w-full bg-white rounded-lg overflow-hidden">
                <div className="bg-gradient-to-r from-strk-teal/90 to-strk-purple/90 p-6 rounded-lg shadow-xl">
                  <div className="flex items-center mb-4">
                    <div className="h-10 w-10 rounded-full bg-white flex items-center justify-center">
                      <div className="h-8 w-8 rounded-full bg-gradient-to-r from-strk-teal to-strk-purple flex items-center justify-center">
                        <span className="text-white font-bold text-sm">Sx</span>
                      </div>
                    </div>
                    <h3 className="ml-3 text-xl font-bold text-white">STRK Health NFT</h3>
                  </div>
                  <div className="space-y-2 text-white">
                    <div className="flex justify-between">
                      <span>Blood Glucose:</span>
                      <span className="font-semibold">120 mg/dL</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Weekly Check-ins:</span>
                      <span className="font-semibold">5/7</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Health Score:</span>
                      <span className="font-semibold">85/100</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Rewards Earned:</span>
                      <span className="font-semibold">120 STRK</span>
                    </div>
                  </div>
                  <div className="mt-4 p-3 bg-white/10 rounded-lg">
                    <p className="text-sm text-white">Secured by Starknet. Your data. Your control.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
