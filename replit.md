# Personal Portfolio Website

## Overview

This is a full-stack personal portfolio website built with React and Express.js, showcasing a professional developer's work, skills, and experience. The application features a modern design with dark/light theme switching, responsive layouts, and interactive components. It includes sections for projects, blog posts, a photography gallery with print shop functionality, and a contact system.

## System Architecture

The application follows a full-stack monorepo structure with clear separation between client and server code:

- **Frontend**: React with TypeScript, using Vite as the build tool
- **Backend**: Express.js server with TypeScript
- **Database**: PostgreSQL with Drizzle ORM
- **Styling**: Tailwind CSS with shadcn/ui components
- **State Management**: TanStack Query for server state, React Context for client state
- **Routing**: Wouter for client-side routing
- **Animations**: Framer Motion for smooth transitions and interactions

## Key Components

### Frontend Architecture
- **Component Library**: Built on Radix UI primitives with shadcn/ui
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Theme System**: Dynamic light/dark mode switching
- **Form Handling**: React Hook Form with Zod validation
- **Animation System**: Framer Motion for page transitions and micro-interactions

### Backend Architecture
- **API Structure**: RESTful endpoints for contact forms and external integrations
- **Database Layer**: Drizzle ORM with type-safe queries
- **Security**: CORS configuration, security headers, and input validation
- **Static File Serving**: Express static middleware for assets

### Database Schema
- **Messages Table**: Stores contact form submissions with name, email, message, and timestamp
- **Schema Validation**: Zod schemas for runtime type checking and validation

## Data Flow

1. **Client Requests**: React components make API calls using TanStack Query
2. **Server Processing**: Express routes handle requests, validate input with Zod schemas
3. **Database Operations**: Drizzle ORM executes type-safe database queries
4. **Response Handling**: Server returns JSON responses, client updates UI reactively
5. **State Management**: TanStack Query manages server state caching and synchronization

## External Dependencies

### Core Technologies
- **React 18**: Frontend framework with modern hooks and concurrent features
- **Express.js**: Backend web framework
- **PostgreSQL**: Primary database (configured for Neon serverless)
- **Vite**: Build tool and development server
- **TypeScript**: Type safety across the entire stack

### UI and Styling
- **Tailwind CSS**: Utility-first CSS framework
- **Radix UI**: Accessible component primitives
- **Framer Motion**: Animation library
- **Lucide React**: Icon library

### Development Tools
- **Drizzle Kit**: Database migrations and schema management
- **ESBuild**: Production bundling for server code
- **Replit Integration**: Development environment optimizations

## Deployment Strategy

The application is configured for deployment on Google Cloud Run with the following setup:

- **Build Process**: Client builds to `dist/public`, server bundles with ESBuild
- **Production Server**: Node.js serving both static files and API routes
- **Database**: Neon PostgreSQL serverless database
- **Environment**: Production mode with optimized builds and security headers
- **Port Configuration**: Configured for port 5000 with external port 80 mapping

The deployment uses a two-stage build process:
1. Vite builds the client application
2. ESBuild bundles the server code for production

## Changelog

```
Changelog:
- June 23, 2025. Initial setup
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```