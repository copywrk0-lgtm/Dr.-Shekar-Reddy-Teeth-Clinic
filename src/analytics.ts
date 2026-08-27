export type AnalyticsEvent =
  | "booking_open"
  | "booking_continue"
  | "booking_whatsapp"
  | "phone_click"
  | "whatsapp_click"
  | "directions_click"
  | "treatment_view"
  | "review_click";

export function track(event: AnalyticsEvent, params: Record<string, string> = {}) {
  try {
    const w = window as typeof window & {
      gtag?: (...args: unknown[]) => void;
      dataLayer?: unknown[];
    };
    if (w.gtag) w.gtag("event", event, params);
    w.dataLayer?.push({ event, ...params });
  } catch {
    // Analytics must never block a conversion action.
  }
}
