# Specify a base image
FROM node:alpine

# Specifying the working dir that will be created automatically
WORKDIR /usr/app

# Install some dependencies
# If dependencies have not changes, it will not invalidate the cache
COPY ./package.json ./
RUN npm install

# Copying the rest of files (package.json will be ignored because it was copied before)
COPY ./ ./

# Default command
CMD ["npm", "start"]