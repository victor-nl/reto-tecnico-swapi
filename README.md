# Serverless AWS -  SWAPI
### Solución de prueba técnica:

Este proyecto requiere:
- [Node.js](https://nodejs.org/) v18+
- [Docker](https://www.docker.com/products/docker-desktop) para usar el modo local y pruebas unitarias.

### Instalación de dependencias:
```sh
npm i
```
### Despliegue:
```sh
serverless deploy
```
### Para modo local y pruebas unitarias:
```sh
npm run dblocal
npm run migrate 
```
Para modo local (offline):
```sh
npm run local
```
Para pruebas unitarias:
```sh
npm run test
```
### Para documentación:
```sh
npm run documentacion
```


## Endpoints:
Después de desplegar puede usar los siguientes endpoint:
| VERBO HTTP | PATH | DESCRIPCIÓN |
| ------ | ------ | ------ |
| GET | /people/swapi/{id} | Obtener personaje usando swapi |
| GET | /people/{id} | Obtener personaje usando base de datos |
| GET | /peoples | Obtener lista de personajes usando base de datos |
| POST | /people | Registrar un personaje en base de datos |


## Tecnologias:
Proyectos de código abierto para el desarrollo del proyecto:

- [Docker] - Para usar dynamodb de forma local
- [Linter] - Eslint (Standard)
- [Jest] - Para pruebas unitarias.
- [Serverless Framework] - para el despliegue hacia aws.
- [node.js] - para el backend
- [OpenAPI] - para la documentación
- [Webpack] - para la transpilacion de código
