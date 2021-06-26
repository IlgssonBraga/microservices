FROM postgres:latest

RUN usermod -u 1000 postgres

CMD [ "psql", "-h", "localhost", "-U" , "postgres", "-d", "video-catalog", "-c", 'CREATE EXTENSION IF NOT EXISTS "uuid-ossp";' ]

EXPOSE 5432