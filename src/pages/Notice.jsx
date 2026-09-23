{/* =====================================================
    MOVING NOTICE TICKER
===================================================== */}

{tickerNotices.length > 0 && (
  <div className="notice-ticker">

    <div className="ticker-label">
      <BellIcon />
      Notices
    </div>

    <div className="ticker-window">

      <div className="ticker-track">

        {/* FIRST COPY */}

        <div className="ticker-group">

          {tickerNotices.map((notice) => {

            const recent = isRecentNotice(notice.date);

            return (
              <button
                type="button"
                className={`ticker-item ${
                  recent ? "recent" : "old"
                }`}
                key={`ticker-${notice.id}`}
                onClick={() => setSelectedNotice(notice)}
                aria-label={`View ${notice.title}`}
              >

                <span className="ticker-dot"></span>

                {recent && (
                  <span className="ticker-new">
                    NEW
                  </span>
                )}

                <span>
                  {notice.title}
                </span>

              </button>
            );
          })}

        </div>

        {/* SECOND COPY */}

        <div
          className="ticker-group"
          aria-hidden="true"
        >

          {tickerNotices.map((notice) => {

            const recent = isRecentNotice(notice.date);

            return (
              <button
                type="button"
                className={`ticker-item ${
                  recent ? "recent" : "old"
                }`}
                key={`ticker-copy-${notice.id}`}
                onClick={() => setSelectedNotice(notice)}
                tabIndex={-1}
              >

                <span className="ticker-dot"></span>

                {recent && (
                  <span className="ticker-new">
                    NEW
                  </span>
                )}

                <span>
                  {notice.title}
                </span>

              </button>
            );
          })}

        </div>

      </div>

    </div>

  </div>
)}
