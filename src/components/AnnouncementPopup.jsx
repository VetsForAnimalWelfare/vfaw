
import React, { useEffect, useState } from "react";

function AnnouncementPopup() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    setShowPopup(true);
  }, []);

  const closePopup = () => {
    setShowPopup(false);
  };

  useEffect(() => {
    if (!showPopup) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closePopup();
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [showPopup]);

  if (!showPopup) return null;

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
          background: rgba(9, 20, 38, 0.58);
          -webkit-backdrop-filter: blur(9px);
          backdrop-filter: blur(9px);
          animation: vfawOverlayIn 0.3s ease both;
        }

        .vfaw-announcement-popup {
          position: relative;
          width: min(100%, 460px);
          max-height: calc(100dvh - 32px);
          display: flex;
          flex-direction: column;
          overflow: hidden;
          background: #ffffff;
          border: 1px solid rgba(255, 255, 255, 0.8);
          border-radius: 24px;
          box-shadow:
            0 30px 90px rgba(0, 0, 0, 0.32),
            0 5px 20px rgba(7, 89, 184, 0.12);
          animation: vfawPopupIn 0.4s cubic-bezier(0.2, 0.8, 0.2, 1) both;
        }

        .vfaw-announcement-header {
          position: relative;
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 17px 58px 17px 20px;
          background: linear-gradient(135deg, #0759b8 0%, #0879d9 100%);
          color: #ffffff;
        }

        .vfaw-announcement-logo {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          width: 43px;
          height: 43px;
          border: 1px solid rgba(255, 255, 255, 0.38);
          border-radius: 14px;
          background: rgba(255, 255, 255, 0.15);
          font-size: 23px;
        }

        .vfaw-announcement-heading {
          min-width: 0;
        }

        .vfaw-announcement-title {
          margin: 0;
          font-size: 16px;
          font-weight: 750;
          line-height: 1.4;
          letter-spacing: -0.25px;
        }

        .vfaw-announcement-subtitle {
          margin: 3px 0 0;
          color: rgba(255, 255, 255, 0.84);
          font-size: 12px;
          line-height: 1.4;
        }

        .vfaw-announcement-close {
          position: absolute;
          top: 50%;
          right: 14px;
          z-index: 3;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
          padding: 0;
          transform: translateY(-50%);
          border: 1px solid rgba(255, 255, 255, 0.35);
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.14);
          color: #ffffff;
          font-size: 25px;
          line-height: 1;
          cursor: pointer;
          transition: background 0.2s ease, transform 0.2s ease;
        }

        .vfaw-announcement-close:hover {
          transform: translateY(-50%) rotate(90deg);
          background: rgba(255, 255, 255, 0.28);
        }

        .vfaw-announcement-video-wrap {
          position: relative;
          width: 100%;
          max-height: calc(100dvh - 130px);
          overflow: hidden;
          background: #080808;
          line-height: 0;
        }

        .vfaw-announcement-video {
          display: block;
          width: 100%;
          aspect-ratio: 9 / 16;
          max-height: calc(100dvh - 130px);
          border: 0;
          background: #080808;
        }

        .vfaw-announcement-footer {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 7px;
          padding: 12px 16px;
          background: #ffffff;
          color: #64748b;
          font-size: 11px;
          font-weight: 500;
          text-align: center;
          line-height: 1.5;
        }

        .vfaw-announcement-footer-dot {
          width: 7px;
          height: 7px;
          flex-shrink: 0;
          border-radius: 50%;
          background: #0759b8;
          box-shadow: 0 0 0 3px rgba(7, 89, 184, 0.10);
        }

        @keyframes vfawOverlayIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes vfawPopupIn {
          from {
            opacity: 0;
            transform: translateY(18px) scale(0.96);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @media (min-width: 700px) {
          .vfaw-announcement-popup {
            width: min(92vw, 430px);
          }
        }

        @media (max-width: 600px) {
          .vfaw-announcement-overlay {
            padding: 12px;
          }

          .vfaw-announcement-popup {
            width: min(100%, 420px);
            max-height: calc(100dvh - 24px);
            border-radius: 19px;
          }

          .vfaw-announcement-header {
            gap: 10px;
            padding: 13px 52px 13px 14px;
          }

          .vfaw-announcement-logo {
            width: 38px;
            height: 38px;
            border-radius: 12px;
            font-size: 21px;
          }

          .vfaw-announcement-title {
            font-size: 14px;
          }

          .vfaw-announcement-subtitle {
            font-size: 11px;
          }

          .vfaw-announcement-close {
            right: 10px;
            width: 33px;
            height: 33px;
            font-size: 23px;
          }

          .vfaw-announcement-video-wrap {
            max-height: calc(100dvh - 110px);
          }

          .vfaw-announcement-video {
            max-height: calc(100dvh - 110px);
          }

          .vfaw-announcement-footer {
            padding: 10px 12px;
            font-size: 10px;
          }
        }

        @media (max-height: 600px) and (orientation: landscape) {
          .vfaw-announcement-popup {
            width: auto;
            max-width: min(92vw, 300px);
            max-height: calc(100dvh - 16px);
          }

          .vfaw-announcement-header {
            padding-top: 8px;
            padding-bottom: 8px;
          }

          .vfaw-announcement-logo {
            width: 30px;
            height: 30px;
            font-size: 17px;
          }

          .vfaw-announcement-video-wrap {
            max-height: calc(100dvh - 110px);
          }

          .vfaw-announcement-video {
            width: auto;
            height: min(62vh, 430px);
            max-height: calc(100dvh - 110px);
            aspect-ratio: 9 / 16;
          }

          .vfaw-announcement-footer {
            padding: 6px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .vfaw-announcement-overlay,
          .vfaw-announcement-popup {
            animation: none;
          }

          .vfaw-announcement-close {
            transition: none;
          }
        }
      `}</style>

      <div
        className="vfaw-announcement-overlay"
        onClick={closePopup}
        role="presentation"
      >
        <section
          className="vfaw-announcement-popup"
          role="dialog"
          aria-modal="true"
          aria-labelledby="vfaw-announcement-title"
          onClick={(event) => event.stopPropagation()}
        >
          <header className="vfaw-announcement-header">
            <div className="vfaw-announcement-logo" aria-hidden="true">
              🐾
            </div>

            <div className="vfaw-announcement-heading">
              <h2
                className="vfaw-announcement-title"
                id="vfaw-announcement-title"
              >
                Vets for Animal Welfare
              </h2>
              <p className="vfaw-announcement-subtitle">
                An important message from VFAW
              </p>
            </div>

            <button
              type="button"
              className="vfaw-announcement-close"
              onClick={closePopup}
              aria-label="Close announcement"
              title="Close"
            >
              ×
            </button>
          </header>

          <div className="vfaw-announcement-video-wrap">
            

<iframe
  className="vfaw-announcement-video"
  src="https://www.youtube.com/embed/SfRcQlFhEkg?autoplay=1&mute=1&playsinline=1&controls=1&rel=0"
  title="VFAW Announcement Video"
  allow="autoplay; encrypted-media; picture-in-picture; web-share"
  referrerPolicy="strict-origin-when-cross-origin"
  allowFullScreen
/>


          </div>

          <footer className="vfaw-announcement-footer">
            <span className="vfaw-announcement-footer-dot" />
            <span>Promoting compassion, welfare, and a better world for animals.</span>
          </footer>
        </section>
      </div>
    </>
  );
}

export default AnnouncementPopup;
