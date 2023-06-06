# Movie website (without using Frameworks)
This is a project challenge to build website with his backend without using UI library, just raw JS/CSS. and also not using web framework, just raw NodeJS.
This is project only use JS/NODEJS/DOCKER/PORTGRESQL/REDIS/NGINX.

## Development
* FrontEnd Overviews:
![image](https://user-images.githubusercontent.com/100049997/234860034-6890035b-59d1-4eee-ae84-9ad9853304cb.png)
![image](https://user-images.githubusercontent.com/100049997/234860532-c3d0413c-c44c-45d0-9a0a-229c12cc3cb7.png)

* The server is NGINX as reverse proxy with NodeJS and the database that is used is Postgresql and I have used Redis for sessions caching, while the frontend is just Javascript in /nginx/frontend .
* The server is build as Monolithic architecture.
* Backend Infrastructure:
![image](https://user-images.githubusercontent.com/100049997/234529009-fa564ac5-f117-401e-8d48-2c0755b025e6.png)

* The Project work as CRUD app that allow :
  1. creating account with no pro subscription.
  2. update the account to pro user.
  3. deleting the account.
  4. updating the email of the account.
  5. reading if the user is Pro or not.
  
* The project support authentication service where the accounts are saved in the postgre database and it cache the sessions in redis database.

## DevOps
* to connect the project to github:
  1. `git clone <repository-URL>`to start the git with branch master that is connected to origin/master

* To run the project and all the containers I use docker-compose.yml file to configure the images and run it.
  1. to run them `docker compose up -d`.
  2. to stop them `docker compose down`.
  3. to rebuild the images(apply the changes) `docker compose build`.

* NGINX configured to be the only server that is available to public and hide other servers, We have used HTTPS with OPENSSL.

* In case the binded-mount docker volumes doesnt work or readed, run `sudo chmod -R 777 volumeDirName`.

## Security

* To secure the passwords that are stored in the database, We hashed them with Bcrypt algorithm.
