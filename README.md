# AI Engineer Resume Website

A modern, responsive, black-and-white resume website built with Eleventy (11ty).

## Features

- Clean black-and-white minimalist design
- Responsive layout for all devices
- Dark mode support
- Component-based architecture with Nunjucks templates
- Fast static site generation with Eleventy
- SCSS for styling with automatic compilation
- Smooth animations and transitions
- Optimized for performance and SEO

## Getting Started

### Prerequisites

- Node.js (version 14 or newer)
- npm or yarn

### Installation

1. Clone this repository
2. Install dependencies:

```bash
npm install
```

### Development

To run the development server:

```bash
npm start
```

This will start the Eleventy development server with hot reloading and SCSS compilation.

### Building for Production

To build the site for production:

```bash
npm run build
```

This will:
- Compile and optimize SCSS to CSS
- Build the site with Eleventy in production mode
- Output everything to the `_site` directory

## Customization

### Content

Edit the JSON files in the `src/_data` directory to update:

- `site.json` - General website information
- `about.json` - About section content
- `experience.json` - Work experience
- `education.json` - Education history
- `certifications.json` - Professional certifications
- `skills.json` - Technical and soft skills
- `projects.json` - Portfolio projects
- `contact.json` - Contact information

### Styling

The styles are written in SCSS and located in `src/assets/scss/styles.scss`.

### Templates

The site uses Nunjucks templates located in:
- `src/_includes/layouts/` - Page layouts
- `src/_includes/partials/` - Reusable components
- `src/_includes/sections/` - Resume sections

## Deployment

The built site can be deployed to any static site hosting platform such as:
- Netlify
- Vercel
- GitHub Pages
- AWS S3

## License

This project is licensed under the MIT License.