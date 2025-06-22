import React, { useEffect } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Footer from '@/components/ui/footer';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const NoPage: React.FC = () => {
  // Create floating particles
  useEffect(() => {
    const particles = 15;
    const container = document.querySelector('.particles-container');
    
    for (let i = 0; i < particles; i++) {
      const particle = document.createElement('div');
      particle.className = 'absolute rounded-full bg-cyan-800 opacity-100';
      
      // Random properties
      const size = Math.random() * 10 + 5;
      const posX = Math.random() * 100;
      const posY = Math.random() * 100;
      const duration = Math.random() * 20 + 10;
      const delay = Math.random() * 5;
      
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.left = `${posX}%`;
      particle.style.top = `${posY}%`;
      particle.style.animation = `float ${duration}s ease-in-out ${delay}s infinite alternate`;
      
      container?.appendChild(particle);
    }
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-black via-[#111111] to-[#1a1a1a] flex flex-col overflow-hidden particles-container">
      {/* Floating particles background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" />
      
      {/* Animated rings */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div
          className="w-96 h-96 border-2 border-cyan-800 rounded-full opacity-10"
          animate={{
            scale: [1, 1.2, 1],
            rotate: 360,
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute w-64 h-64 border border-cyan-800 rounded-full opacity-5"
          animate={{
            scale: [1, 1.3, 1],
            rotate: -360,
          }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear",
            delay: 5,
          }}
        />
      </div>

      <div className="flex-grow flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Card className="max-w-lg w-full bg-[#11111] border border-gray-700 p-8 backdrop-blur-sm bg-opacity-70">
            <CardHeader className="text-center space-y-3">
              <motion.div
                animate={{ 
                  scale: [1, 1.05, 1],
                  opacity: [1, 0.8, 1]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
              >
                <CardTitle className="text-6xl font-extrabold text-white tracking-tighter">
                  404
                </CardTitle>
              </motion.div>
              <CardDescription className="text-cyan-800 text-xl font-medium">
                Page Not Found
              </CardDescription>
            </CardHeader>
            
            <CardContent className="mt-6 text-center text-gray-300 leading-relaxed">
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                The page you're looking for has vanished into the digital void.
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-2 text-sm text-gray-400"
              >
                (Error code: 404 - Resource not found)
              </motion.p>
            </CardContent>
            
            <CardFooter className="mt-8 flex justify-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/"
                  className="inline-flex items-center px-6 py-3 border-2 border-cyan-800 text-cyan-800 rounded-lg font-medium hover:bg-cyan-800 hover:text-black transition-colors duration-300 group"
                >
                  <motion.span
                    animate={{
                      x: [0, 5, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                    className="mr-2 group-hover:mr-3 transition-all"
                  >
                    ←
                  </motion.span>
                  Return to Safety
                </Link>
              </motion.div>
            </CardFooter>
          </Card>
        </motion.div>
      </div>
      
      <footer className="mt-auto">
        <Footer />
      </footer>
      
      <style>
        {`
          @keyframes float {
            0% {
              transform: translateY(0) translateX(0);
            }
            50% {
              transform: translateY(-20px) translateX(10px);
            }
            100% {
              transform: translateY(0) translateX(20px);
            }
          }
        `}
      </style>
    </div>
  );
};

export default NoPage;