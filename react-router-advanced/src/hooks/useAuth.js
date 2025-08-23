// src/hooks/useAuth.js
import { useState } from "react";

export function useAuth() {
  // simulate authentication state
  const [isAuthenticated] = useState(true); // change to false to test redirect

  return { isAuthenticated };
}
