import { useState, useEffect } from "react";

export default function useDebounce(operation, delay) {
  const [debouncedOperation, setDebouncedOperation] = useState(operation);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedOperation(operation)
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [operation, delay]);

  return debouncedOperation;
};