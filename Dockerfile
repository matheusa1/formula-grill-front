
FROM node:20.17.0

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install project dependencies
RUN npm install -g bun
RUN bun i

# Copy the rest of the application source code to the container
COPY . .

# Expose the port your Nest.js application is listening on
EXPOSE 3000

ADD start.sh /
RUN chmod +x /start.sh

# Command to start your Nest.js application
CMD ["/start.sh"]