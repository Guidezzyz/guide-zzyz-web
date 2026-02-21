import { Link, useLocation } from "react-router";
import { motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import Logo from "@/assets/nav/logo.png"

export default function Navbar() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile(); // Check on mount
    window.addEventListener("resize", checkMobile);
    
    const handleScroll = () => {
      // Check if scrolled more than 80vh (when hero section is about to leave)
      if (window.innerWidth >= 768) {
        const threshold = window.innerHeight * 0.8;
        setScrolled(window.scrollY > threshold);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  // Determine navbar style based on page and scroll position
  const getNavbarStyle = () => {
    if (isMobile) {
      // Mobile always has the slightly transparent white background
      return {
        background: "backdrop-blur-xl", // blur class
        style: { backgroundColor: "rgba(255, 255, 255, 0.9)" }, // inline style for exact opacity
        border: "border-b border-white/20",
        shadow: "shadow-sm",
        textColor: "text-slate-900",
      };
    }

    if (isHomePage && !scrolled) {
      // transparent navbar on home page at top (desktop only)
      return {
        background: "bg-transparent",
        style: {},
        border: "border-none",
        shadow: "",
        textColor: "text-white",
      };
    } else {
      // Blur navbar on other pages or when scrolled (desktop)
      return {
        background: "backdrop-blur-xl", // blur class
        style: { backgroundColor: "rgba(255, 255, 255, 0.9)" }, // inline style
        border: "border-b border-slate-200/50",
        shadow: "shadow-lg",
        textColor: "text-slate-900",
      };
    }
  };

  const navStyle = getNavbarStyle();

  const navLinks = [
    { path: "/", label: "首页" },
    { path: "/submit", label: "投稿" },
    { path: "/community", label: "论坛" },
    { path: "/join-us", label: "加入我们" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Background Layer - Separated to prevent text blur issues */}
      <div 
        className={`absolute inset-0 -z-10 transition-all duration-300 ${navStyle.background} ${navStyle.border} ${navStyle.shadow}`}
        style={navStyle.style}
      />
      
      <div className="container-custom relative">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
              className="h-10 lg:h-12 flex items-center"
            >
              <img src={Logo} alt="Logo" className="h-10 w-10 object-contain" />
            </motion.div>
            <span
              className={`text-xl lg:text-2xl font-extrabold whitespace-nowrap transition-colors duration-300 ${navStyle.textColor}`}
            >
              求学指南酱
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center">
            {navLinks.map((link, index) => (
              <Link
                key={link.path}
                to={link.path}
                className="relative py-2"
                style={{
                  paddingLeft: "24px",
                  paddingRight:
                    index === navLinks.length - 1 ? "0px" : "24px",
                  marginRight: index === navLinks.length - 1 ? "0px" : "18px",
                }}
              >
                <span
                  style={{
                    fontSize: "21px",
                    fontWeight: "600",
                  }}
                  className={`transition-colors duration-200 ${
                    location.pathname === link.path
                      ? isHomePage && !scrolled
                        ? "text-white"
                        : "text-[#0067D1]"
                      : isHomePage && !scrolled
                      ? "text-white/80 hover:text-white"
                      : "text-[#A8A8A8] hover:text-[#0067D1]"
                  }`}
                >
                  {link.label}
                </span>
                {location.pathname === link.path && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className={`absolute bottom-0 h-1 rounded-full ${
                      isHomePage && !scrolled ? "bg-white" : "bg-[#0067D1]"
                    }`}
                    style={{
                      left: '20px',
                      right: index === navLinks.length - 1 ? '-4px' : '20px'
                    }}
                    initial={false}
                    transition={{ type: "spring", stiffness: 400, damping: 35 }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`md:hidden p-2 ${navStyle.textColor}`}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden border-t backdrop-blur-xl shadow-xl flex flex-col min-h-[50vh]"
            style={{
              paddingBlock: "15px",
              gap: "10px",
              borderTopColor: "#4e505257" // slate-500
              // Background color is handled by the parent nav element to avoid doubling up
            }}
          >
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-6 py-4 text-center text-lg font-bold transition-all ${
                  location.pathname === link.path
                    ? "text-[#0067D1]"
                    : "text-slate-900 hover:text-[#0067D1]"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </motion.div>
        )}
      </div>
    </nav>
  );
}