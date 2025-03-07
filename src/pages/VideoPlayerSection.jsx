const VideoPlayerSection = () => {
  return (
    <div className="flex flex-col gap-6 justify-center items-center bg-black mt-10">
      <p className="text-2xl font-bold text-[#5D5DFF]">WATCH OUR PRODUCT</p>
      <div className="relative w-full max-w-4xl bg-black border rounded-lg overflow-hidden">
        <div className="absolute top-2 left-2 flex space-x-2 z-10 bg-black w-full p-2 bg-opacity-50 rounded-lg">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/SSo_EIwHSd4"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="h-[600px] mt-9"
        />
      </div>
    </div>
  );
};

export default VideoPlayerSection;
