import React from 'react'

function Button({children, link, title}) {
  return (
    <button className="cursor-pointer group relative flex gap-1.5 px-8 py-4 bg-[#111113] bg-opacity-80 text-[#f1f1f1] rounded-3xl hover:bg-opacity-70 transition font-semibold shadow-md border-2 border-lines-color items-center w-fit hover:border-[#777b84]">
      {children}
      <a href={link}>{title}</a>
    </button>
  );
}

export default Button