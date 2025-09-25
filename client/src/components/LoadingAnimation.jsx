export default function LoadingAnimation() {
  return (
    <span className="flex space-x-1 p-2">
      <span className="w-2 h-2 bg-white rounded-full animate-bounce"></span>
      <span className="w-2 h-2 bg-white rounded-full animate-bounce [animation-delay:-0.2s]"></span>
      <span className="w-2 h-2 bg-white rounded-full animate-bounce [animation-delay:-0.4s]"></span>
    </span>
  );
}
