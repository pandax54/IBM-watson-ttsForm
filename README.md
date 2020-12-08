# Smarkio Teste Prático

## :computer: Project
An application with Node.js, Express, MySQL, React and the IBM text to speech API.
You can register you comments and later turn it into an audio speech.
</br>

</br>

## :rocket: Technologies

#### :us: This project was developed with the following technologies:

- [TypeScript](https://github.com/Microsoft/TypeScript)
- [Express](https://github.com/expressjs/express)
- [React](https://github.com/facebook/react)
- MySQL
- [API Text to Speech do IBM Watson](https://www.ibm.com/cloud/watson-text-to-speech)

</br>


## Steps


### install - Back-End

First clone the repository.
```
$ yarn 
```

In the root you must configure the ```ormconfig.json```with your informations:

```
{
  "type": "mysql",
  "host": "localhost",
  "port": "3307", --> Configure your port (mysql default port is 3306)
  "username": "root", --> change here
  "password": "watson",
  "database": "watson", --> create this database 
  "entities": [
    "./src/models/*.ts"
  ],
  "synchronize": true
}
```

You can use docker to setup the database:
```
example:
docker run --name some-mysql -e MYSQL_ROOT_PASSWORD=my-secret-pw -p portlocal:port -d mysql:version

$ docker run --name watson -e MYSQL_ROOT_PASSWORD=watson -e MYSQL_DATABASE=watson -e MYSQL_USER=[your user name here!] -e MYSQL_PASSWORD=watson -d -p 3307:3306 mysql:5.7

```

### IBM credentials 
In the file ```.env.example``` you must fill your IBM credentials to authenticate your requests. 
Dont forget to remove the example in the name of the file, the file must be like this: ```.env```


### Starting the server

Once you start the server the table 'posts' will be automatically created (dont forget to start the mysql server):
```
$ yarn dev:server
```



### install - Front-End (React) - client folder

First clone the repository. Then use the follow commands:
```
$ yarn
$ yarn start
```

### Warning
The API is taking a while to return the request (around 60 seconds or more) and multiple requests can cause failed connections. 
Once it returns the player tag will play it automatically.

example of the error conections:
```
at processTicksAndRejections (internal/process/task_queues.js:97:5) {
  statusText: 'ETIMEDOUT',
  body: 'Response not received - no connection was made to the service.'
}
error: Error: connect ETIMEDOUT 189.36.162.16:443
```