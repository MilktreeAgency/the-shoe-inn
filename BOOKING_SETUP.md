# The Shoe Inn - Room Booking System Setup

This guide explains how to set up the self-hosted Cal.com booking system for The Shoe Inn.

## Prerequisites

- Docker and Docker Compose installed on your server
- A domain name (e.g., `booking.theshoeinn.co.uk`)
- Stripe account for payment processing
- SMTP credentials for email notifications

## Quick Start

### 1. Configure Environment Variables

Copy the example environment file and fill in your values:

```bash
cp booking-env.example .env
```

Edit `.env` with your actual credentials:

```bash
# Generate secrets
openssl rand -base64 32  # Use for NEXTAUTH_SECRET
openssl rand -hex 16     # Use for CALENDSO_ENCRYPTION_KEY
```

### 2. Start the Booking System

```bash
docker-compose up -d
```

The Cal.com admin interface will be available at `http://localhost:3001`

### 3. Initial Setup

1. Visit `http://localhost:3001` and create your admin account
2. Complete the onboarding wizard
3. Set your timezone to `Europe/London`

### 4. Configure Room Types

Create an "Event Type" for each room with these settings:

| Room | Title | Duration | Price |
|------|-------|----------|-------|
| Room 1 | King Suite - Room 1 | 1440 min (24h) | £110 |
| Room 2 | Garden King - Room 2 | 1440 min (24h) | £110 |
| Room 3 | Cosy Double - Room 3 | 1440 min (24h) | £100 |
| Room 4 | Twin/Super King - Room 4 | 1440 min (24h) | £120 |
| Room 5 | Dog Friendly - Room 5 | 1440 min (24h) | £120 |

For each room, configure:
- **Availability**: Set check-in time (e.g., 3:00 PM) and check-out time (11:00 AM)
- **Buffer time**: Add cleaning buffer between bookings
- **Payment**: Enable Stripe payment with your price per night

### 5. Connect Stripe

1. Go to Settings → Apps → Stripe
2. Click "Connect Stripe Account"
3. Complete the OAuth flow
4. Enable payments on each room event type

### 6. Configure Email

Ensure your SMTP settings in `.env` are correct for booking confirmations.

## Production Deployment

For production, update these values:

```bash
NEXT_PUBLIC_WEBAPP_URL=https://booking.theshoeinn.co.uk
NEXTAUTH_URL=https://booking.theshoeinn.co.uk
```

Use a reverse proxy (Nginx/Caddy) for HTTPS:

```nginx
server {
    listen 443 ssl;
    server_name booking.theshoeinn.co.uk;
    
    location / {
        proxy_pass http://localhost:3001;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }
}
```

## Stripe Integration (Payments)

### 1. Create a Stripe Account

If you don't have one, sign up at https://stripe.com

### 2. Get Your API Keys

1. Log into the Stripe Dashboard
2. Go to Developers → API keys
3. Copy your **Secret key** (starts with `sk_live_` or `sk_test_`)
4. Add it to your `.env` file as `STRIPE_API_KEY`

### 3. Set Up Webhooks

1. In Stripe Dashboard, go to Developers → Webhooks
2. Click "Add endpoint"
3. Enter your webhook URL: `https://booking.theshoeinn.co.uk/api/integrations/stripepayment/webhook`
4. Select events:
   - `checkout.session.completed`
   - `payment_intent.succeeded`
   - `payment_intent.payment_failed`
5. Copy the webhook signing secret to your `.env` as `STRIPE_WEBHOOK_SECRET`

### 4. Configure Payments in Cal.com

1. Go to Settings → Apps in your Cal.com admin
2. Find and enable the Stripe app
3. Connect your Stripe account via OAuth
4. For each room event type, enable payments:
   - Set the price per night
   - Choose whether to collect full payment or deposit
   - Configure refund/cancellation policies

### 5. Test the Integration

1. Use Stripe test mode first (`sk_test_` keys)
2. Test card number: `4242 4242 4242 4242`
3. Any future expiry date and any CVC
4. Complete a test booking to verify the flow

## Embedding in Your Website

The booking widget is already integrated into your React website. Once Cal.com is running, update the `CAL_USERNAME` in `components/features/RoomBooking.tsx` with your Cal.com username.

## Email Notifications (SMTP)

Cal.com sends automatic email confirmations for bookings. You need to configure SMTP settings.

### Option 1: Gmail (Recommended for Testing)

1. Enable 2-factor authentication on your Google account
2. Generate an app-specific password:
   - Go to https://myaccount.google.com/apppasswords
   - Create a new app password for "Mail"
3. Add to your `.env`:
   ```
   EMAIL_SERVER_HOST=smtp.gmail.com
   EMAIL_SERVER_PORT=587
   EMAIL_SERVER_USER=youremail@gmail.com
   EMAIL_SERVER_PASSWORD=your-app-password
   EMAIL_FROM=bookings@theshoeinn.co.uk
   ```

### Option 2: Business Email (Recommended for Production)

Use your business email provider's SMTP settings:

**Microsoft 365:**
```
EMAIL_SERVER_HOST=smtp.office365.com
EMAIL_SERVER_PORT=587
```

**Zoho Mail:**
```
EMAIL_SERVER_HOST=smtp.zoho.eu
EMAIL_SERVER_PORT=587
```

### Option 3: Transactional Email Services (Best for Volume)

For reliable delivery, consider:
- **SendGrid**: Free tier available
- **Mailgun**: Pay-as-you-go pricing
- **Amazon SES**: Cheapest at scale

### Email Templates

Cal.com includes default email templates for:
- Booking confirmation
- Booking reminder (24 hours before)
- Booking cancellation
- Booking rescheduled

You can customize these in the Cal.com admin under Settings → Workflow.

## Troubleshooting

### Database Issues
```bash
docker-compose down
docker volume rm the-shoe-inn_cal_postgres_data
docker-compose up -d
```

### View Logs
```bash
docker-compose logs -f cal
```

### Restart Services
```bash
docker-compose restart
```

## Support

- Cal.com Documentation: https://cal.com/docs
- Cal.com GitHub: https://github.com/calcom/cal.com

