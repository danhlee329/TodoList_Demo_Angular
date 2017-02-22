FROM node:6.9.1
# Begin build steps
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
# ONBUILD will be called an when image is used as the base image,
# I can see times when we will need a base image for our Angular/React
# front-end (base packages), so the 'npm install' can be called only when we
# reference this image, not every build
# ------------------------------------------------------------------------------
# ONBUILD COPY package.json /usr/src/app
# ONBUILD RUN npm install
# ONBUILD COPY . /usr/src/app
# ------------------------------------------------------------------------------
COPY package.json /usr/src/app
RUN npm install
COPY . /usr/src/app
# Expose command you tell Docker which ports should be open and can be bound
# too. You can define multiple ports on the single command, for example, EXPOSE
# 80 433 or EXPOSE 7000-8000)
EXPOSE 3000
# Default command to run when a container is launched
CMD ["npm", "start"]