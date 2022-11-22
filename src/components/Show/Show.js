import React from "react";
import "./Show.css";
const Show = () => {
  return (
    <div>
      <div className="movie-container">
        <div className="text-center mt-3 mb-3">
          <iframe
            class="responsive-iframe"
            src="https://www.youtube.com/embed/hflCiNtY6MA?autoplay=1"
            title="I Am Groot | Official Trailer | Disney+"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen="true"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Show;
