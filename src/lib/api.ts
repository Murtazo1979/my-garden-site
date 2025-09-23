// src/lib/api.ts
export async function apiRequest<T>(
  url: string,
  options: RequestInit = {}
): Promise<T> {
  try {
    const response = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
      },
      ...options,
    });

    if (!response.ok) {
      throw new Error(API Error: ${response.status} ${response.statusText});
    }

    return (await response.json()) as T;
  } catch (error) {
    console.error("❌ API request failed:", error);
    throw error;
  }
}
