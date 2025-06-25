import { cn } from "@/lib/utils";
import { AlertCircle } from "lucide-react";
import { motion } from "motion/react";

export default function InputError({ message, className = "" }: { message?: string; className?: string }) {
  return message ? (
    <motion.p
      className={cn("mt-1 flex items-center text-sm text-red-600", className)}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <AlertCircle className="mr-1 h-4 w-4" />
      {message}
    </motion.p>
  ) : null;
}
