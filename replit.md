# Jermann Barry Lutsai - Cybersecurity Portfolio

## Overview

This is a personal portfolio website for Jermann Barry Lutsai ("Lutsai the Tech Guy"), a Junior SOC Analyst and cybersecurity professional. The site showcases his professional background, certifications, projects, and skills in cybersecurity while also introducing his upcoming company, GuardZen, which will offer Cybersecurity as a Service (CaaS).

The application is a full-stack web application built with React on the frontend and Express on the backend, featuring a modern, responsive design inspired by contemporary developer portfolios and cybersecurity aesthetics.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System**
- React with TypeScript for type-safe component development
- Vite as the build tool and development server for fast HMR (Hot Module Replacement)
- Single-page application (SPA) using Wouter for client-side routing

**UI Component System**
- shadcn/ui component library (New York style variant) for consistent, accessible UI components
- Radix UI primitives for headless, accessible component foundations
- Tailwind CSS for utility-first styling with custom design tokens
- Class Variance Authority (CVA) for component variant management

**Design System**
- Custom color palette aligned with cybersecurity/tech aesthetic (deep blue, electric green, charcoal, white)
- Typography: Inter for body text, Space Mono for technical elements
- Responsive design with mobile-first approach
- Dark mode support with CSS custom properties
- Consistent spacing primitives using Tailwind's spacing scale

**State Management & Data Fetching**
- TanStack Query (React Query) for server state management and caching
- React Hook Form with Zod validation for form handling
- Custom hooks for mobile detection and toast notifications

**Portfolio Sections**
- Hero section with professional introduction and tagline
- About section with bio and statistics
- Skills/Services showcase
- Projects portfolio with detailed descriptions
- Certifications display
- Contact form with validation
- Footer with GuardZen branding and quick links

### Backend Architecture

**Server Framework**
- Express.js with TypeScript for the HTTP server
- ESM (ECMAScript Modules) module system
- Custom middleware for request logging and JSON body parsing

**API Design**
- RESTful API endpoints under `/api` prefix
- Contact form endpoint (`POST /api/contact`) for message submissions
- Admin endpoint (`GET /api/contact/messages`) for retrieving contact messages
- Structured JSON responses with success/error indicators

**Data Validation**
- Zod schemas for runtime type validation
- Shared schema definitions between client and server via `@shared` directory
- Input validation on contact form (name min 2 chars, valid email, message min 10 chars)

**Development Features**
- Hot module replacement via Vite middleware in development
- Request/response logging with timing information
- Replit-specific plugins for error overlay and development banner
- Path alias resolution for clean imports

### Data Storage

**Current Implementation**
- In-memory storage (`MemStorage` class) for development/demo purposes
- Stores users and contact messages in JavaScript Maps
- UUID-based ID generation for entities

**Database Configuration**
- Drizzle ORM configured for PostgreSQL
- Schema definitions using Drizzle's PostgreSQL table builder
- Migration system configured with output to `./migrations` directory
- Two main tables defined:
  - `users`: Authentication/user management (id, username, password)
  - `contact_messages`: Contact form submissions (id, name, email, message, createdAt)

**Design Decision**: The application uses in-memory storage for simplicity but includes full Drizzle ORM configuration and schema definitions, indicating preparation for PostgreSQL integration. This allows for rapid prototyping while maintaining a clear migration path to persistent storage.

### External Dependencies

**UI Component Libraries**
- @radix-ui/* packages: Comprehensive suite of accessible, unstyled UI primitives (accordions, dialogs, dropdowns, popovers, tooltips, etc.)
- embla-carousel-react: Carousel/slider functionality
- lucide-react: Icon library for consistent iconography
- cmdk: Command menu component

**Styling & Design**
- Tailwind CSS: Utility-first CSS framework
- class-variance-authority: Type-safe component variants
- clsx & tailwind-merge: Conditional class name management

**Forms & Validation**
- react-hook-form: Performant form state management
- @hookform/resolvers: Integration between React Hook Form and validation libraries
- zod: TypeScript-first schema validation
- drizzle-zod: Generate Zod schemas from Drizzle ORM definitions

**Data Fetching & State**
- @tanstack/react-query: Async state management and caching
- wouter: Lightweight routing library

**Backend Infrastructure**
- express: Web server framework
- drizzle-orm: TypeScript ORM for SQL databases
- @neondatabase/serverless: Serverless PostgreSQL driver for Neon database
- connect-pg-simple: PostgreSQL session store (prepared for future use)

**Date & Time**
- date-fns: Modern date utility library

**Development Tools**
- Vite plugins for Replit integration (@replit/vite-plugin-*)
- TypeScript for type safety across the stack
- ESBuild for production bundling

**Database Provider**
- Configured for Neon Database (serverless PostgreSQL)
- DATABASE_URL environment variable required for database connection
- Supports connection pooling and edge deployment