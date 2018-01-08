#!/usr/bin/env bash

BRANCH=$1
VERSION=$2

case "${BRANCH}" in
  master)
    env="RELEASE"
    tag="latest"
    ;;
  *)
    echo "Error: Branch not allowed:" ${BRANCH}
    exit -1
    ;;
esac

repo="${DOCKER_REGISTRY}/feelometer"
image=${repo}:${VERSION}

echo "Creating and publishing docker image: ${image}..." && \
docker login -u=${DOCKER_USERNAME} -p=${DOCKER_PASSWORD} ${DOCKER_REGISTRY} && \
docker build -t ${image} . && \
docker tag ${image} ${repo}:${tag} && \
docker push ${image} && \

echo "Deploying feelometer to cluster..." && \
kubectl apply -f kubernetes/feelometer-configmap.yml --record && \
kubectl set image deployment/feelometer feelometer=${image} --record && \
echo "first Deploy done" && \
kubectl rollout status deployment/feelometer && \
echo Deployed ${image} to kubernetes cluster