import React, { useState } from 'react';

const DiseaseDetection = () => {
    const [symptoms, setSymptoms] = useState('');
    const [image, setImage] = useState(null);
    const [prediction, setPrediction] = useState('');

    const handleSymptomChange = (e) => {
        setSymptoms(e.target.value);
    };

    const handleImageChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            setImage(e.target.files[0]);
        }
    };

    const analyzeSymptoms = async () => {
        // Placeholder for API integration
        console.log('Analyzing symptoms:', symptoms);
        setPrediction('This is a placeholder for the AI prediction.');
        // Real implementation would involve sending 'symptoms' to an AI backend and updating 'prediction' with the result
    };

    const analyzeImage = async () => {
        // Placeholder for API integration
        console.log('Analyzing image:', image);
        setPrediction('This is a placeholder for the AI prediction based on the image.');
        // Real implementation would involve sending 'image' to an AI backend and updating 'prediction' with the result
    };

    return (
        <div className="py-12 px-6 md:px-24 bg-gray-50">
            <div className="container mx-auto">
                <h2 className="text-3xl font-semibold mb-8 text-gray-800 text-center">AI Disease Detection</h2>

                {/* Symptom-Based Analysis */}
                <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-4 text-gray-700">Symptom Analysis (Heart Disease, Diabetes)</h3>
                    <textarea
                        className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200 text-gray-700"
                        rows="4"
                        placeholder="Enter your symptoms here..."
                        value={symptoms}
                        onChange={handleSymptomChange}
                    />
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4"
                        onClick={analyzeSymptoms}
                    >
                        Analyze Symptoms
                    </button>
                </div>

                {/* Image-Based Analysis */}
                <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-4 text-gray-700">Image Analysis (Pneumonia)</h3>
                    <input
                        type="file"
                        accept="image/*"
                        className="mb-4"
                        onChange={handleImageChange}
                    />
                    <button
                        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        onClick={analyzeImage}
                    >
                        Analyze Image
                    </button>
                </div>

                {/* Prediction Result */}
                {prediction && (
                    <div className="mt-8 p-4 bg-white rounded-lg shadow-md">
                        <h4 className="text-lg font-semibold mb-2 text-gray-700">Prediction:</h4>
                        <p className="text-gray-600">{prediction}</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default DiseaseDetection;