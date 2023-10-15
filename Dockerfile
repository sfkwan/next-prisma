ARG NGINX_VERSION //Default value provided
ARG TARGET=/what

FROM nginx:${NGINX_VERSION} as base

ARG BASE_PATH

RUN mkdir ${BASE_PATH} 

RUN echo "yoyo" > ${BASE_PATH}/helloworld.txt

FROM nginx:$NGINX_VERSION as build
ARG BASE_PATH
ARG TARGET=internal

COPY --from=base ${BASE_PATH} ${TARGET}

