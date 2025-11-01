#!/bin/bash

# Quick script to add environment variables to Vercel
# Run this after getting your SendGrid API key

echo "🚀 Adding environment variables to Vercel..."
echo ""
echo "This will add variables to ALL environments (production, preview, development)"
echo ""

# CONTACT_EMAIL
echo "📧 Adding CONTACT_EMAIL..."
printf "hello@vietnamlaunchpad.com\nproduction\npreview\ndevelopment\n\n" | vercel env add CONTACT_EMAIL

# FROM_EMAIL
echo "📧 Adding FROM_EMAIL..."
printf "noreply@vietnamlaunchpad.com\nproduction\npreview\ndevelopment\n\n" | vercel env add FROM_EMAIL

# SENDGRID_API_KEY
echo ""
echo "🔑 Now you need to add your SendGrid API key."
echo "Get it from: https://app.sendgrid.com/settings/api_keys"
echo ""
read -p "Press ENTER when you have your SendGrid API key ready..."
echo ""
echo "Adding SENDGRID_API_KEY..."
vercel env add SENDGRID_API_KEY
# You'll be prompted to:
# 1. Enter the value (paste your SendGrid API key)
# 2. Select environments (type: production, preview, development, then empty line)

# NEXT_PUBLIC_GA_ID (optional)
echo ""
read -p "Do you have a Google Analytics ID to add? (y/N): " add_ga
if [[ $add_ga =~ ^[Yy]$ ]]; then
    echo "Adding NEXT_PUBLIC_GA_ID..."
    vercel env add NEXT_PUBLIC_GA_ID
    # You'll be prompted to:
    # 1. Enter the value (your GA4 ID like G-XXXXXXXXXX)
    # 2. Select environments (type: production, preview, development, then empty line)
else
    echo "Skipping Google Analytics (you can add it later)"
fi

echo ""
echo "✅ Done! Environment variables added to Vercel."
echo ""
echo "Next steps:"
echo "1. Deploy: git push origin main"
echo "2. Or trigger manual deploy: vercel --prod"
echo ""
echo "🎉 Your contact form will work on the next deployment!"
