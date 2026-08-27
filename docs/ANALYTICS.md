# Analytics events

The frontend emits conversion events when a Google Analytics `gtag` function is present:

- `booking_open`
- `booking_continue`
- `booking_whatsapp`
- `phone_click`
- `whatsapp_click`
- `directions_click`
- `treatment_view`
- `review_click`

The event layer is intentionally no-op when analytics is not installed.
