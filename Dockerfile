FROM adeo-docker.jfrog.io/dockerfiles-collection/nginx-datadog-alpine:1.17.8

COPY docker/nginx-default.conf /etc/nginx/conf.d/default.conf
COPY docker/entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

COPY dist/ /usr/share/nginx/html/

ENTRYPOINT ["/entrypoint.sh"]
CMD [ "nginx", "-g", "daemon off;" ]
