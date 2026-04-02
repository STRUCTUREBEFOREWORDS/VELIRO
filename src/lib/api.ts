const API_BASE = "https://api.arcwove.com";

export async function trackEvent(payload: {
  event_type: string;
  page_url?: string;
  referrer?: string;
  device_type?: string;
  metadata?: Record<string, unknown>;
}) {
  try {
    navigator.sendBeacon(
      "https://api.arcwove.com/events",
      JSON.stringify(payload)
    );
  } catch (e) {
    // サイレントフェイル
  }
}

export async function getKpiSummary() {
  const res = await fetch(`${API_BASE}/kpi/summary`);
  return res.json();
}
