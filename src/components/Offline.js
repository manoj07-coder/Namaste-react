const Offline = () => {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-gray-900 text-white z-50 p-6 text-center">
      <div className="relative w-40 h-40 mb-6 animate-spin-slow">
        <div className="absolute inset-0 rounded-full border-4 border-dashed border-white opacity-40"></div>
        <span className="absolute inset-0 flex items-center justify-center text-4xl">
          🚀
        </span>
      </div>
      <h1 className="text-2xl font-bold mb-2">Lost in Space</h1>
      <p className="text-gray-300 max-w-md">
        It seems you’ve drifted away from the internet galaxy. We’re holding
        your spot until you’re back online!
      </p>
    </div>
  );
};

export default Offline;
