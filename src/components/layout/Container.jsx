import React from "react";

export default function Container({ children, className = "", as = "div" }) {
  const Comp = as;
  return (
    <Comp className={`mx-auto w-full max-w-5xl px-6 ${className}`}>
      {children}
    </Comp>
  );
}
