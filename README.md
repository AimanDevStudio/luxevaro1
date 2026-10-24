# LUXEVARO - Luxury Perfumes & Watches

A pure frontend website (HTML5, CSS3, vanilla JavaScript). No frameworks, no backend, no database.

## Project structure

```
luxevaro/
├── index.html          Home: hero, featured, collections, brands, about, contact
├── perfumes.html       25 perfumes, grouped by brand (Gucci, Chanel, LV, Dunhill, Creed)
├── watches.html        25 watches, grouped by brand (Rolex, AP, Franck Muller, Patek Philippe, Cartier)
├── cart.html           Cart + "Proceed to Order" form + WhatsApp redirect
├── css/
│   └── style.css       All styling (responsive)
├── js/
│   ├── products.js     ALL product data, brands, prices, store/WhatsApp settings
│   ├── cart.js         Cart (localStorage), cart page, order form, WhatsApp message
│   └── main.js         Header/footer/WhatsApp icon, product cards, filters, animations
└── assets/images/
    ├── perfumes/       25 product images (SVG illustrations)
    ├── watches/        25 product images (SVG illustrations)
    ├── placeholder.svg Fallback if an image path is wrong
    └── favicon.svg
```

## Run locally

**Easiest:** double-click `index.html` to open it in your browser.

**Recommended (VS Code):** install the "Live Server" extension, right-click `index.html`,
choose "Open with Live Server".

**Or with Python:** open a terminal in the project folder and run
`python -m http.server 8000`, then visit http://localhost:8000

Internet is only needed for the Google Fonts; without it the site falls back to Georgia / system fonts.

## Add real prices

Open `js/products.js`. In each product change `price: 0` to a number, e.g. `price: 45000`.
`0` is shown as **Rs. 00**; any other number is shown as e.g. **Rs. 45,000**. The cart,
totals and WhatsApp message update automatically.

## Add real product photos

1. Put your photo in `assets/images/perfumes/` or `assets/images/watches/` (JPG/PNG/WebP).
2. In `js/products.js`, change that product's `image` path, e.g.
   `image: "assets/images/perfumes/creed-aventus.jpg"`.

Use portrait images (ratio about 4:5) with a light background for the best look.
The bundled images are generated illustrations, not photographs; they are placeholders.

## Change the WhatsApp number or payment terms

Edit the `STORE` object at the top of `js/products.js`. (Also update the visible link in
the Contact section of `index.html` if you change the number.)

## Host it for free

The site is static, so any static host works:

- **Netlify Drop:** go to app.netlify.com/drop and drag the whole `luxevaro` folder in.
- **GitHub Pages:** create a repository, upload the files, then Settings > Pages > deploy from the `main` branch.
- **Cloudflare Pages / Vercel:** connect a repository (or upload the folder); no build command is needed and the output folder is the project root.

## Notes

- The cart is stored in your browser's `localStorage` and survives refreshes.
- There are no online payments. Orders are sent as a pre-filled WhatsApp message to +92 325 3139388.
- An order is confirmed only after the seller replies on WhatsApp.
- Product names and descriptions are samples; edit them in `js/products.js`.
