# Use Node.js base image
FROM node:18

# Set working directory
WORKDIR /app

# Copy package.json and install deps
COPY package*.json ./
RUN npm install

# Copy all files
COPY . .

# Expose port 5000
EXPOSE 5000

# Run app
CMD ["npm", "start"]
