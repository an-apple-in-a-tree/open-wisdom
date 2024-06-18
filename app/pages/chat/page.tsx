"use client";
import React from "react";
import { useState } from "react";
import { fetchSummary } from "../../ai";
export default function Page() {
  const [userInput, setUserInput] = useState("");
  const [response, setResponse] = useState<string[]>([]);
  let summary = "";

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      summary = await fetchSummary(userInput);
      console.log("Summary:", summary);
      setResponse(summary.split(","));
    } catch (error) {
      console.error("Error fetching summary:", error);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Consult Owletta</h1>
      <form onSubmit={handleSubmit} className="max-w-xl mx-auto">
        <textarea
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder="Enter your request here..."
          rows={8}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-lg hover:bg-blue-600 transition duration-300"
        >
          Consult
        </button>
      </form>
      {response.length > 0 && (
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Owletta's response:</h2>
          <div className="w-full bg-white rounded-lg p-4 shadow-lg">
            {response.map((device, index) => (
              <p key={index} className="text-gray-800">
                {device}
              </p>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

