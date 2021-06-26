FROM postgres:latest

RUN usermod -u 1000 postgres

COPY create-uuid-extension.sql ./docker-entrypoint-initdb.d/

EXPOSE 5432