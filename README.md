This project uses [Inscribe](https://rahuldshetty.github.io/inscribe/) to generate static HTML files from markdown files.

To live debug and watch for changes, run the following command:

```bash
# Clone and switch to inscribe tool folder
git clone https://github.com/rahuldshetty/inscribe.git
cd inscribe

# Run inscribe in dev mode
bun inscribe dev ../rds-blog/
```

To generate HTML files, run the following command:

```bash
# Generate deployable HTML files
bun inscribe build ../rds-blog/ --output ../rds-blog/dist
```
