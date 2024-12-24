import React, { useEffect } from "react";

function App() {
  useEffect(() => {
    // Wait for Zendesk to be ready
    const waitForZendesk = setInterval(() => {
      if (window.zE) {
        clearInterval(waitForZendesk);

        // Open Messenger chat window when page loads
        window.zE("messenger", "open");

        // Close the page when messenger window is closed
        window.zE("messenger:on", "close", () => {
          window.close();
        });
      }
    }, 100);

    // Cleanup interval on component unmount
    return () => clearInterval(waitForZendesk);
  }, []);

  return <div />;
}

export default App;
