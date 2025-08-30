# S Senior Safety Landing Page

## Overview

This is a marketing landing page for S Senior Safety, a patented safety sticker product designed for senior drivers (65+) in Europe. The application is built as a full-stack TypeScript project with a React frontend and Express backend. It serves as a promotional website showcasing the product's features, benefits, and contact information, with plans for expansion across European markets.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript and Vite for development and build tooling
- **Styling**: Tailwind CSS with custom design system using CSS variables for theming
- **UI Components**: Radix UI primitives with shadcn/ui component library for consistent, accessible interface elements
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query (React Query) for server state management and API data fetching
- **Form Handling**: React Hook Form with Zod validation for type-safe form management

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Development**: Development server uses tsx for TypeScript execution, production builds with esbuild
- **Storage Interface**: Abstracted storage layer with in-memory implementation (MemStorage) and interface for future database integration
- **API Design**: RESTful API structure with `/api` prefix for all endpoints

### Data Storage Solutions
- **Current**: In-memory storage for development and basic user management
- **Configured**: Drizzle ORM with PostgreSQL support for production deployment
- **Database**: Neon Database serverless PostgreSQL configured for scalable cloud deployment
- **Schema**: User management schema with username/password authentication structure

### Authentication and Authorization
- **Session Management**: Express sessions with PostgreSQL session store (connect-pg-simple)
- **Schema**: Basic user authentication with username and password fields
- **Security**: Prepared for secure session handling and user management

### Build and Development
- **Development**: Vite development server with HMR (Hot Module Replacement) for fast development cycles
- **Production**: Static build output with Express server for production deployment
- **Type Safety**: Full TypeScript coverage across frontend, backend, and shared schema definitions
- **Path Aliases**: Configured import aliases for clean code organization (@/, @shared/, @assets/)

## External Dependencies

### UI and Styling
- **Radix UI**: Complete set of accessible, unstyled React components for building the interface
- **Tailwind CSS**: Utility-first CSS framework with custom design tokens and theming
- **Lucide React**: Icon library for consistent iconography throughout the application
- **Class Variance Authority**: Type-safe component variant handling for design system consistency

### Database and ORM
- **Drizzle ORM**: Type-safe SQL ORM with PostgreSQL dialect configuration
- **Neon Database**: Serverless PostgreSQL database provider for cloud deployment
- **Drizzle Zod**: Integration between Drizzle schema and Zod validation for type safety

### Development Tools
- **Vite**: Modern build tool with fast HMR and optimized production builds
- **TypeScript**: Static type checking across the entire application stack
- **ESBuild**: Fast bundler for production server builds
- **PostCSS**: CSS processing with Tailwind CSS and autoprefixer plugins

### Deployment Platform
- **Replit**: Development and hosting platform with specific plugins for error handling and development experience
- **Replit Cartographer**: Development tool integration for enhanced debugging and development workflow