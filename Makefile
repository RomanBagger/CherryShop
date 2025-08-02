# Makefile for MumiShop Jewelry E-commerce

.PHONY: help dev prod build clean logs shell db-shell

# Default target
help:
	@echo "Available commands:"
	@echo "  dev     - Start development environment"
	@echo "  prod    - Start production environment"
	@echo "  build   - Build production Docker image"
	@echo "  clean   - Remove all containers and volumes"
	@echo "  logs    - Show application logs"
	@echo "  shell   - Open shell in running container"
	@echo "  db-shell - Open PostgreSQL shell"

# Development environment
dev:
	@echo "Starting development environment..."
	docker-compose -f docker-compose.dev.yml up --build

dev-detached:
	@echo "Starting development environment in background..."
	docker-compose -f docker-compose.dev.yml up --build -d

# Production environment
prod:
	@echo "Starting production environment..."
	docker-compose up --build

prod-detached:
	@echo "Starting production environment in background..."
	docker-compose up --build -d

# Build production image
build:
	@echo "Building production Docker image..."
	docker build -t mumishop:latest .

# Clean up
clean:
	@echo "Cleaning up containers and volumes..."
	docker-compose down -v
	docker-compose -f docker-compose.dev.yml down -v
	docker system prune -f

# Show logs
logs:
	docker-compose logs -f app

logs-dev:
	docker-compose -f docker-compose.dev.yml logs -f app-dev

# Open shell in container
shell:
	docker-compose exec app sh

shell-dev:
	docker-compose -f docker-compose.dev.yml exec app-dev sh

# Database shell
db-shell:
	docker-compose exec db psql -U jewelry_user -d jewelry_db

# Install dependencies locally (for IDE support)
install:
	npm install

# Run tests
test:
	npm test

# Lint code
lint:
	npm run lint

# Build locally
build-local:
	npm run build
