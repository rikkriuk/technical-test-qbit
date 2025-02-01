import "@testing-library/jest-dom";
import { TextEncoder, TextDecoder } from "util";

global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;
global.scrollTo = jest.fn();

globalThis.import = {
  meta: {
    env: {
      VITE_BASE_URL: "https://mock-api.example.com",
    },
  },
};
