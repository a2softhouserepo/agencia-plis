export default function LogoBand({ id }: { id?: string } = {}) {
  const logos = Array.from({ length: 20 });

  return (
    <div id={id} className="w-full overflow-hidden bg-dark py-6">
      <div className="flex items-center gap-12 animate-[scroll_20s_linear_infinite]">
        {logos.map((_, i) => (
          <span
            key={i}
            className="font-archivo text-3xl font-bold text-accent whitespace-nowrap opacity-40 select-none"
          >
            GIZ
          </span>
        ))}
      </div>
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
