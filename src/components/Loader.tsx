export const Loader = () => {
  return (
    <div className="animate-pulse space-y-3">
      {Array.from({ length: 5 }).map((_, i) => (
        <div key={i} className="h-10 bg-gray-200 rounded"></div>
      ))}
    </div>
  );
};