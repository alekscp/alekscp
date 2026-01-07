# AGENTS.md - Guidelines for Agentic Coding

This document provides guidelines for AI agents working on this static website repository.

## Project Overview

This is a single-page static website consisting of:
- Single `index.html` file (HTML, CSS, and inline JavaScript)
- No build process, dependencies, or frameworks
- No testing framework
- Professional portfolio for a Senior Software & Infrastructure Consultant

## Build/Lint/Test Commands

### Development
```bash
# Open in browser for preview
open index.html

# Or use Python's built-in server for live reload
python3 -m http.server 8000
# Then visit http://localhost:8000
```

### Validation
```bash
# HTML validation (requires html5validator or similar)
pip install html5validator
html5validator --root . --match index.html

# CSS validation (requires stylelint)
npm install -g stylelint
stylelint index.html

# JavaScript linting (requires eslint)
npm install -g eslint
eslint index.html
```

### Testing
```bash
# No automated tests - manual browser testing required
# Test on multiple browsers: Chrome, Firefox, Safari, Edge
# Test responsive breakpoints: 760px, 320px
```

### Deployment
```bash
# Simply upload index.html to web server
# Or deploy to Netlify/Vercel with drag-and-drop
```

## Code Style Guidelines

### HTML
- Use semantic HTML5 elements (`<header>`, `<main>`, `<section>`, `<footer>`, `<nav>`)
- Proper nesting and closing tags
- Lowercase element names
- Quote all attributes
- Self-closing void elements: `<br />`, `<img />`, `<input />`
- Maintain accessible markup (proper ARIA when needed)
- Meta tags for SEO and social sharing in `<head>`

### CSS (Inline in `<style>`)

#### Organization
- CSS variables in `:root` for colors, spacing, sizing
- Mobile-first responsive design
- BEM-like naming: `.hero-left`, `.hero-right`, `.project-title`
- Group related styles together

#### Specific Rules
- Use CSS custom properties (`--bg`, `--fg`, `--accent`) for theming
- Use `rem` for font sizes, spacing, and padding
- Use `px` for borders and small values
- Use `rgba()` for transparency with fallback
- Flexbox and Grid for layouts
- Media queries at `max-width: 760px`
- Keep specificity low; avoid `!important`

#### Transitions
- Use consistent transition timing: `transition: all 0.2s ease;`
- Keep animations subtle and professional
- Consider accessibility with `@media (prefers-reduced-motion: reduce)`

### JavaScript (Inline in `<script>`)

#### General
- Vanilla JavaScript only (no frameworks)
- Modern ES6+ features
- Minimal DOM manipulation
- Event listeners with proper cleanup
- Use `const` and `let`, avoid `var`

#### Patterns
```javascript
// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Dynamic content updates
const yearEl = document.getElementById('year');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}
```

#### Error Handling
- Check for element existence before manipulation
- Graceful degradation for unsupported features
- Try-catch for critical operations

## Naming Conventions

### Files
- `index.html` - Single entry point
- Use lowercase with hyphens if adding files: `styles.css`, `script.js`

### HTML
- Classes: lowercase with hyphens (`.hero-left`, `.btn-secondary`)
- IDs: lowercase with hyphens (`#about`, `#contact`)
- Semantic naming over presentational

### CSS
- Variables: `--bg`, `--fg`, `--accent` (short but descriptive)
- Classes follow BEM: `.block-element--modifier`

### JavaScript
- Variables: camelCase (`currentYear`, `targetElement`)
- Functions: camelCase with verb prefix (`scrollToSection`, `updateYear`)
- Constants: UPPER_CASE (if used)

## Design Guidelines

### Typography
- Use Inter font family (Google Fonts import)
- Hierarchy: h1 → h2 → body → muted text
- Responsive font sizes with `clamp()`
- Line-height: 1.65 for readability

### Colors
- Dark theme: background `#0f172a` to `#1e293b` gradient
- Accent: blue (`#3b82f6`) with hover state (`#60a5fa`)
- Muted text: `#94a3b8`
- High contrast for accessibility (WCAG AA compliant)

### Layout
- Max-width: 920px container
- Grid-based hero section (1.2:1 ratio on desktop)
- Card-based content with subtle hover effects
- Sticky navigation with backdrop blur

### Components
- Cards: semi-transparent background, subtle border, hover lift
- Buttons: primary (blue) and secondary (border) variants
- Tags: pill-shaped, uppercase, small text
- Contact links: large clickable cards with icons

## Responsive Design

- Desktop: Full grid layout
- Mobile (<760px): Single column, stacked
- Touch-friendly spacing and targets
- Readable text at all sizes

## Accessibility

- Semantic HTML structure
- Proper heading hierarchy
- Sufficient color contrast (4.5:1 minimum)
- Keyboard navigation support
- ARIA attributes where needed
- Alt text for images (if added)

## Performance

- Minimal external dependencies
- Optimize images (if added)
- Minify HTML/CSS/JS for production
- Use efficient selectors
- Avoid heavy animations

## Git Workflow

```bash
# Check status
git status

# Stage changes
git add index.html

# Commit with descriptive message
git commit -m "update: refine hero section spacing"

# Push to remote
git push origin website
```

## Special Notes for AI Agents

- This is a personal portfolio for a Senior Software & Infrastructure Consultant
- Maintain professional, clean, and modern aesthetic
- No backend, database, or complex dependencies
- Focus on simplicity, performance, and accessibility
- Single-file architecture means changes affect entire page
- Test across multiple browsers before finalizing

## Tools Recommendations

- **Editor**: VS Code, Sublime Text, or Neovim
- **Browser DevTools**: Chrome/Safari/Firefox
- **Validation**: W3C Validator, stylelint, eslint
- **Performance**: Lighthouse, WebPageTest
- **Accessibility**: axe DevTools, WAVE
- **Deployment**: Netlify, Vercel, or direct file upload

## Common Tasks

### Update Content
1. Edit text directly in HTML
2. Update meta description if needed
3. Test in browser
4. Commit changes

### Modify Styles
1. Update CSS in `<style>` block
2. Check responsive breakpoints
3. Test hover states
4. Verify accessibility

### Add New Section
1. Add `<section>` with semantic ID
2. Update navigation links
3. Apply consistent card styling
4. Ensure mobile responsiveness

## Contact

For questions about this project: me@alekscp.com
