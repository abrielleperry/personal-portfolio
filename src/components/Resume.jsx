import React from "react";

export default function Resume() {
  return (
    <div className="bg-white flex flex-col md:flex-row min-h-screen p-8 gap-8">
      {/* Left Section: Text */}
      <div className="w-full md:w-1/4 flex flex-col items-start">
        <h2 className="font-publicSans uppercase text-lg font-semibold tracking-widest mb-4">
          Resume
        </h2>
        <p className="font-dmSerifDisplay text-5xl leading-relaxed">
          Download or view my resume for more details about my work experience,
          education, and skills.
        </p>

        <button
          onClick={() => {
            const link = document.createElement("a");
            link.href = "/ATS_Resume_Abrillelle_Perry.pdf";
            link.download = "Abrielle_Perry_Resume.pdf";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
          }}
          className="mt-4 px-4 py-2 bg-white hover:bg-gray-100 text-gray-800 font-semibold border border-gray-400 rounded shadow"
        >
          Download PDF
        </button>
      </div>

      {/* Right Section: PDF Viewer */}
      <div className="w-full md:w-3/4 flex justify-center">
        <iframe
          src="/ATS_Resume_Abrielle_Perry.pdf"
          className="w-full max-w-4xl h-[80vh] rounded-xl shadow-lg border"
          title="Abrielle Perry Resume"
        ></iframe>
      </div>
    </div>
  );
}
