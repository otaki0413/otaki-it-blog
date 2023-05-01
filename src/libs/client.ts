import { createClient } from "microcms-js-sdk";

// クライアント初期化
export const client = createClient({
  serviceDomain: "otaki-it-blog",
  apiKey: process.env.API_KEY,
});
