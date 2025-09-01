# GEMINI MCP Tools Configuration

This configuration file defines the necessary MCP (Model Context Protocol) tools for working with the Lanre Segun Webflow portfolio project.

## Project Overview

This is a Webflow-based portfolio website for Olanrewaju Segun, a Webflow developer and visual designer. The project includes:

- **HTML Structure**: Single-page portfolio with sections for work, about, services, and music
- **CSS Styling**: Custom styles including music section, responsive design, and animations
- **JavaScript Functionality**: GSAP animations, Lenis smooth scrolling, and interactive elements
- **Media Assets**: Images, videos, and fonts
- **External Integrations**: Spotify embeds, Spline 3D scenes, and social media links

## MCP Tools Configuration

### Core Development Tools

```yaml
tools:
  - name: file_operations
    description: "File system operations for managing project files"
    capabilities:
      - read_file
      - write_file
      - delete_file
      - list_directory
      - search_files
    
  - name: code_analysis
    description: "Code analysis and understanding tools"
    capabilities:
      - semantic_search
      - grep_search
      - codebase_search
      - syntax_highlighting
      - dependency_analysis
    
  - name: web_development
    description: "Web development specific tools"
    capabilities:
      - html_validation
      - css_validation
      - javascript_analysis
      - responsive_design_check
      - performance_analysis
```

### Project-Specific Tools

```yaml
  - name: webflow_tools
    description: "Webflow-specific development tools"
    capabilities:
      - webflow_export_analysis
      - webflow_class_extraction
      - webflow_interaction_analysis
      - webflow_cms_integration
      - webflow_ecommerce_support
    
  - name: animation_tools
    description: "GSAP and animation-related tools"
    capabilities:
      - gsap_timeline_analysis
      - animation_performance_check
      - scroll_trigger_optimization
      - custom_ease_analysis
      - text_scramble_effects
    
  - name: media_management
    description: "Media asset management tools"
    capabilities:
      - image_optimization
      - video_compression
      - font_analysis
      - media_metadata_extraction
      - responsive_image_generation
```

### Advanced Tools

```yaml
  - name: performance_optimization
    description: "Performance and optimization tools"
    capabilities:
      - bundle_analysis
      - lazy_loading_implementation
      - critical_css_extraction
      - image_webp_conversion
      - minification_analysis
    
  - name: accessibility_tools
    description: "Accessibility and SEO tools"
    capabilities:
      - wcag_compliance_check
      - seo_analysis
      - meta_tag_optimization
      - alt_text_generation
      - keyboard_navigation_test
    
  - name: deployment_tools
    description: "Deployment and hosting tools"
    capabilities:
      - vercel_deployment
      - netlify_deployment
      - cdn_optimization
      - ssl_certificate_check
      - domain_management
```

## Project Structure Analysis

### Key Files and Directories

```yaml
project_structure:
  root:
    - index.html: "Main HTML file with portfolio content"
    - css/:
      - lenis.css: "Smooth scrolling styles"
      - muradov-design-2-0-ui9t47ne.webflow.shared.79865cc2f.min.css: "Main Webflow styles"
      - music-section.css: "Custom music section styles"
      - splide.min.css: "Carousel/slider styles"
      - swiper-bundle.min.css: "Swiper slider styles"
    - js/:
      - main.js: "Main JavaScript functionality"
      - gsap.min.js: "GSAP animation library"
      - lenis.min.js: "Smooth scrolling library"
      - jquery-3.5.1.min.dc5e7f18c8.js: "jQuery library"
      - splide.min.js: "Carousel/slider library"
      - swiper-bundle.min.js: "Swiper slider library"
      - CustomEase.min.js: "Custom easing functions"
      - ScrollTrigger.min.js: "GSAP scroll trigger plugin"
      - TextPlugin.min.js: "GSAP text animation plugin"
    - images/: "Portfolio images and assets"
    - fonts/: "Custom font files"
    - media/: "Video files for portfolio items"
```

## Development Workflow

### Recommended Tools Usage

1. **File Analysis**: Use `file_operations` and `code_analysis` tools to understand the project structure
2. **Code Review**: Use `web_development` tools to validate HTML, CSS, and JavaScript
3. **Animation Optimization**: Use `animation_tools` to analyze and optimize GSAP animations
4. **Performance**: Use `performance_optimization` tools to improve loading times
5. **Accessibility**: Use `accessibility_tools` to ensure WCAG compliance
6. **Deployment**: Use `deployment_tools` for hosting and CDN optimization

### Common Tasks

```yaml
common_tasks:
  - name: "Add new portfolio item"
    tools: ["file_operations", "webflow_tools", "media_management"]
    steps:
      - "Analyze existing portfolio structure"
      - "Add new HTML content"
      - "Optimize images/videos"
      - "Update CSS styles"
      - "Add JavaScript interactions"
  
  - name: "Optimize animations"
    tools: ["animation_tools", "performance_optimization"]
    steps:
      - "Analyze GSAP timelines"
      - "Check scroll trigger performance"
      - "Optimize text scramble effects"
      - "Test on different devices"
  
  - name: "Improve accessibility"
    tools: ["accessibility_tools", "web_development"]
    steps:
      - "Run WCAG compliance check"
      - "Add missing alt texts"
      - "Improve keyboard navigation"
      - "Optimize meta tags"
```

## Configuration Notes

- **Webflow Export**: This project appears to be exported from Webflow, so maintain the original class structure
- **GSAP Dependencies**: Ensure all GSAP plugins are properly loaded before main.js
- **Responsive Design**: Test on multiple screen sizes using responsive design tools
- **Performance**: Monitor Core Web Vitals and optimize accordingly
- **SEO**: Maintain proper meta tags and structured data for search engines

## Environment Setup

```yaml
environment:
  node_version: "18.x or higher"
  package_manager: "npm or yarn"
  local_server: "Live Server or similar"
  browser_tools: "Chrome DevTools, Firefox Developer Tools"
  performance_monitoring: "Lighthouse, WebPageTest"
```

This configuration provides comprehensive tooling for developing, maintaining, and optimizing the Lanre Segun Webflow portfolio website.
