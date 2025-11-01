# Vercel Environment Variables Setup

Your Vietnam Launchpad site needs these environment variables to work properly.

## Required Environment Variables

| Variable | Description | Example Value |
|----------|-------------|---------------|
| `SENDGRID_API_KEY` | SendGrid API key for contact form emails | `SG.xxxxx...` |
| `CONTACT_EMAIL` | Email where form submissions are sent | `hello@vietnamlaunchpad.com` |
| `FROM_EMAIL` | From address for automated emails | `noreply@vietnamlaunchpad.com` |
| `NEXT_PUBLIC_GA_ID` | Google Analytics 4 tracking ID (optional) | `G-XXXXXXXXXX` |

---

## Method 1: Using Vercel CLI (Recommended)

### Quick Setup Script

Run the setup script (easiest way):

```bash
./setup-vercel-env.sh
```

This will prompt you for each variable and add it to all environments (production, preview, development).

### Manual CLI Commands

Or add them manually one by one:

```bash
# 1. SendGrid API Key (required for contact form)
vercel env add SENDGRID_API_KEY
# When prompted, paste your SendGrid API key
# Select: Production, Preview, Development (all three)

# 2. Contact Email
echo "hello@vietnamlaunchpad.com" | vercel env add CONTACT_EMAIL
# Select: Production, Preview, Development (all three)

# 3. From Email
echo "noreply@vietnamlaunchpad.com" | vercel env add FROM_EMAIL
# Select: Production, Preview, Development (all three)

# 4. Google Analytics (optional)
vercel env add NEXT_PUBLIC_GA_ID
# When prompted, enter your GA4 tracking ID like: G-XXXXXXXXXX
# Select: Production, Preview, Development (all three)
```

---

## Method 2: Using Vercel Dashboard (Alternative)

1. Go to your Vercel project: https://vercel.com/dashboard
2. Select your **vietnam-launchpad** project
3. Go to **Settings** → **Environment Variables**
4. Add each variable:

### SENDGRID_API_KEY
- **Key:** `SENDGRID_API_KEY`
- **Value:** Your SendGrid API key (get from https://app.sendgrid.com/settings/api_keys)
- **Environments:** ✅ Production, ✅ Preview, ✅ Development

### CONTACT_EMAIL
- **Key:** `CONTACT_EMAIL`
- **Value:** `hello@vietnamlaunchpad.com` (or your email)
- **Environments:** ✅ Production, ✅ Preview, ✅ Development

### FROM_EMAIL
- **Key:** `FROM_EMAIL`
- **Value:** `noreply@vietnamlaunchpad.com`
- **Environments:** ✅ Production, ✅ Preview, ✅ Development

### NEXT_PUBLIC_GA_ID (Optional)
- **Key:** `NEXT_PUBLIC_GA_ID`
- **Value:** `G-XXXXXXXXXX` (your Google Analytics 4 tracking ID)
- **Environments:** ✅ Production, ✅ Preview, ✅ Development

5. Click **Save** for each variable

---

## Getting Your SendGrid API Key

1. Sign up for SendGrid: https://signup.sendgrid.com/
2. Free tier includes 100 emails/day (perfect for getting started)
3. Go to **Settings** → **API Keys**
4. Click **Create API Key**
5. Name it: `Vietnam Launchpad Contact Form`
6. Permissions: **Restricted Access** → Enable **Mail Send** only
7. Click **Create & View**
8. **Copy the API key** (you won't see it again!)
9. Add it to Vercel using one of the methods above

---

## Getting Your Google Analytics ID

1. Go to Google Analytics: https://analytics.google.com/
2. Create a new property for your website
3. Set up a **Web** data stream
4. Your tracking ID will be in format: `G-XXXXXXXXXX`
5. Copy and add to Vercel

---

## Verify Setup

After adding environment variables:

```bash
# Pull environment variables to local .env.local file
vercel env pull

# Check that .env.local was created
cat .env.local
```

You should see all your environment variables listed.

---

## Deploy with New Environment Variables

```bash
# Option 1: Deploy via Vercel CLI
vercel --prod

# Option 2: Push to GitHub (auto-deploys)
git push origin main
```

---

## Testing Contact Form Locally

To test the contact form on your local machine:

1. Create `.env.local` in project root
2. Add your environment variables:

```env
SENDGRID_API_KEY=SG.your_actual_api_key_here
CONTACT_EMAIL=hello@vietnamlaunchpad.com
FROM_EMAIL=noreply@vietnamlaunchpad.com
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

3. Restart your dev server:

```bash
# Stop current server (Ctrl+C)
npm run dev
```

4. Go to http://localhost:3000/contact
5. Submit the form
6. Check your email for the notification!

---

## Troubleshooting

### Contact form not working?
- Check that `SENDGRID_API_KEY` is set in Vercel
- Verify API key has "Mail Send" permission in SendGrid
- Check Vercel deployment logs for errors

### Emails not arriving?
- Check spam folder
- Verify `CONTACT_EMAIL` is correct
- Check SendGrid activity log for delivery status

### Google Analytics not tracking?
- Verify `NEXT_PUBLIC_GA_ID` format is correct (`G-XXXXXXXXXX`)
- Check browser console for GA errors
- Variables starting with `NEXT_PUBLIC_` are available in browser

---

## Next Steps

✅ Add environment variables to Vercel
✅ Get SendGrid API key
✅ Get Google Analytics ID (optional)
✅ Deploy to production
✅ Test contact form
✅ Start getting leads!

🎉 **Your site is ready to capture leads!**
