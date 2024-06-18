"use client";
import React from "react";
import { useState } from "react";
import { fetchSummary } from "../../ai";
export default function Page() {
  const [userInput, setUserInput] = useState("");
  const [literaryDevices, setLiteraryDevices] = useState<string[]>([]);
  let summary = "";

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      summary = await fetchSummary(userInput);
      console.log("Summary:", summary);
      setLiteraryDevices(summary.split(","));
    } catch (error) {
      console.error("Error fetching summary:", error);
    }
  };

  return (
    <div>
      <h1>Literary Devices Analyzer</h1>
      <form onSubmit={handleSubmit}>
        <textarea
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder="Enter your text here..."
          rows={20}
          cols={50}
        />
        <button type="submit">Analyze</button>
      </form>
      {literaryDevices.length > 0 && (
        <div>
          <h2>Found Literary Devices:</h2>
          <ul>
            {literaryDevices.map((device, index) => (
              <li key={index}>{device}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

