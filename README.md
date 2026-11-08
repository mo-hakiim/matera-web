# Mastera Agency Website

A lightweight static marketing site built with plain HTML, CSS, and JavaScript. No build step or package installation is required.

The home page presents brand identity and social media campaign work in separate galleries. The Our Work page groups the same projects into those two categories. A persistent dark/charcoal theme switch, animated client marquee, floating visual elements, and scroll-in section transitions are included.

## Preview locally

Open `index.html` in a browser, or serve this folder with any static web server.

## Publish with GitHub Pages

1. Push this repository to GitHub.
2. Open the repository's **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Select the `main` branch and `/ (root)` folder, then save.

The site entry point is `index.html`. Pages for Home, About, Our Work, and Contact are linked with relative paths so they work from a project subpath.

The contact form uses a `mailto:` action and opens the visitor's email application. It does not submit to a server.
