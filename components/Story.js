import React from "react";

function Story({ img, username }) {
  return (
    <div>
      <a href={img} target="_blank">
        <img
          className="h-14 w-14 rounded-full p-[1.5px] border-gold border-2 object-contain cursor-pointer hover:scale-110 transition transform duration-200 ease-out"
          src={img}
          alt=""
        />
        <p className="text-xs w-14 truncate text-center">{username}</p>
      </a>
    </div>
  );
}

export default Story;
