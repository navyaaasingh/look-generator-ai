type Props = {
  selectedVibes: string[];
  toggleVibe: (vibe: string) => void;
};

const VIBES = [
  "Streetwear",
  "Techwear",
  "Minimal",
  "Old Money",
  "Y2K",
  "Avant-Garde",
];

export default function VibeSelector({ selectedVibes, toggleVibe }: Props) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
      {VIBES.map((vibe) => {
        const active = selectedVibes.includes(vibe);

        return (
          <button
            key={vibe}
            onClick={() => toggleVibe(vibe)}
            className={`rounded-xl px-4 py-3 text-sm font-medium transition
              ${
                active
                  ? "bg-white text-black shadow-md"
                  : "bg-neutral-900 text-neutral-300 hover:bg-neutral-800"
              }`}
          >
            {vibe}
          </button>
        );
      })}
    </div>
  );
}
