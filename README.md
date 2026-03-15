This project uses [Inscribe](https://rahuldshetty.github.io/inscribe/) to generate static HTML files from markdown files.

## Setup Inscribe (MUST REQUIRED)

```bash
# Clone repository to the parent of this directory
git clone https://github.com/rahuldshetty/inscribe.git
cd inscribe
bun install -g .
```

## Running Inscribe with RDS-BLOG

```bash
# Clone this repository locally
git clone https://github.com/rahuldshetty/rahuldshetty.github.io rds-blog
cd rds-blog

# Note:
# If you've cloned the repo with different name, make sure to update the folder name in package.json

# Start live server for development
bun run dev

# Build static HTML files
bun run build

# Deploy to GitHub Pages
bun run deploy
```
