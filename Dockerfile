#Use an official Node.js base image
FROM node:14

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest of your application code to the container
COPY . .

# Build your TypeScript code (adjust the command based on your project setup)
RUN npm run build

# Expose the port your application will run on
EXPOSE 3000

# Start your application (adjust the command based on your project setup)
CMD ["node", "dist/index.js"]