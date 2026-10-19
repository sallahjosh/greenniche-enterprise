# GreenNiche Enterprise — Full-Stack Web Application

Zero-waste, climate-smart agribusiness platform for **GreenNiche Enterprise** (Old Ebu / Abuenu, Central Region, Ghana). A public storefront plus a secure admin dashboard built on one backend and one database.

> Tagline: *Zero Waste. Full Value. Processing the Future.*

---

## Status

This repository is under active development, built in phases (see the project spec). Phase 1 is the end-to-end core loop: product discovery → cart → checkout → server-validated order → Paystack test payment verification → admin order processing → customer order tracking.

> ⚠️ **Source documents note:** The original `GreenNiche Business Info.pdf` and `GreenNiche WebApp Requirements.pdf` were not present in the workspace at the start of this build. Verified business facts were taken from the project brief inline and are treated as the source of truth. Any missing data is implemented as a configurable setting or a clearly-labelled placeholder — never as a fabricated fact.

## Brand

- Primary green: `#1B7A4A`
- White: `#FFFFFF`
- Currency: Ghana Cedi (GH₵)

## Monorepo layout

```
greenNiche/
├── frontend/   # Vite + React + TypeScript + Tailwind CSS (storefront + admin)
├── backend/    # Node + Express + TypeScript + Prisma + PostgreSQL
├── img/        # Original images (preserved)
└── README.md
```

## Prerequisites

- Node.js 18+ (LTS recommended)
- npm
- PostgreSQL 14+ (local or hosted, e.g. Supabase/Neon/Railway)

## Quick start

### 1. Backend

```bash
cd backend
cp .env.example .env       # then fill in DATABASE_URL and secrets
npm install
npx prisma generate
npx prisma migrate dev --name init   # creates schema + migrations
npm run seed              # seeds the 4 real products (tagged as seed data)
npm run dev               # http://localhost:4000 (health: /api/v1/health)
```

### 2. Frontend

```bash
cd frontend
cp .env.example .env.local
npm install
npm run dev               # http://localhost:5173
```

## Environment variables

See `backend/.env.example` and `frontend/.env.example`. Never commit real secrets. The backend holds all Paystack/notification keys server-side; the frontend only exposes a safe `VITE_API_URL`.

## Integrations (credential-dependent)

These integration layers are implemented with a **development mode** so the app runs without live credentials. They are NOT operational until real keys are supplied and verified:

| Integration | Status without credentials |
| --- | --- |
| Paystack (payments) | Test mode usable with Paystack test keys. Server-side verify only — browser redirects are never trusted as proof of payment. |
| WhatsApp (notifications) | Dev mode logs messages to DB; no real send. |
| SMS (Hubtel/Twilio) | Dev mode logs to DB; no real send. |
| Email | Dev mode logs to DB; no real send. |

## Images

Six provided photographs were copied to `frontend/public/images/` as `gn-image-1.jpg` … `gn-image-6.jpg`. Their content has not yet been captioned/assigned to specific products or scenes. Map them in `backend` business settings / product records once confirmed.

## Testing

```bash
cd backend && npm test
cd frontend && npm run typecheck && npm run build
```

## Deployment

- **Frontend:** Vercel or Netlify (static build from `frontend/dist`). Set `VITE_API_URL` to the backend origin.
- **Backend:** Any Node host (Railway, Render, Fly.io, EC2). Run `prisma migrate deploy` on release. Provide all secrets via the host's environment variables.

## Security notes

- Passwords hashed with bcrypt; JWT sessions; role-based access control enforced on the backend (never only on the client).
- Admin accounts support two-factor authentication.
- Money stored as `Decimal` (never float).
- Order/payment/inventory updates wrapped in DB transactions to prevent overselling and double-processing.
- Rate limiting, helmet, input validation/sanitisation, and audit logging are enabled on the backend.

## License

Proprietary — GreenNiche Enterprise. All rights reserved.
