import { useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

interface BackButtonProps {
  className?: string;
}

const BackButton = ({ className = "" }: BackButtonProps) => {
  const navigate = useNavigate();
  const location = useLocation();

  // Don't show on the index page
  if (location.pathname === "/") {
    return null;
  }

  return (
    <motion.button
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      onClick={() => navigate("/")}
      className={`inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group ${className}`}
    >
      <ArrowLeft
        size={20}
        className="group-hover:-translate-x-1 transition-transform"
      />
      Back to Home
    </motion.button>
  );
};

export default BackButton;
