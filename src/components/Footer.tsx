
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-strk-gray border-t">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center">
              <div className="h-8 w-8 rounded-full bg-gradient-to-r from-strk-teal to-strk-purple flex items-center justify-center">
                <span className="text-white font-bold text-sm">Sx</span>
              </div>
              <span className="ml-2 text-xl font-bold text-strk-purple-dark">STRK Schedule</span>
            </div>
            <p className="mt-4 text-sm text-strk-gray-dark max-w-md">
              Revolutionizing chronic disease management through decentralized healthcare solutions.
              STRK Schedule empowers patients, streamlines provider workflows, and rewards healthy behaviors.
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-strk-gray-dark tracking-wider uppercase">Navigation</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/" className="text-sm text-strk-gray-dark hover:text-strk-teal-dark transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/dashboard" className="text-sm text-strk-gray-dark hover:text-strk-teal-dark transition-colors">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link to="/provider" className="text-sm text-strk-gray-dark hover:text-strk-teal-dark transition-colors">
                  Provider View
                </Link>
              </li>
              <li>
                <Link to="/community" className="text-sm text-strk-gray-dark hover:text-strk-teal-dark transition-colors">
                  Community
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-strk-gray-dark hover:text-strk-teal-dark transition-colors">
                  About
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-strk-gray-dark tracking-wider uppercase">Connect</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#" className="text-sm text-strk-gray-dark hover:text-strk-teal-dark transition-colors">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-strk-gray-dark hover:text-strk-teal-dark transition-colors">
                  Discord
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-strk-gray-dark hover:text-strk-teal-dark transition-colors">
                  GitHub
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-strk-gray-dark hover:text-strk-teal-dark transition-colors">
                  Documentation
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 pt-8 md:flex md:items-center md:justify-between">
          <p className="text-sm text-strk-gray-dark">&copy; {new Date().getFullYear()} STRK Schedule. All rights reserved.</p>
          <div className="mt-4 md:mt-0">
            <p className="text-sm text-strk-gray-dark">Built on Starknet</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
