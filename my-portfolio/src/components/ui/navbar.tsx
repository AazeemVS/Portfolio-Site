import { useNavigate, useLocation } from "react-router-dom";

import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { motion } from "framer-motion";

function NavBar() {
  const navigate = useNavigate();
  const location = useLocation();
  const underlineVariants = {
    rest: { width: 0 },
    hover: { width: "100%" },
    active: { width: "100%" },
  };
  const underlineTransition = { duration: 0.3, ease: "easeOut" };

  // Helper function to check if a path is active
  const isActive = (path: string) => {
    return location.pathname === path;
  };
  const pagesActive = ["/AboutMe", "/Projects", "/DevBlogs"].includes(
    location.pathname
  );

  return (
    <div className="w-full mt-5">
      <div className="max-w-4xl mx-auto px-4">
        <NavigationMenu className="w-full">
          <NavigationMenuList className="grid grid-cols-3 gap-64 place-items-center">
            {/* 1) Left */}
            <div className="grid place-items-center pr-96">
              <NavigationMenuItem>
                <NavigationMenuLink onClick={() => navigate("/LandingPage")}>
                  <motion.span
                    className={`relative inline-block text-xl font-bold whitespace-nowrap ${
                      isActive("/LandingPage") ? "text-cyan-700" : ""
                    }`}
                    initial="rest"
                    whileHover="hover"
                  >
                    <span className="relative z-10">Aazeem Vaidya Shaikh</span>

                    {isActive("/LandingPage") ? (
                      <motion.span
                        className="absolute bottom-0 left-0 h-0.5 bg-cyan-700"
                        variants={underlineVariants}
                        initial="active" // Start with full width
                        animate="active" // Keep full width
                      />
                    ) : (
                      <motion.span
                        className="absolute bottom-0 left-0 h-0.5 bg-cyan-700"
                        variants={underlineVariants}
                        transition={underlineTransition}
                      />
                    )}
                  </motion.span>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </div>

            {/* 2) Center */}
            <div className="grid place-items-center px-4">
              <NavigationMenuItem>
                <div className="flex space-x-6 px-6 py-2 border-2 border-[#27272a] rounded-full">
                  {[
                    ["About Me", "/AboutMe"],
                    ["Projects", "/Projects"],
                    ["Thoughts", "/DevBlogs"],
                  ].map(([label, path]) => (
                    <NavigationMenuLink
                      key={label}
                      onClick={() => navigate(path)}
                    >
                      <motion.span
                        className={`relative inline-block text-xl font-bold whitespace-nowrap ${
                          isActive(path) ? "text-cyan-700" : ""
                        }`}
                        initial="rest"
                        whileHover="hover"
                      >
                        <span className="relative z-10">{label}</span>
                        {isActive(path) ? (
                          <motion.span
                            className="absolute bottom-0 left-0 h-0.5 bg-cyan-700"
                            variants={underlineVariants}
                            initial="active" // Start with full width
                            animate="active" // Keep full width
                          />
                        ) : (
                          <motion.span
                            className="absolute bottom-0 left-0 h-0.5 bg-cyan-700"
                            variants={underlineVariants}
                            transition={underlineTransition}
                          />
                        )}
                      </motion.span>
                    </NavigationMenuLink>
                  ))}
                </div>
              </NavigationMenuItem>
            </div>

            {/* 3) Right */}
            <div className="grid place-items-center pl-112">
              <NavigationMenuItem>
                <NavigationMenuLink onClick={() => navigate("/ContactMe")}>
                  <motion.span
                    className={`relative inline-block text-xl font-bold whitespace-nowrap ${
                      isActive("/ContactMe") ? "text-cyan-700" : ""
                    }`}
                    initial="rest"
                    whileHover="hover"
                  >
                    <span className="relative z-10">Contact Me</span>
                    {isActive("/ContactMe") ? (
                      <motion.span
                        className="absolute bottom-0 left-0 h-0.5 bg-cyan-700"
                        variants={underlineVariants}
                        initial="active" // Start with full width
                        animate="active" // Keep full width
                      />
                    ) : (
                      <motion.span
                        className="absolute bottom-0 left-0 h-0.5 bg-cyan-700"
                        variants={underlineVariants}
                        transition={underlineTransition}
                      />
                    )}
                  </motion.span>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </div>
          </NavigationMenuList>

          <NavigationMenuViewport />
        </NavigationMenu>
      </div>
    </div>
  );
}
export default NavBar;
