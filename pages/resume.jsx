import React from "react";

const Resume = () => {
  return (
    <div className="text-center mt-10">
      <h1 className="text-3xl font-bold mb-6"></h1>
      <object data="/resume2024.pdf" type="application/pdf" width="100%" height="800px">
        <p>It appears you don&apos;t have a PDF plugin for this browser. No biggie... you can <a href="/resume.pdf" download="resume.pdf">click here to download the PDF file.</a></p>
      </object>
    </div>
  );
};

export default Resume;
