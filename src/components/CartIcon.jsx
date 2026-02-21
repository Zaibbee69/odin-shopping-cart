import { ShoppingCart } from "lucide-react";

export default function CartIcon({ count }) {
  return (
    <div className="relative inline-block">
      <ShoppingCart color="#faa80fff" className="w-6 h-6" />

      {count > 0 && (
        <span
          className="
          absolute 
          -top-2 
          -right-2 
          flex 
          items-center 
          justify-center 
          min-w-[18px] 
          h-[18px] 
          px-1 
          text-[10px] 
          font-semibold 
          rounded-full 
          bg-brand-steel 
          text-white
        "
        >
          {count}
        </span>
      )}
    </div>
  );
}
