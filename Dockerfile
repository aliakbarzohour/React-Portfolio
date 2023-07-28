# Use the Node.js base image
FROM node  

# Set the working directory inside the container to /src
WORKDIR /src  

# Copy package.json and package-lock.json (if exists) from the host to the current working directory in the container
COPY package*.json .  

# Run the command "npm install" to install the dependencies specified in package.json
RUN npm i  

# Copy all files and directories from the host to the current working directory in the container
COPY . .  

# Expose port 3001 on the container
EXPOSE 3001  

# Run the command
CMD ["npm", "start"]  