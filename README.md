
# Mogachi Ruch — Goan Flavours, Made with Love

**A Taste of Goa. Tradition in Every Bite.**

Mogachi Ruch is a Shopify e-commerce storefront inspired by Goa's culinary heritage, traditional recipes, and regional flavours. The project combines a warm visual identity with a modern shopping experience.

---

## Live Storefront

**Website:** [Visit Mogachi Ruch](https://b0xwha-1b.myshopify.com/)

**Storefront Password:** `123456`

If prompted by the storefront password page, enter the password above.

**GitHub Repository:** [mogachi-ruch-shopify-theme](https://github.com/joshua14134/mogachi-ruch-shopify-theme)

> Note: The password works only while Shopify storefront password protection is enabled and the password remains unchanged. Public access may require completing Shopify's plan and launch requirements.

---

## About the Project

Mogachi Ruch celebrates Goan food culture through a branded online storefront designed to showcase traditional food products and regional specialties.

The design direction draws on coastal inspiration, earthy colours, traditional flavours, and editorial layouts to create a distinctive food-shopping experience.

## Features

- **Goan-Inspired Visual Identity** — Design inspired by Goa's culinary traditions and coastal character.
- **Announcement Bar** — Space for promotional messages and store announcements.
- **Custom Navigation** — Categories for Home, Shop, Masalas, Pickles, Sweets, Gifts, and About, depending on store configuration.
- **Editorial Homepage** — A visual introduction to the brand and its products.
- **Product Collections** — Organized product categories for browsing.
- **Responsive Layout** — Designed for desktop and mobile screens.
- **Shopify Integration** — Uses Shopify's native products, collections, cart, and checkout.
- **Brand Storytelling** — Communicates the inspiration behind the store.

Feature availability depends on the implemented theme code and Shopify store configuration.

---

## Technology Stack

- Shopify
- Shopify Liquid
- HTML5
- CSS3
- JavaScript
- Shopify Theme Schema
- Git
- GitHub
- Shopify CLI

---

## Project Structure

```text
mogachi-ruch-shopify-theme/
├── assets/       # Stylesheets, scripts, fonts and images
├── config/       # Theme settings and configuration
├── layout/       # Main Shopify layout
├── locales/      # Language and translation files
├── sections/     # Homepage and reusable sections
├── snippets/     # Reusable Liquid components
└── templates/    # Homepage, product and collection templates
```

The exact structure depends on the files included in the repository.

---

## Getting Started

### Prerequisites

- Git
- Node.js and npm
- Shopify CLI
- Access to a Shopify store with theme permissions

### 1. Clone the Repository

```bash
git clone https://github.com/joshua14134/mogachi-ruch-shopify-theme.git
cd mogachi-ruch-shopify-theme
```

### 2. Install Shopify CLI

```bash
npm install -g @shopify/cli
```

Verify the installation:

```bash
shopify version
```

### 3. Authenticate with Shopify

```bash
shopify auth login
```

Complete authentication in your browser.

### 4. Start Local Development

```bash
shopify theme dev --store b0xwha-1b.myshopify.com
```

Shopify CLI will provide a local development preview URL.

### 5. Validate the Theme

```bash
shopify theme check
```

Review the output and resolve relevant errors before deploying.

---

## Deployment

Shopify hosts the storefront, while GitHub stores the source code and tracks changes.

### Upload an Unpublished Theme

```bash
shopify theme push --unpublished --store b0xwha-1b.myshopify.com
```

Review the uploaded theme in Shopify before publishing.

### Publish the Theme

1. Open Shopify Admin.
2. Navigate to **Online Store → Themes**.
3. Preview the uploaded theme.
4. Test navigation, product pages, cart functionality, and mobile layouts.
5. Complete any required Shopify plan and store configuration.
6. Publish the approved theme.

Publishing makes the selected theme the live storefront theme. Storefront password protection must also be configured appropriately for public access.

### Push Future Changes to GitHub

After editing the theme locally:

```bash
git add .
git commit -m "Update Mogachi Ruch theme"
git push
```

These commands update GitHub. They do not automatically deploy changes to Shopify unless a deployment workflow or GitHub integration is configured.

---

## Customization

Depending on the installed theme and its settings, you may customize:

- Logo and brand assets
- Announcement bar
- Navigation menus
- Homepage imagery and content
- Product collections
- Promotional sections
- Footer navigation
- Store policies and links

Use Shopify's theme editor for supported settings and edit the relevant Liquid, CSS, and JavaScript files for code-level changes.

---

## Security

- Do not commit API keys, access tokens, or private customer information.
- Review configuration files before making the repository public.
- Avoid publishing storefront passwords in a public repository.
- Change or remove the documented password if it is no longer secure.

---

## License

All rights reserved unless a separate license is provided.

Branding, imagery, and third-party materials remain subject to their respective rights.

---

## Project Information

**Project:** Mogachi Ruch — Shopify E-Commerce Theme

**Category:** Food & E-Commerce

**Platform:** Shopify

**Live Store:** [b0xwha-1b.myshopify.com](https://b0xwha-1b.myshopify.com/)

**Source Code:** [GitHub Repository](https://github.com/joshua14134/mogachi-ruch-shopify-theme)

---

**Mogachi Ruch**

*Traditional Goan Flavours. Made with Love.*
