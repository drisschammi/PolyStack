FROM node:18-alpine

WORKDIR /app

# Copy package files
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

COPY . .

EXPOSE 5173

# Start the Vite development server
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0", "--port", "5173"]