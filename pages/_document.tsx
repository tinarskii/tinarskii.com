import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <div className="loading" id="loader">
          <svg
            width="100"
            height="100"
            viewBox="0 0 100 100"
            preserveAspectRatio="xMidYMid"
          >
            <circle
              cx="50"
              cy="50"
              fill="none"
              stroke="#e15b64"
              strokeWidth="10"
              r="35"
              strokeDasharray="164.93361431346415 56.97787143782138"
            >
              <animateTransform
                attributeName="transform"
                type="rotate"
                repeatCount="indefinite"
                dur="4s"
                values="0 20 20;360 20 20"
                keyTimes="0;4"
              ></animateTransform>
            </circle>
          </svg>
        </div>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
