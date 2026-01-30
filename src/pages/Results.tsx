import { useLocation, Navigate } from "react-router-dom";
import LookCard from "../components/LookCard";

export default function Results() {
  const location = useLocation();
  const vibes: string[] | undefined = location.state?.vibes;

  if (!vibes) {
    return <Navigate to="/generate" replace />;
  }

  const mockLook = {
    title: `${vibes.join(" + ")} Look`,
    description: "AI-generated outfit based on your selected vibes.",
    items: [
      "Oversized jacket",
      "Tailored trousers",
      "Statement sneakers",
      "Minimal accessories",
    ],
  };

  return (
    <section className="max-w-3xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-semibold mb-6">
        Your Generated Look
      </h2>

      <LookCard {...mockLook} />
    </section>
  );
}
