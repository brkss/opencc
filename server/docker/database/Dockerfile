FROM mysql:8.0

ENV MYSQL_ROOT_PASSWORD 123
ENV MYSQL_USER ye
ENV MYSQL_PASSWORD notsecure
ENV MYSQL_DATABASE opencc

ADD ./setup.sql /docker-entrypoint-initdb.d
