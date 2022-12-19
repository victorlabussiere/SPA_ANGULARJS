# Welcome to MyPics documentation
The development of this project was made with docker images for database environment\
The database chosen was MySQL, and its server was started with mariadb image from docker hub.\
To start according to development process, type the follow command at the terminal with Docker running:
> `docker run --name mypicsdb -d -e MYSQL_ROOT_PASSWORD=mypicspass -p 3306:3306 mariadb:latest` \

## Project's Environment:
 If this project wasn't pulled with the environments variables properly, start the follow steps to start the server correctly
- Create an .env file inside API/ folder
- Type in it the follow content:

``` 
# Server environment
PORT=3333

# Database environment
DB_HOST=3306
DB_USER=root
DB_PASSWORD=mypicspass
DB_NAME=mypicsdb
```