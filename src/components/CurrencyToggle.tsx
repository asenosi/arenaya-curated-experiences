import { useState } from "react";
import { Button } from "@/components/ui/button";

export type Currency = "ZAR" | "E";

interface CurrencyToggleProps {
  value: Currency;
  onChange: (currency: Currency) => void;
}

export default function CurrencyToggle({ value, onChange }: CurrencyToggleProps) {
  return (
    <div className="inline-flex rounded-md shadow-sm" role="group">
      <Button
        type="button"
        size="sm"
        variant={value === "ZAR" ? "default" : "outline"}
        onClick={() => onChange("ZAR")}
        className="rounded-r-none"
      >
        ZAR (R)
      </Button>
      <Button
        type="button"
        size="sm"
        variant={value === "E" ? "default" : "outline"}
        onClick={() => onChange("E")}
        className="rounded-l-none"
      >
        E (SZL)
      </Button>
    </div>
  );
}

export function useCurrency() {
  const [currency, setCurrency] = useState<Currency>("ZAR");
  
  const formatPrice = (zarPrice: number, ePrice?: number) => {
    if (currency === "ZAR") {
      return `R ${zarPrice.toLocaleString()}`;
    }
    return `E ${(ePrice || zarPrice).toLocaleString()}`;
  };

  return { currency, setCurrency, formatPrice };
}
