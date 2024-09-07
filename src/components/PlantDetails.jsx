import React from "react";
import { FaLeaf, FaDisease, FaPrescriptionBottle } from "react-icons/fa"; // Import icons

function PlantDetails({ plantData }) {
  if (!plantData)
    return (
      <div className="text-center text-gray-600">No plant data available</div>
    );

  return (
    <div className="max-w-2xl mx-auto bg-white shadow-md rounded-lg px-8 pt-6 pb-8">
      <h2 className="text-3xl font-extrabold mb-6 text-green-800 text-center flex items-center justify-center">
        <FaLeaf className="mr-2" />
        Crop Analysis Results
      </h2>
      
      <div className="mb-6">
        <h3 className="text-2xl font-semibold mb-3 text-green-700 flex items-center">
          <FaLeaf className="mr-2 text-green-600" />
          Crop Details
        </h3>
        <p className="text-gray-700 text-lg">{plantData.details}</p>
      </div>

      <div className="mb-6">
        <h3 className="text-2xl font-semibold mb-3 text-green-700 flex items-center">
          <FaDisease className="mr-2 text-red-600" />
          Detected Diseases
        </h3>
        <ul className="list-disc list-inside text-gray-700 text-lg">
          {plantData.diseases.map((disease, index) => (
            <li key={index} className="mb-1">{disease}</li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="text-2xl font-semibold mb-3 text-green-700 flex items-center">
          <FaPrescriptionBottle className="mr-2 text-blue-600" />
          Treatment
        </h3>
        <p className="text-gray-700 text-lg">{plantData.treatment}</p>
      </div>
    </div>
  );
}

export default PlantDetails;
