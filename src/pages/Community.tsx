import { Outlet } from "react-router-dom";
import { motion } from "motion/react";

export default function Community() {
  return (
    <div className="min-h-screen bg-[#F5F5F5]" style={{ paddingTop: '140px', paddingBottom: '80px' }}>
      <div className="container-custom max-w-5xl" style={{ margin: '0 auto' }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
          style={{ marginBottom: '64px' }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-black" style={{ marginBottom: '24px' }}>
            论坛
          </h1>
          <p className="text-lg md:text-xl" style={{ color: '#707070' }}>
            与大家分享你的想法和见解
          </p>
        </motion.div>

        <Outlet />
      </div>
    </div>
  );
}