# Portfolio Website Setup Guide

## Quick Start

Your portfolio website is ready! Here's what you need to do:

### 1. Update Contact Form (Formspree)

The contact form is set up to use Formspree. You need to:

1. Go to [Formspree.io](https://formspree.io) and create a free account
2. Create a new form and get your form ID
3. Open `index.html` and find this line (around line 280):
   ```html
   <form class="contact-form" id="contact-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```
4. Replace `YOUR_FORM_ID` with your actual Formspree form ID

### 2. Update Contact Information

In `index.html`, update these sections:

- **Email address** (line ~270): Replace `your.email@example.com` with your actual email
- **GitHub link** (line ~272): Replace `https://github.com/oahoglund` with your GitHub profile URL
- **LinkedIn link** (line ~275): Replace `https://linkedin.com/in/oahoglund` with your LinkedIn profile URL

### 3. Add Your Projects

Update the 3 project placeholders in `index.html` (Projects section):

- Replace "Project Title 1/2/3" with your actual project names
- Add project descriptions
- Update technology tags
- Add GitHub repository links
- Add live demo links (if available)

### 4. Add Your Experience

Update the Work Experience section in `index.html`:

- Replace placeholder text with your actual work experience
- Add more timeline items if needed

### 5. Update Education Details

In the Education section:

- Replace "University Name" with your actual university
- Update the degree name if different
- Add more education items if needed

### 6. Add Profile Photo (Optional)

When you have a profile photo ready:

1. Save it as `images/profile/profile.jpg` (or .png)
2. In `index.html`, replace the profile placeholder div with:
   ```html
   <img src="images/profile/profile.jpg" alt="Oscar Albert Höglund" class="profile-photo">
   ```
3. Add CSS for `.profile-photo` in `css/style.css`:
   ```css
   .profile-photo {
       width: 300px;
       height: 300px;
       border-radius: 20px;
       object-fit: cover;
       box-shadow: var(--shadow-xl);
   }
   ```

### 7. Add Project Screenshots (Optional)

When you have project screenshots:

1. Save them in `images/projects/` (e.g., `project1.jpg`, `project2.jpg`, `project3.jpg`)
2. In `index.html`, replace the project placeholder divs with:
   ```html
   <img src="images/projects/project1.jpg" alt="Project Title" class="project-image">
   ```

### 8. Add Resume/CV (Optional)

When you have your resume ready:

1. Save it as `assets/resume.pdf`
2. Add a download button in the About or Contact section:
   ```html
   <a href="assets/resume.pdf" download class="btn btn-primary">
       <i class="fas fa-download"></i> Download Resume
   </a>
   ```

### 9. Deploy to GitHub Pages

1. Commit all your changes:
   ```bash
   git add .
   git commit -m "Initial portfolio website"
   git push origin main
   ```

2. Go to your GitHub repository settings
3. Navigate to "Pages" in the left sidebar
4. Under "Source", select the branch (usually `main` or `master`)
5. Click "Save"
6. Your site will be live at `https://oahoglund.github.io` in a few minutes!

### 10. Customize Colors (Optional)

If you want to change the color scheme, edit the CSS variables in `css/style.css` (lines 8-30):

```css
:root {
    --primary-color: #6366f1;    /* Change this */
    --secondary-color: #ec4899;   /* Change this */
    --accent-color: #f59e0b;      /* Change this */
    /* ... */
}
```

## File Structure

```
oahoglund.github.io/
├── index.html              # Main page (all sections)
├── css/
│   ├── style.css           # Main styles (Modern/Bold theme)
│   ├── responsive.css       # Responsive styles (desktop-first)
│   └── animations.css      # Animation styles
├── js/
│   ├── main.js             # Main functionality (smooth scroll, form)
│   └── animations.js      # Scroll animations & parallax
├── images/
│   ├── profile/            # Profile photo (add when ready)
│   ├── projects/           # Project screenshots (add when ready)
│   └── icons/              # Icons/logos
├── assets/
│   └── resume.pdf          # Resume (add when ready)
└── README.md
```

## Features Included

✅ Single-page design with smooth scrolling  
✅ Modern/Bold design with light theme  
✅ Responsive design (desktop-first)  
✅ Smooth scroll animations  
✅ Parallax effects  
✅ Hover effects on cards and buttons  
✅ Contact form (Formspree integration)  
✅ Social media links (GitHub, LinkedIn)  
✅ All sections: Hero, About, Skills, Projects, Experience, Education, Contact  

## Next Steps

1. Fill in all placeholder content
2. Add your projects, experience, and education details
3. Update contact information and social links
4. Set up Formspree for the contact form
5. Add profile photo and project screenshots
6. Deploy to GitHub Pages
7. Share your portfolio!

## Need Help?

- Check the `PLAN.md` for the full development plan
- Review `PROJECT_SUMMARY.md` for quick reference
- All your decisions are documented in `CLARIFICATIONS.md`

Happy building! 🚀

