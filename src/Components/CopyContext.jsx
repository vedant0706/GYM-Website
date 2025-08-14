import { useState } from "react";

export default function CopyContext() {
  const textToCopy = "+91 9326228186";

  const [copied, setCopied] = useState(false);

  function handleCopy() {
    navigator.clipboard.writeText(textToCopy).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1000); // reset after 1.5 sec
    });
  }

  return (
    <div>
        <p
        className="select-text"
        onClick={handleCopy}
        title="Click to copy"
        > 
        {copied ? "Copied!" : textToCopy}
        </p>
    </div>
  );
}