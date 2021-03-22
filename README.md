# Gametask

<h3 align="center">
  <img alt="Team" title="#team" width="300px" src=".gitlab/assets/gametask.png"><br>
</h3>

## :rocket: Technology

This project was developed with the following technologies:

- [React JS](https://reactjs.org)
- [Styled Components](https://styled-components.com/)
- [Styled Media Query](https://github.com/morajabi/styled-media-query)
- [Storybook](https://storybook.js.org/)
- [React Redux](https://react-redux.js.org/)
- [Context API](https://pt-br.reactjs.org/docs/context.html)

## 💻 Project

In view of the project's purpose (managing classes and school / academic activities) the main responsibilities and non-responsibilities of the system are shown below.

- Install docker and docker-compose

### Dockerfile

```console
❯ sudo docker build -t gametask/react .
// dockerfile to development without nginx
❯ sudo docker build -f Dockerfile.dev -t gametask/react .
❯ sudo docker run -it -v ${PWD}:/app -v /app/node_modules -p 3001:3000 --rm gametask/react
  // application running on http://localhost:3001/

** ${PWD} => project path
** -v => volumes
** -it => interactive terminal
** -p => ports
** -rm => removes the container and volumes, after the container is finished

** --from=build
Dockerfile sets up a multi-stage build. We first built our React.js application and then copied the nginx.conf file from our local machine to the image along with our static html and javascript files that were built in the first phase.
```

### Docker-compose

```console
❯ sudo docker-compose stop
❯ sudo docker-compose up -d --build // create image and activate container
  // application running on http://localhost:3001/
```

### Env

```console
cp contrib/.env-sample .env
```

### User Test

    email: suporte@gametask.com.br
    senha: testXXXX

### Storybook Env

```console
❯ yarn storybook
```

## Links

- [API Docs - Endpoints](#)
- [Figma](#)

---

<h4 align="center">
  Code made :heart: by <a href="https://gametask.com.br" target="_blank">Gametask</a>
</h4>
