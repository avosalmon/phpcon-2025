# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

### Primary Development

- `composer dev` - Starts the full development environment (PHP server, Vite, queue listener, and logs)
- `composer dev:ssr` - Development with server-side rendering support

### Frontend Commands

- `npm run dev` - Start Vite development server
- `npm run build` - Build for production
- `npm run build:ssr` - Build with SSR support
- `npm run lint` - Run ESLint with auto-fix
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting
- `npm run types` - TypeScript type checking

### Backend Commands

- `composer format` - Format PHP code with Laravel Pint
- `composer test` - Run PHP tests (clears config first)
- `php artisan test` - Run Pest tests directly
- `php artisan migrate:fresh --seed` - Reset database with seeders

### Database Setup

```sh
composer install
php artisan key:generate
php artisan migrate:fresh --seed
npm install
```

## Project Architecture

This is a PHP Conference 2025 presentation built as a full-stack Laravel application with Inertia.js and React. The presentation is structured as slides with navigation and interactive components.

### Technology Stack

- **Backend**: Laravel v12, Inertia.js v2, SQLite
- **Frontend**: React v19, TypeScript, Tailwind CSS v4, Motion (Framer Motion), shadcn/ui
- **Testing**: Pest v3
- **Development**: Vite, Laravel Pint, ESLint, Prettier

### Key Architecture Patterns

#### Slide System

- Routes in `routes/web.php` define slide navigation (`/slides/{name}`)
- Each slide is a separate Inertia page component in `resources/js/pages/slide/`
- `SlideLayout` provides consistent presentation styling with navigation and progress bar
- Keyboard navigation support via `useKeyboard` hook

#### Data Management

- Models represent conference entities: `Speaker`, `TalkProposal`, `Attendee`, `Sponsor`, `Ticket`, `WebsiteTraffic`
- Dashboard demonstrates real-time data loading with `Inertia::defer()` for progressive loading
- SQLite database with comprehensive seeders for demo data

#### Frontend Structure

- **Pages** (`resources/js/pages/`): Inertia page components
- **Components** (`resources/js/components/`): Presentational components (no business logic)
- **UI Components** (`resources/js/components/ui/`): shadcn/ui components
- **Layouts** (`resources/js/layouts/`): Layout wrappers for different page types
- **Hooks** (`resources/js/hooks/`): Custom React hooks
- **Utils** (`resources/js/lib/`): Helper functions including `cn()` for CSS classes

#### Navigation System

- Progress bar shows presentation progress
- Keyboard navigation (arrow keys, space, etc.)
- Mobile-responsive navigation components

### Development Guidelines

#### Frontend

- Use `cn()` function for conditional CSS classes
- Follow React v19 and TypeScript best practices
- Components should be presentational, not contain business logic
- Use motion library for animations following existing patterns
- Reference CSS variables in `resources/css/app.css`

#### Backend

- Use strict typing (`declare(strict_types=1)`)
- Follow Laravel v12 conventions
- Use Pest v3 for testing with `it()` functions and global test functions
- Chain response assertions in tests
- Leverage Inertia's deferred loading for performance

#### Testing

- Write tests using Pest v3 syntax
- Use global functions like `post()` instead of `$this->post()`
- Chain response assertions
- Tests are in `tests/Feature/` and `tests/Unit/`

### File Path Aliases

- `@/*` maps to `resources/js/*` in TypeScript
