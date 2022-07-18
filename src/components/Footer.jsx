import React from "react";

const Footer = () => {
  return (
    <div name="footer">
      <div
        style={{ zIndex: "100" }} //this brings navbar to top , above the other components
        className=" flex justify-between items-center w-full h-20 text-white 
  fixed bg-white px-4 py-1"
      >
        <div>
          <footer class="info">
            <p>
              Created by <a href="https://github.com/sxanni">Opeyemi Sanni</a>
            </p>
            <p>
              Part of{" "}
              <a href="https://www.figma.com/file/vh7mWzH1fFFs0jKBX9tn2w/TaskAura-TODO-App?node-id=222%3A2">
                TaskAura
              </a>
            </p>
            <p>
              Authentication powered by{" "}
              <a href="https://www.passportjs.org">Passport</a>
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Footer;
