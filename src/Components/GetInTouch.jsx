import React from 'react'
import { FaRegPaperPlane } from 'react-icons/fa';

function GetInTouch() {
  return (
    <div className="pb-10">
      <div className="grid grid-cols-3 border-2 border-lines-color rounded border-t-0 ">
        <div className="col-span-1 p-5">
          <h1 className="text-[#edeef0] text-[18px]">Get in touch</h1>
          <p className="text-[#777b84] text-[14px]">
            Send an email or DM and I&apos;ll get back to you asap.
          </p>
        </div>

        <div className="col-span-1 border-l-2 border-r-2 border-lines-color rounded p-5" />

        <div className="col-span-1 flex gap-5 p-5">
          <div>
            <button class="cursor-pointer group relative flex gap-1.5 px-7 py-4 bg-[#111113] bg-opacity-80 text-[#f1f1f1] rounded-3xl hover:bg-opacity-70 transition font-semibold shadow-md border-2 border-lines-color">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                height="24px"
                width="24px"
              >
                <g stroke-width="0" id="SVGRepo_bgCarrier"></g>
                <g
                  stroke-linejoin="round"
                  stroke-linecap="round"
                  id="SVGRepo_tracerCarrier"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <g id="Interface / Download">
                    {" "}
                    <path
                      stroke-linejoin="round"
                      stroke-linecap="round"
                      stroke-width="2"
                      stroke="#f1f1f1"
                      d="M6 21H18M12 3V17M12 17L17 12M12 17L7 12"
                      id="Vector"
                    ></path>{" "}
                  </g>{" "}
                </g>
              </svg>
              Download CV
              <div class="absolute opacity-0 -bottom-full rounded-md py-2 px-2 bg-[#161617] bg-opacity-70 left-1/2 -translate-x-1/2 group-hover:opacity-100 transition-opacity shadow-lg">
                Download
              </div>
            </button>
          </div>
          <div>
            <button class="cursor-pointer group relative flex items-center gap-1.5 px-7 py-4 bg-[#111113] bg-opacity-80 text-[#f1f1f1] rounded-3xl hover:bg-opacity-70 transition font-semibold shadow-md border-2 border-lines-color">
              <FaRegPaperPlane />
              Contact Me
              <div class="absolute opacity-0 -bottom-full rounded-md py-2 px-2 bg-[#161617] bg-opacity-70 left-1/2 -translate-x-1/2 group-hover:opacity-100 transition-opacity shadow-lg">
                contact me
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GetInTouch