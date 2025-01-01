"use client";

import { Button } from "antd";
import { useState } from "react";

interface ToggleButtonProps {
  onToggle: (value: "PERSONAL" | "BUSINESS") => void;
}

export function ToggleButton({ onToggle }: ToggleButtonProps) {
  const [active, setActive] = useState<"PERSONAL" | "BUSINESS">("PERSONAL");

  const handleToggle = (value: "PERSONAL" | "BUSINESS") => {
    setActive(value);
    onToggle(value);
  };

  return (
    <div className="inline-flex rounded-lg bg-gray-100 p-1">
      <Button
        variant={active === "PERSONAL" ? "default" : "ghost"}
        onClick={() => handleToggle("PERSONAL")}
        className="rounded-md px-8"
      >
        PERSONAL
      </Button>
      <Button
        variant={active === "BUSINESS" ? "default" : "ghost"}
        onClick={() => handleToggle("BUSINESS")}
        className="rounded-md px-8"
      >
        BUSINESS
      </Button>
    </div>
  );
}
