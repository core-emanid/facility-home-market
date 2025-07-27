# Docker Setup for Facility Home Market

This Docker setup allows you to run the Astro project without installing Node.js, Astro, or any other dependencies locally.

## Prerequisites

- Docker
- Docker Compose

## Quick Start

### Development Environment

To start the development server with hot reloading:

```bash
# Start development environment
docker-compose up astro-dev

# Or run in background
docker-compose up -d astro-dev
```

The development server will be available at: http://localhost:4567

### Production Environment

To build and serve the production version:

```bash
# Build and start production environment
docker-compose up astro-prod

# Or run in background
docker-compose up -d astro-prod
```

The production server will be available at: http://localhost:4568

## Available Commands

### Development Commands

```bash
# Start development server
docker-compose up astro-dev

# Stop development server
docker-compose down

# View logs
docker-compose logs -f astro-dev

# Execute commands inside the container
docker-compose exec astro-dev npm run build
docker-compose exec astro-dev npm run preview
```

### Production Commands

```bash
# Build and start production server
docker-compose up astro-prod

# Rebuild production image
docker-compose build astro-prod

# Stop production server
docker-compose down
```

### General Commands

```bash
# Start both environments
docker-compose up

# Stop all services
docker-compose down

# Rebuild all images
docker-compose build

# Remove all containers and images
docker-compose down --rmi all --volumes --remove-orphans
```

## File Structure

- `Dockerfile` - Development environment
- `Dockerfile.prod` - Production build
- `docker-compose.yml` - Main compose configuration
- `docker-compose.override.yml` - Development overrides
- `.dockerignore` - Files to exclude from build

## Development Workflow

1. **Start Development Server:**
   ```bash
   docker-compose up astro-dev
   ```

2. **Make Changes:** Edit files in your local directory - changes will be reflected immediately due to volume mounting.

3. **View Changes:** Open http://localhost:4567 in your browser.

4. **Stop Server:**
   ```bash
   docker-compose down
   ```

## Troubleshooting

### Port Already in Use
If port 4567 is already in use, you can change it in `docker-compose.yml`:
```yaml
ports:
  - "3000:4567"  # Change 3000 to any available port
```

### Permission Issues
If you encounter permission issues on Linux:
```bash
sudo chown -R $USER:$USER .
```

### Container Won't Start
Check logs for errors:
```bash
docker-compose logs astro-dev
```

### Rebuild After Package Changes
If you modify `package.json`:
```bash
docker-compose build astro-dev
docker-compose up astro-dev
```

## Environment Variables

You can create a `.env` file in the project root to set environment variables:

```env
NODE_ENV=development
# Add other environment variables as needed
```

## Notes

- The development environment uses volume mounting for hot reloading
- Node modules are cached in a Docker volume for better performance
- The production build creates an optimized static build
- Both environments are isolated in their own Docker networks 