<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

# MumiShop - Jewelry E-commerce Project Instructions

## Project Overview
This is a modern e-commerce platform for handmade jewelry (earrings, bracelets, etc.) built with:
- **Frontend**: Next.js 14 + TypeScript + Tailwind CSS
- **Database**: PostgreSQL 
- **Cache**: Redis
- **Deployment**: Docker containers
- **Target Platform**: Azure (to be discussed)

## Development Guidelines

### Technology Stack
- Use TypeScript for all code
- Follow Next.js App Router patterns
- Use Tailwind CSS for styling
- Implement responsive design (mobile-first)
- Use modern React patterns (hooks, functional components)

### Architecture Principles
- Containerized microservices approach
- Separation of concerns (frontend, API, database)
- RESTful API design
- Security-first approach

### Code Style
- Use functional components with hooks
- Implement proper error handling
- Add TypeScript types for all props and functions
- Use descriptive variable and function names
- Add comments for complex business logic

### E-commerce Features to Implement
- Product catalog with categories (earrings, bracelets, necklaces, etc.)
- Shopping cart functionality
- User authentication and profiles
- Order management system
- Payment integration (Stripe)
- Admin panel for product management
- Image optimization for jewelry photos
- SEO optimization for product pages

### Security Considerations
- Input validation on all forms
- SQL injection prevention
- XSS protection
- CSRF protection
- Secure session management
- Rate limiting

### Performance
- Image optimization for jewelry photos
- Lazy loading
- Caching strategies
- Database query optimization
- CDN usage for static assets

### DevOps/Deployment
- Docker containerization
- Environment-specific configurations
- Health checks
- Logging and monitoring
- CI/CD pipeline considerations
