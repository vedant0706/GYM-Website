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
        <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex justify-center items-center">
          <div className="relative w-[90%] max-w-3xl h-[60vh] bg-black shadow-lg rounded">
            {/* ❌ Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-2 right-2 text-white text-2xl font-bold"
            >
              &times;
            </button>

            {/* 📺 YouTube Video */}
            <iframe
              className="w-full h-full rounded"
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