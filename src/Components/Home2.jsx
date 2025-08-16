import React, {useState} from 'react'

const Home2 = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <>
      {/* ▶️ Trigger Button */}
      <button
        onClick={handleOpen}
        className="bg-sky-400 text-black font-bold px-5 py-2 rounded-lg hover:scale-110">
        Watch Video
      </button>

      {/* 🪟 Modal */}
      {isOpen && (
          <div className="fixed inset-0 bg-black/80 z-50 flex justify-center py-80">
      <div className="relative w-full max-w-3xl h-[60vh] sm:h-[70vh] md:h-[80vh] bg-black shadow-lg rounded-lg overflow-hidden">
        {/* ❌ Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-2 right-3 text-red-500 cursor-pointer text-4xl font-bold z-10"
        >
          &times;
        </button>

        {/* 📺 YouTube Video */}
        <iframe
          className="w-full h-full border-1 p-10 border-gray-900"
          src="https://www.youtube.com/embed/bVce0qSREK8?autoplay=1"
          title="YouTube video player"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        ></iframe>
      </div>
    </div>
      )}
    </>
  );
};

export default Home2