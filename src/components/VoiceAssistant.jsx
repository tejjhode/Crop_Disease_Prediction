// components/VoiceAssistant.jsx
import React, { useState } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

function VoiceAssistant({ setPlantDetails }) {
  const { transcript, resetTranscript } = useSpeechRecognition();
  const [listening, setListening] = useState(false);

  const handleStart = () => {
    setListening(true);
    SpeechRecognition.startListening({ continuous: true });
  };

  const handleStop = () => {
    setListening(false);
    SpeechRecognition.stopListening();
    setPlantDetails(transcript); // Use transcript as the input
  };

  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return <span>Your browser does not support speech recognition.</span>;
  }

  return (
    <div className="mt-4">
      <button
        onClick={listening ? handleStop : handleStart}
        className={`bg-${listening ? 'red' : 'green'}-500 text-white font-bold py-2 px-4 rounded`}
      >
        {listening ? "Stop Listening" : "Start Voice Input"}
      </button>
      <p className="mt-2 text-gray-700">Transcript: {transcript}</p>
    </div>
  );
}

export default VoiceAssistant;
