import { useState } from "react";

export default function FileUploader() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  return (
    <div className="flex flex-col items-center p-4 border rounded-lg shadow-md max-w-sm mx-auto">
      <input
        type="file"
        id="fileInput"
        onChange={handleFileChange}
        className="hidden"
      />
      <label
        htmlFor="fileInput"
        className="cursor-pointer bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
      >
        Sélectionner un fichier
      </label>
      {selectedFile && (
        <p className="mt-3 text-sm text-gray-700">
          Fichier sélectionné : {selectedFile.name}
        </p>
      )}
    </div>
  );
}
