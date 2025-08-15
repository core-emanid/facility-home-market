# Use Node.js 20 Alpine for smaller image size
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package files first for better caching
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy the rest of the application
COPY . .

# Expose the port that Astro uses
EXPOSE 4567

# Default command to run the development server
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"] 