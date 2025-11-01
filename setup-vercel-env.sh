#!/bin/bash

echo "🚀 Setting up Vercel environment variables for Vietnam Launchpad"
echo "================================================================"
echo ""

# Check if vercel is installed
if ! command -v vercel &> /dev/null; then
    echo "❌ Vercel CLI is not installed. Install it with: npm i -g vercel"
    exit 1
fi

echo "📝 You'll be prompted to enter values for each environment variable."
echo "   Press ENTER to use the default value shown in [brackets]"
echo ""

# Function to add environment variable
add_env_var() {
    local var_name=$1
    local default_value=$2
    local description=$3
    local is_secret=${4:-false}

    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
    echo "📌 $var_name"
    echo "   $description"

    if [ "$is_secret" = true ]; then
        read -sp "   Enter value (hidden): " value
        echo ""
    else
        read -p "   Enter value [$default_value]: " value
        value=${value:-$default_value}
    fi

    if [ -n "$value" ]; then
        echo "   Adding to Vercel..."
        echo "$value" | vercel env add "$var_name" production preview development --force
        echo "   ✅ $var_name added"
    else
        echo "   ⏭️  Skipped $var_name"
    fi
    echo ""
}

# Add each environment variable
add_env_var "SENDGRID_API_KEY" "" "Your SendGrid API key (get from sendgrid.com)" true
add_env_var "CONTACT_EMAIL" "hello@vietnamlaunchpad.com" "Email address where contact form submissions will be sent"
add_env_var "FROM_EMAIL" "noreply@vietnamlaunchpad.com" "From email address for automated emails"
add_env_var "NEXT_PUBLIC_GA_ID" "" "Google Analytics 4 ID (optional, format: G-XXXXXXXXXX)"

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "✅ Environment variables setup complete!"
echo ""
echo "Next steps:"
echo "1. Trigger a new deployment: vercel --prod"
echo "2. Or push to GitHub and Vercel will auto-deploy"
echo ""
echo "🎉 Your contact form will work once deployed with these variables!"
