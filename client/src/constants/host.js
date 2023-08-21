export const BASE_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost"
    : "http://35.85.250.157";
export const BASE_WS_URL =
  process.env.NODE_ENV === "development"
    ? "ws://localhost:8000"
    : "ws://35.85.250.157";
