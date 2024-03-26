# Use a specific version of Node.js based on Alpine to ensure consistency
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /frontend

# Ensure that the node modules bin is added to PATH for easy command execution
ENV PATH /frontend/node_modules/.bin:$PATH

# Copy both package.json AND package-lock.json
COPY package.json ./

# Install app dependencies
# Consider removing --silent for more verbose output during builds, which can help with debugging
RUN npm install && npm cache clean --force

# Optionally, directly install any troublesome packages to better capture errors during the build
RUN npm install @clerk/clerk-react

# Copy the rest of the app's source code
COPY . ./

# Argument for backend URL with a default value
ARG BACKEND_URL=http://localhost:8000
# Environment variable used by the React app to connect to the backend
ENV REACT_APP_BACKEND_URL=${BACKEND_URL}

# Expose the port the app runs on
EXPOSE 3000

# Command to run the app
CMD ["npm", "start"]
