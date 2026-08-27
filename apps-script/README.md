# Google Apps Script lead capture

1. Create a Google Sheet for website enquiries.
2. Open Extensions → Apps Script.
3. Add `Code.gs` and copy `Config.gs.example` to `Config.gs`.
4. Set `SHEET_ID`, `SHEET_NAME`, and optional notification email.
5. Deploy → New deployment → Web app.
6. Execute as the sheet owner and allow access required for public website POSTs.
7. Put the deployed URL in Vercel as `VITE_APPS_SCRIPT_URL`.
8. Redeploy the website.

The frontend still opens WhatsApp after the lead capture attempt. The Apps Script is an optional operational layer, not a replacement for clinic confirmation.
