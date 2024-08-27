export default function ErrorMessage({ message }: { message: string }) {
  return (
    <div className="w-full h-screen max-w-full flex justify-center items-center mx-auto font-bold text-red-600">
      <span>{message}</span>
    </div>
  );
}
