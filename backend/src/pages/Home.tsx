import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="min-h-[80vh] flex flex-col items-center justify-center text-center px-6">
      <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
        Generate Your Perfect Outfit
      </h1>

      <p className="text-neutral-400 max-w-xl mb-10 text-lg">
        Select your fashion vibe and let AI-inspired logic craft a look
        tailored to your aesthetic.
      </p>

      <Link
        to="/generate"
        className="bg-white text-black px-8 py-3 rounded-xl font-medium
                   hover:bg-neutral-200 transition shadow-lg"
      >
        Create a Look
      </Link>
    </section>
  );
}
