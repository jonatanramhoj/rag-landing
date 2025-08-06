export default function Loader() {
  return (
    <span className="flex justify-center items-center bg-none">
      <span className="sr-only">Loading...</span>
      <span
        className="h-1.5 w-1.5 bg-gray-700 rounded-full animate-bounce [animation-delay:-0.3s] mr-1"
        style={{ animationDuration: "0.3s" }}
      ></span>
      <span
        className="h-1.5 w-1.5 bg-gray-700 rounded-full animate-bounce [animation-delay:-0.15s] mr-1"
        style={{ animationDuration: "0.3s" }}
      ></span>
      <span
        className="h-1.5 w-1.5 bg-gray-700 rounded-full animate-bounce"
        style={{ animationDuration: "0.3s" }}
      ></span>
    </span>
  );
}
