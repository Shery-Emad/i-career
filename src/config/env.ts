export const env = {
  apiBaseUrl: process.env.NEXT_PUBLIC_API_BASE_URL ?? "",
  useMockApi: process.env.NEXT_PUBLIC_USE_MOCK_API !== "false",
};
