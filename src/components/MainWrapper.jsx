export default function MainWrapper({ children }) {
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      {children}
    </div>
  );
}
