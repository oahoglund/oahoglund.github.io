# Portfolio Website Development Plan

## Overview
This document outlines the plan for building a personal portfolio website hosted on GitHub Pages. The website will showcase your skills, projects, and professional experience.

## Technology Stack

### Selected Approach
- **HTML5** - Structure
- **CSS3** - Styling (with modern features like Flexbox/Grid)
- **JavaScript (Vanilla ES6+)** - Interactivity
- **GitHub Pages** - Hosting (supports static HTML/CSS/JS natively)

**Decision**: Vanilla HTML/CSS/JavaScript for simplicity and fast deployment without build processes.

## Project Structure

**Single-Page Application Structure** (all sections on one page with smooth scrolling)

```
oahoglund.github.io/
├── index.html              # Single-page landing page with all sections
├── css/
│   ├── style.css           # Main stylesheet
│   ├── responsive.css      # Media queries for mobile (desktop-first approach)
│   └── animations.css      # CSS animations (smooth scroll, parallax, transitions)
├── js/
│   ├── main.js             # Main JavaScript functionality
│   └── animations.js       # Scroll animations, parallax effects, hover interactions
├── images/
│   ├── profile/            # Profile photo/avatar placeholder
│   ├── projects/           # Project screenshots/thumbnails (3 projects)
│   └── icons/              # Icons/logos (GitHub, LinkedIn, etc.)
├── assets/
│   └── resume.pdf          # Downloadable resume (to be added later)
├── README.md               # Project documentation
└── .gitignore              # Git ignore file
```

## Website Sections & Features

### Single-Page Layout (index.html)

All sections on one page with smooth scrolling navigation:

- **Hero Section**
  - Name: Oscar Albert Höglund
  - Title: Data Science Student
  - Brief tagline or mission statement
  - Call-to-action buttons (View Projects, Contact Me)
  - Animated background or hero image (Modern/Bold style)

- **About Section**
  - Professional summary (2-3 paragraphs) - placeholder content to be created
  - Profile photo/avatar placeholder
  - Personal interests (optional)

- **Skills Section**
  - Technical skills organized by category:
    - **Languages**: Python, MySQL, Java, C++
    - **Python Libraries**: NumPy, Pandas, SciPy, Scikit-learn, Statsmodels, Matplotlib, Seaborn, Mayavi
  - Visual representation (tags, icons, or cards with Modern/Bold styling)

- **Projects Section**
  - **3 featured projects** (all on main page, no separate page)
  - Project cards with:
    - Placeholder images (screenshots not ready yet)
    - Project title
    - Brief description
    - Technologies used
    - Links (GitHub, Live Demo if available)
  - Hover effects (cards lift, glow effects)

- **Work Experience Section**
  - Work experience timeline
  - Professional history

- **Education Section**
  - Educational background
  - Current studies (Data Science)

- **Contact Section**
  - Contact form (using Formspree or similar service)
  - Email link (mailto:)
  - Social media links: GitHub, LinkedIn
  - Form validation and smooth submission

- **Footer**
  - Copyright notice
  - Social media links
  - Back to top button (smooth scroll)

## Design Considerations

### Visual Design
- **Color Scheme**: 
  - **Light theme** (bright, clean, professional)
  - Modern/Bold style with vibrant colors and strong typography
  - 2-3 primary colors + neutrals (to be selected based on inspiration site)
  - No dark mode (single theme)
- **Typography**: 
  - Modern font combination (to be selected - fits Modern/Bold aesthetic)
  - Strong typography hierarchy (headings, body, captions)
  - Google Fonts for web-safe fonts
- **Layout**:
  - **Single-page application** (all sections on one page)
  - **Desktop-first** responsive design (designed for desktop, then adapted for mobile)
  - Max content width for readability
  - Modern/Bold layout with vibrant sections
- **Images**:
  - Profile photo placeholder/avatar
  - Project placeholder images (screenshots to be added later)
  - Optimize all images (WebP format, compressed)
  - Use lazy loading for performance

### User Experience (UX)
- **Smooth scrolling navigation** (clicking nav jumps smoothly to sections)
- Fast page load times
- Accessible design (WCAG guidelines)
- Clear navigation menu (desktop-first, mobile adaptation)
- Loading states and transitions
- **No sticky header** (navigation scrolls with page)
- **No hamburger menu** (simplified navigation)

### Interactive Elements
- **Smooth scroll animations** (fade in as you scroll)
- **Parallax effects** (background moves slower than foreground)
- **Hover effects** (cards lift, buttons glow, etc.)
- **Page transitions** (smooth transitions between sections)
- Form validation
- Interactive project cards with hover states

## Development Phases

### Phase 1: Setup & Foundation
- [ ] Set up single-page project structure
- [ ] Create HTML skeleton with all sections (Hero, About, Skills, Projects, Experience, Education, Contact)
- [ ] Set up CSS architecture (desktop-first approach)
- [ ] Configure GitHub Pages
- [ ] Add basic responsive design structure

### Phase 2: Content & Structure
- [ ] Add placeholder content for all sections
- [ ] Implement name: Oscar Albert Höglund, Data Science Student
- [ ] Create skills section with: Python, MySQL, Java, C++, and Python libraries
- [ ] Set up 3 project placeholders (no images yet)
- [ ] Add profile photo placeholder/avatar
- [ ] Implement smooth scroll navigation menu
- [ ] Add GitHub and LinkedIn links

### Phase 3: Styling & Design
- [ ] Design Modern/Bold color scheme (light theme, vibrant colors)
- [ ] Select typography (Modern/Bold style)
- [ ] Style all sections with Modern/Bold aesthetic
- [ ] Implement desktop-first responsive breakpoints
- [ ] Add hover effects (cards lift, buttons glow)
- [ ] Style contact form and email link

### Phase 4: Interactivity & Animations
- [ ] Implement smooth scroll to sections
- [ ] Add scroll animations (fade in as you scroll)
- [ ] Implement parallax effects
- [ ] Add page transitions between sections
- [ ] Create hover effects on project cards
- [ ] Add form handling (Formspree or similar)
- [ ] Implement form validation

### Phase 5: Optimization & Polish
- [ ] Optimize placeholder images
- [ ] Test across browsers
- [ ] Test mobile responsiveness (desktop-first adaptation)
- [ ] Check accessibility
- [ ] Performance optimization
- [ ] Polish animations and transitions

### Phase 6: Deployment & Launch (Polished Launch)
- [ ] Final content review and refinement
- [ ] Test all links (GitHub, LinkedIn, email)
- [ ] Test contact form functionality
- [ ] Prepare resume/CV placeholder location
- [ ] Final polish and perfection
- [ ] Launch and share!

## GitHub Pages Setup

### Initial Setup
1. Repository name must be: `username.github.io` (already correct)
2. Go to repository Settings → Pages
3. Select source branch (usually `main` or `master`)
4. Save - site will be live at `https://username.github.io`

### Custom Domain (Optional)
1. Add `CNAME` file with your domain
2. Configure DNS records with your domain provider
3. Enable "Enforce HTTPS" in GitHub Pages settings

## Content Checklist

### Personal Information
- [x] Name: **Oscar Albert Höglund**
- [x] Current role/title: **Data Science Student**
- [ ] Professional photo (placeholder/avatar to be used)
- [ ] Bio/about me text (placeholder content to be created)
- [ ] Location (optional)

### Skills
- [x] **Languages**: Python, MySQL, Java, C++
- [x] **Python Libraries**: NumPy, Pandas, SciPy, Scikit-learn, Statsmodels, Matplotlib, Seaborn, Mayavi
- [ ] Tools and technologies (to be added if needed)
- [ ] Soft skills (optional)

### Projects
- [ ] 3 project titles and descriptions (placeholders)
- [ ] Project screenshots/thumbnails (not ready - use placeholders)
- [ ] Technologies used for each project
- [ ] GitHub repository links
- [ ] Live demo links (if available)

### Contact Information
- [ ] Email address (to be added)
- [x] GitHub profile (to be linked)
- [x] LinkedIn profile (to be linked)
- [ ] Resume/CV file (wanted but not ready - placeholder location)

## Tools & Resources

### Design Tools
- **Figma/Adobe XD** - Design mockups
- **Coolors.co** - Color palette generator
- **Font Pair** - Typography combinations

### Development Tools
- **VS Code** - Code editor
- **Git** - Version control
- **Browser DevTools** - Testing and debugging
- **Lighthouse** - Performance auditing

### Free Resources
- **Unsplash/Pexels** - Stock photos (if needed)
- **Font Awesome** - Icons
- **Google Fonts** - Web fonts
- **Formspree** - Contact form backend (free tier)

### Testing Tools
- **BrowserStack** - Cross-browser testing
- **WAVE** - Accessibility testing
- **PageSpeed Insights** - Performance testing

## Best Practices

### Code Quality
- Semantic HTML5
- CSS organization (BEM methodology or similar)
- Clean, commented code
- Consistent naming conventions

### Performance
- Optimize images (compress, use appropriate formats)
- Minimize HTTP requests
- Use CSS/JS minification for production
- Leverage browser caching

### SEO
- Meta tags (title, description, keywords)
- Open Graph tags for social sharing
- Semantic HTML structure
- Alt text for images

### Accessibility
- Proper heading hierarchy
- Alt text for images
- ARIA labels where needed
- Keyboard navigation support
- Color contrast compliance

## Maintenance Plan

### Regular Updates
- Update projects as you complete new ones
- Refresh skills section
- Update resume/CV
- Add blog posts (if applicable)
- Monitor analytics (Google Analytics optional)

### Version Control
- Commit frequently with descriptive messages
- Use branches for major features
- Tag releases for milestones

## Next Steps

1. **Review this plan** and adjust based on your preferences
2. **Choose technology stack** (vanilla HTML/CSS/JS recommended to start)
3. **Gather all content** (text, images, project info)
4. **Create design mockup** (optional but recommended)
5. **Start with Phase 1** - Set up project structure
6. **Iterate and improve** - Portfolio websites are never "done"

## Project Summary

### Confirmed Decisions
- **Structure**: Single-page site with smooth scrolling
- **Technology**: Vanilla HTML/CSS/JavaScript
- **Design**: Modern/Bold style with light theme
- **Sections**: Hero, About, Skills, Projects (3), Work Experience, Education, Contact
- **Contact**: Both form and email link
- **Social**: GitHub and LinkedIn
- **Animations**: Smooth scroll, parallax, hover effects, page transitions
- **Responsive**: Desktop-first approach
- **Timeline**: Polished launch (take time to perfect)

### Content Status
- **Name & Title**: Oscar Albert Höglund, Data Science Student ✓
- **Skills**: Languages and Python libraries defined ✓
- **Projects**: 3 projects needed (placeholders for now)
- **Profile Photo**: Placeholder/avatar needed
- **Resume**: Wanted but not ready (placeholder location)
- **Bio**: Placeholder content to be created

### Inspiration
- Reference site: https://eliafantini.github.io/Portfolio/
- Design elements and features from this site will inform the Modern/Bold aesthetic

---

**Next Steps**: Begin Phase 1 - Set up project structure and create HTML skeleton with all sections. Use placeholders for content that needs to be created, and implement the Modern/Bold design aesthetic inspired by the reference portfolio.

