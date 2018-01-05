FROM node:alpine
EXPOSE 8080
ENV PORT 8080
ADD . /srv/staticapp
WORKDIR /srv/staticapp
RUN apk update && apk upgrade && \
    apk add --no-cache bash git openssh
RUN npm install && npm install -g serve && npm run-script build
CMD ["serve", "-s", "build"]
