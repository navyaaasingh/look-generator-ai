type Props = {
  title: string;
  description: string;
  items: string[];
};

export default function LookCard({ title, description, items }: Props) {
  return (
    <div className="border border-neutral-800 rounded-xl p-6">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-neutral-400 mb-4">{description}</p>

      <ul className="list-disc list-inside text-sm text-neutral-300 space-y-1">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
