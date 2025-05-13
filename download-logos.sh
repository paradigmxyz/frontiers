#!/bin/bash

# Create directory if it doesn't exist
mkdir -p public/images/logos

# Download logos directly using GitHub's avatar URLs
# Paradigm (organization)
curl -s "https://avatars.githubusercontent.com/u/97369466" -o "public/images/logos/paradigm.svg"
echo "Downloaded paradigm.svg"

# Paradigm repositories
curl -s "https://avatars.githubusercontent.com/u/97369466" -o "public/images/logos/reth.svg"
echo "Downloaded reth.svg"

curl -s "https://avatars.githubusercontent.com/u/97369466" -o "public/images/logos/cryo.svg"
echo "Downloaded cryo.svg"

# Foundry-rs
curl -s "https://avatars.githubusercontent.com/u/99892494" -o "public/images/logos/foundry.svg"
echo "Downloaded foundry.svg"

# Ithaca (Porto)
curl -s "https://avatars.githubusercontent.com/u/105390591" -o "public/images/logos/porto.svg"
echo "Downloaded porto.svg"

# wevm (wagmi, viem)
curl -s "https://avatars.githubusercontent.com/u/139895814" -o "public/images/logos/wagmi.svg"
echo "Downloaded wagmi.svg"

curl -s "https://avatars.githubusercontent.com/u/139895814" -o "public/images/logos/viem.svg"
echo "Downloaded viem.svg"

# alloy-rs
curl -s "https://avatars.githubusercontent.com/u/99956280" -o "public/images/logos/alloy.svg"
echo "Downloaded alloy.svg"

# bluealloy (revm)
curl -s "https://avatars.githubusercontent.com/u/99883015" -o "public/images/logos/revm.svg"
echo "Downloaded revm.svg"

echo "All logos downloaded successfully!" 