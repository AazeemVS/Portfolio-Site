import { useNavigate, useLocation } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { motion, type Variants, type Transition } from "framer-motion";
import {
  HomeIcon,
  PersonIcon,
  BackpackIcon,
  EnvelopeClosedIcon,
} from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";

// cubic-bezier tuples
const EASE_OUT: [number, number, number, number] = [0, 0, 0.2, 1];

const underlineVariants: Variants = {
  rest: { width: 0 },
  hover: { width: "100%" },
  active: { width: "100%" },
};

const underlineTransition: Transition = { duration: 0.3, ease: EASE_OUT };

const pillLinks = [
  ["About Me", "/AboutMe"],
  ["Projects", "/Projects"],
] as const;

const mobileNavItems = [
  { icon: HomeIcon, path: "/LandingPage", label: "Home" },
  { icon: PersonIcon, path: "/AboutMe", label: "About" },
  { icon: BackpackIcon, path: "/Projects", label: "Projects" },
  { icon: EnvelopeClosedIcon, path: "/ContactMe", label: "Contact" },
] as const;

function NavBar() {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const go = (path: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    navigate(path);
  };

  // Underlined text link for the brand name (rendered as a plain anchor so
  // it can sit directly in the top-level flex row, outside any NavigationMenu)
  const renderBrandLink = (path: string, label: string) => {
    const active = isActive(path);
    return (
      <a
        href={path}
        onClick={go(path)}
        className="relative inline-block rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-500"
      >
        <motion.span
          className={cn(
            "relative inline-block whitespace-nowrap text-lg font-bold transition-colors duration-300",
            active ? "text-cyan-700" : "text-white hover:text-cyan-700"
          )}
          initial="rest"
          whileHover="hover"
        >
          <span className="relative z-10">{label}</span>
          {active ? (
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
      </a>
    );
  };

  return (
    <>
      {/* Desktop Navigation */}
      <div className="hidden lg:block w-full sticky top-0 z-50 bg-background/90 backdrop-blur-md border-b border-white/10">
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-8 px-6 py-4 xl:px-10">
          {/* Left - Name */}
          {renderBrandLink("/LandingPage", "Aazeem Vaidya Shaikh")}

          {/* Right - nav pill + Contact CTA */}
          <div className="flex items-center gap-6 xl:gap-8">
            <NavigationMenu className="w-auto max-w-none flex-none">
              <NavigationMenuList className="flex items-center gap-1 rounded-full border border-border/70 p-1.5">
                {pillLinks.map(([label, path]) => {
                  const active = isActive(path);
                  return (
                    <NavigationMenuItem key={path}>
                      <NavigationMenuLink
                        href={path}
                        active={active}
                        onClick={go(path)}
                        className={cn(
                          "rounded-full px-4 py-1.5 text-sm font-semibold whitespace-nowrap transition-colors duration-200",
                          active
                            ? "bg-cyan-700/15 text-cyan-400"
                            : "text-white/80 hover:bg-white/5 hover:text-white"
                        )}
                      >
                        {label}
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  );
                })}
              </NavigationMenuList>
            </NavigationMenu>

            <a
              href="/ContactMe"
              onClick={go("/ContactMe")}
              className={cn(
                "rounded-full border px-5 py-2 text-sm font-semibold whitespace-nowrap transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-500",
                isActive("/ContactMe")
                  ? "border-cyan-600 bg-cyan-600 text-white"
                  : "border-cyan-700/60 text-cyan-400 hover:border-cyan-600 hover:bg-cyan-600 hover:text-white"
              )}
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Nav bar */}
      <div className="lg:hidden w-full sticky top-0 z-50 bg-background/90 backdrop-blur-md px-4 py-3">
        <div className="flex justify-center">
          <div className="w-full max-w-md sm:max-w-lg rounded-lg">
            <NavigationMenu className="w-full max-w-none">
              <NavigationMenuList className="flex justify-between items-center px-2 py-2 border border-gray-800 bg-zinc-900 rounded-lg">
                {mobileNavItems.map((item) => {
                  const Icon = item.icon;
                  const active = isActive(item.path);
                  return (
                    <NavigationMenuItem key={item.path} className="flex-1">
                      <NavigationMenuLink
                        href={item.path}
                        active={active}
                        onClick={go(item.path)}
                        className="px-2 py-1"
                      >
                        <motion.div
                          className="flex flex-col items-center p-1 rounded-md"
                          whileTap={{ scale: 0.95 }}
                          whileHover={{
                            backgroundColor: "rgba(6, 182, 212, 0.1)",
                          }}
                        >
                          <Icon
                            className={cn(
                              "w-7 h-7 sm:w-8 sm:h-8",
                              active ? "text-cyan-700" : "text-zinc-600"
                            )}
                          />
                          <span
                            className={cn(
                              "relative text-[10px] mt-0.5",
                              active
                                ? "text-cyan-700 font-medium"
                                : "text-white"
                            )}
                          >
                            {item.label}
                            {active && (
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
