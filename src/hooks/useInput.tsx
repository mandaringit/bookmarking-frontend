import { useState } from "react";

export function useInput<T extends HTMLInputElement | HTMLTextAreaElement>(
  initValue: string
) {
  const [value, setValue] = useState<string>(initValue);
  const onChange = (e: React.ChangeEvent<T>) => setValue(e.target.value);
  return { value, onChange };
}
