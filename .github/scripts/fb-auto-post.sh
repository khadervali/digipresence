#!/bin/bash
# Facebook Auto-Poster for DigiPrezence
# Posts a random image + text to Facebook Page every 3 hours via Graph API
set -euo pipefail

PAGE_ID="${FB_PAGE_ID}"
TOKEN="${FB_PAGE_ACCESS_TOKEN}"

if [[ -z "$PAGE_ID" || -z "$TOKEN" ]]; then
  echo "ERROR: FB_PAGE_ID and FB_PAGE_ACCESS_TOKEN must be set"
  exit 1
fi

POSTS=(
  "Your digital presence is more than a website — it's your brand's first impression. At DigiPrezence, we craft web experiences that convert visitors into clients. #DigiPrezence #WebDesign #DigitalAgency"
  "Struggling to rank on Google? DigiPrezence delivers SEO & GEO strategies that put your business on the map — literally. From web design to local search dominance, we've got you covered. #SEO #GEO #Kadapa"
  "Social media isn't just posting — it's connecting. Let DigiPrezence manage your social presence so you can focus on what you do best. #SocialMediaManagement #DigiPrezence"
  "Generative Engine Optimization (GEO) is the future of search. Stay ahead with DigiPrezence — we optimize your content for AI-driven search engines. #GEO #SEO #AI"
  "From Kadapa to the world — DigiPrezence delivers enterprise-grade web solutions for businesses of all sizes. Ready to scale? Let's talk. #WebDevelopment #DigiPrezence"
  "First impressions happen online. Is your brand making the right one? DigiPrezence — your partner in digital excellence. #Branding #WebDesign #DigitalMarketing"
  "Your website is your digital storefront. Make it count. DigiPrezence builds fast, responsive, conversion-optimized websites that tell your story and grow your business. #WebDesign #Kadapa"
  "Rank higher. Get found. Grow faster. DigiPrezence combines SEO, GEO, and stunning design to drive real business results. Let's build your digital ecosystem. #SEO #GROWTH"
)

IMAGES=(
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=630&fit=crop"
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=630&fit=crop"
  "https://images.unsplash.com/photo-1432889821006-31494024baf9?w=1200&h=630&fit=crop"
  "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1200&h=630&fit=crop"
  "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1200&h=630&fit=crop"
  "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?w=1200&h=630&fit=crop"
  "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&h=630&fit=crop"
  "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1200&h=630&fit=crop"
)

RANDOM_INDEX=$((RANDOM % ${#POSTS[@]}))
MESSAGE="${POSTS[$RANDOM_INDEX]}"
IMG_URL="${IMAGES[$RANDOM_INDEX]}"

echo "Posting to page $PAGE_ID..."

RESPONSE=$(curl -s -X POST \
  "https://graph.facebook.com/v22.0/$PAGE_ID/photos" \
  -d "url=$IMG_URL" \
  -d "message=$MESSAGE" \
  -d "access_token=$TOKEN" \
  --connect-timeout 30 \
  --max-time 60)

if echo "$RESPONSE" | grep -q '"id"'; then
  echo "SUCCESS: Posted at $(date) — post ID: $(echo "$RESPONSE" | grep -o '"id":"[^"]*"' | cut -d'"' -f4)"
else
  echo "FAILED: $RESPONSE"
  exit 1
fi
