import React, { useEffect, useState } from "react";

function AnnouncementPopup() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const lastShown = localStorage.getItem("vfaw_popup_shown");
    const now = Date.now();

    // Show popup if never shown
    // or if 24 hours have passed
    if (
      !lastShown ||
      now - Number(lastShown) > 24 * 60 * 60 * 1000
    ) {
      setShowPopup(true);
    }
  }, []);

  const closePopup = () => {
    setShowPopup(false);

    localStorage.setItem(
      "vfaw_popup_shown",
      Date.now().toString()
    );
  };

  if (!showPopup) {
    return null;
  }

  return (
    <>
      <style>{`
        .vfaw-announcement-overlay {
          position: fixed;
          inset: 0;
          z-index: 99999;

          display: flex;
          align-items: center;
          justify-content: center;

          padding: 20px;

          background: rgba(0, 0, 0, 0.20);
          backdrop-filter: blur(7px);

          animation: vfawOverlayIn 0.25s ease;
        }

        .vfaw-announcement-popup {
          position: relative;

          width: min(92vw, 720px);
          max-height: 90vh;

          background: #ffffff;
          border-radius: 18px;

          overflow: hidden;

          box-shadow:
            0 25px 80px rgba(0, 0, 0, 0.28);

          animation: vfawPopupIn 0.3s ease;
        }

        .vfaw-announcement-image {
          display: block;

          width: 100%;
          height: auto;

          max-height: 90vh;

          object-fit: contain;
        }

        .vfaw-announcement-close {
          position: absolute;
          top: 12px;
          right: 12px;

          z-index: 2;

          width: 38px;
          height: 38px;

          border: none;
          border-radius: 50%;

          background: rgba(255, 255, 255, 0.95);
          color: #222;

          font-size: 27px;
          line-height: 1;

          cursor: pointer;

          display: flex;
          align-items: center;
          justify-content: center;

          box-shadow:
            0 4px 15px rgba(0, 0, 0, 0.18);

          transition: all 0.2s ease;
        }

        .vfaw-announcement-close:hover {
          transform: scale(1.08);
          background: #ffffff;
        }

        @keyframes vfawPopupIn {
          from {
            opacity: 0;
            transform: scale(0.94) translateY(12px);
          }

          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        @keyframes vfawOverlayIn {
          from {
            opacity: 0;
          }

          to {
            opacity: 1;
          }
        }

        @media (max-width: 600px) {
          .vfaw-announcement-overlay {
            padding: 14px;
          }

          .vfaw-announcement-popup {
            width: 96vw;
            border-radius: 14px;
          }

          .vfaw-announcement-close {
            width: 34px;
            height: 34px;

            top: 8px;
            right: 8px;

            font-size: 24px;
          }
        }
      `}</style>

      <div
        className="vfaw-announcement-overlay"
        onClick={closePopup}
      >
        <div
          className="vfaw-announcement-popup"
          onClick={(event) => event.stopPropagation()}
        >
          <button
            className="vfaw-announcement-close"
            onClick={closePopup}
            aria-label="Close announcement"
          >
            ×
          </button>

          <img
            src="/popup/announcement.jpg"
            alt="VFAW Announcement"
            className="vfaw-announcement-image"
          />
        </div>
      </div>
    </>
  );
}

export default AnnouncementPopup;
