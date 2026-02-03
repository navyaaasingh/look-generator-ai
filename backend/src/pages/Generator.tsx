import { useState } from "react";
import { useNavigate } from "react-router-dom";
import VibeSelector from "../components/VibeSelector";

export default function Generator() {
  const [selectedVibes, setSelectedVibes] = useState<string[]>([]);
  const navigate = useNavigate();

  function toggleVibe(vibe: string) {
    setSelectedVibes((prev) =>
      prev.includes(vibe)
        ? prev.filter((v) => v !== vibe)
        : [...prev, vibe]
    );
  }

  function handleGenerate() {
    if (!selectedVibes.length) return;
    navigate("/results", { state: { vibes: selectedVibes } });
  }

  return (
    <section className="max-w-3xl mx-auto px-6 py-20">
      <h2 className="text-3xl font-semibold mb-3">
        Choose Your Vibe
      </h2>

      <p className="text-neutral-400 mb-10">
        Select one or more fashion aesthetics.
      </p>

      <VibeSelector
        selectedVibes={selectedVibes}
        toggleVibe={toggleVibe}
      />

      <button
        onClick={handleGenerate}
        disabled={!selectedVibes.length}
        className={`mt-12 px-8 py-3 rounded-xl font-medium transition
          ${
            selectedVibes.length
              ? "bg-white text-black hover:bg-neutral-200"
              : "bg-neutral-800 text-neutral-500 cursor-not-allowed"
          }`}
      >
        Generate Look
      </button>
    </section>
  );
}
