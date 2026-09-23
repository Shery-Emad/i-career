import { env } from "@/config/env";

export class ApiError extends Error {
  status: number;

  constructor(message: string, status: number) {
    super(message);
    this.name = "ApiError";
    this.status = status;
  }
}

/**
 * Thin fetch wrapper for the future HTTP catalog API.
 * Only used once NEXT_PUBLIC_USE_MOCK_API is "false" and
 * NEXT_PUBLIC_API_BASE_URL is set.
 */
export async function apiFetch<T>(path: string, init?: RequestInit): Promise<T> {
  if (!env.apiBaseUrl) {
    throw new ApiError(
      "NEXT_PUBLIC_API_BASE_URL is not set. Set it or keep NEXT_PUBLIC_USE_MOCK_API=true.",
      500,
    );
  }

  const response = await fetch(`${env.apiBaseUrl}${path}`, {
    ...init,
    headers: {
      "Content-Type": "application/json",
      ...init?.headers,
    },
  });

  if (!response.ok) {
    throw new ApiError(`Request to ${path} failed`, response.status);
  }

  return (await response.json()) as T;
}
