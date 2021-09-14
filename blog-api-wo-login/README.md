# Introduction

Database: MySQL 8 Docker container version

## Docker setup

Create container

    docker-compose up -d


Login to the container

    docker exec -it blogAPI bash

Add privileges (Login password = 'strong_password')

    mysql -u root -p

Then

```
ALTER USER db_user IDENTIFIED WITH mysql_native_password BY 'db_user_pass';
flush privileges;
```
