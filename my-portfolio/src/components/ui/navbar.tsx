import { useNavigate, useLocation } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { motion } from "framer-motion";
import {
  HomeIcon,
  PersonIcon,
  BackpackIcon,
  ChatBubbleIcon,
  EnvelopeClosedIcon,
} from "@radix-ui/react-icons";

function NavBar() {
  const navigate = useNavigate();
  const location = useLocation();

  const underlineVariants = {
    rest: { width: 0 },
    hover: { width: "100%" },
    active: { width: "100%" },
  };
  const underlineTransition = { duration: 0.3, ease: "easeOut" };

  const isActive = (path: string) => location.pathname === path;

  // Mobile navigation items
  const mobileNavItems = [
    { icon: HomeIcon, path: "/LandingPage", label: "Home" },
    { icon: PersonIcon, path: "/AboutMe", label: "About" },
    { icon: BackpackIcon, path: "/Projects", label: "Projects" },
    { icon: ChatBubbleIcon, path: "/DevBlogs", label: "Blogs" },
    { icon: EnvelopeClosedIcon, path: "/ContactMe", label: "Contact" },
  ];
  return (
    <>
      {/* Desktop Navigation */}
      <div className="hidden lg:block w-full mt-5">
        <div className="max-w-4xl mx-auto px-4">
          <NavigationMenu className="w-full">
            <NavigationMenuList className="grid grid-cols-3 gap-64 place-items-center">
              {/* Left - Name */}
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
                      <span className="relative z-10">
                        Aazeem Vaidya Shaikh
                      </span>
                      {isActive("/LandingPage") ? (
                        <motion.span
                          className="absolute bottom-0 left-0 h-0.5 bg-cyan-700"
                          variants={underlineVariants}
                          initial="active"
                          animate="active"
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

              {/* Center - Main Nav */}
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
                              initial="active"
                              animate="active"
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

              {/* Right - Contact */}
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
                          initial="active"
                          animate="active"
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

      {/* Mobile Nav bar */}
      <div className="lg:hidden w-full mt-5">
        <div className="flex justify-center">
          <div className="max-w-md rounded-lg">
            <NavigationMenu className="w-full">
              <NavigationMenuList className="flex justify-between items-center px-2 py-2 border border-gray-800 bg-zinc-900 rounded-lg">
                {mobileNavItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <NavigationMenuItem key={item.path} className="flex-1">
                      <NavigationMenuLink onClick={() => navigate(item.path)}>
                        <motion.div
                          className="flex flex-col items-center p-1 rounded-md"
                          whileTap={{ scale: 0.95 }}
                          whileHover={{
                            backgroundColor: "rgba(6, 182, 212, 0.1)",
                          }}
                        >
                          <Icon
                            className={`w-8 h-8 ${
                              isActive(item.path)
                                ? "text-cyan-700"
                                : "text-zinc-600"
                            }`}
                          />
                          <span
                            className={`text-[10px] mt-0.5 ${
                              isActive(item.path)
                                ? "text-cyan-700 font-medium"
                                : "text-white"
                            }`}
                          >
                            {item.label}
                            {isActive(item.path) && (
                              <motion.span
                                className="absolute bottom-0 left-0 right-0 h-0.5 bg-cyan-700"
                                variants={underlineVariants}
                                initial="active"
                                animate="active"
                              />
                            )}
                          </span>
                        </motion.div>
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  );
                })}
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavBar;
