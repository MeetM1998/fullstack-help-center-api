import React from "react";

const Footer = () => (
  <footer className="bg-black text-white p-6 mt-10">
    <div className="grid grid-cols-4 gap-4">
      <div>
        <h4 className="font-bold mb-2">Abstract</h4>
        <ul>
          <li>Branches</li>
        </ul>
      </div>
      <div>
        <h4 className="font-bold mb-2">Resources</h4>
        <ul>
          <li>Blog</li>
          <li>Help Center</li>
          <li>Release Notes</li>
          <li>Status</li>
        </ul>
      </div>
      <div>
        <h4 className="font-bold mb-2">Community</h4>
        <ul>
          <li>Twitter</li>
          <li>LinkedIn</li>
          <li>Facebook</li>
          <li>Dribbble</li>
          <li>Podcast</li>
        </ul>
      </div>
      <div>
        <h4 className="font-bold mb-2">Company</h4>
        <ul>
          <li>About Us</li>
          <li>Careers</li>
          <li>Legal</li>
        </ul>
      </div>
    </div>
    <p className="text-center mt-4">
      © 2022 Abstract Studio Design, Inc. All rights reserved.
    </p>
  </footer>
);

export default Footer;
