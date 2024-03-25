"use client";

import { useFormStatus } from "react-dom";

function MealsFormButton() {
  const { pending } = useFormStatus();

  return (
    <button type="submit" disabled={pending}>
      {pending ? "Submitting..." : "Share Meal"}
    </button>
  );
}

export default MealsFormButton;
