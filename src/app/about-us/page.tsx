"use client";
import React from "react";
import { motion } from "framer-motion";

const page = () => {
  return (
    <motion.div
      // initial={{ opacity: 0, y: 20 }}
      // animate={{ opacity: 1, y: 0 }}
      // exit={{ opacity: 0, y: 20 }}
      className="App page">
      This is about page
    </motion.div>
  );
};

export default page;
