# Cripto Watcher APP - API
## Projeto que recebe as informações do preço do bitcoin utilizando RabbitMQ, salva no mongodb e repassa para o app via websocket.

### Projeto seguindo o curso do Sidney Souza que pode ser encontrado [aqui](https://www.youtube.com/playlist?list=PL370TvW48yBupAwG99DiAjLSLDwCoPb07)
### Repositorio do app pode ser encontrado [aqui](https://github.com/matteizera/Cripto-watcher-app-vue)
### Repositorio da api pode ser encontrado [aqui](https://github.com/matteizera/Cripto-watcher-app-api)

### Trilha & Melhorias
- [x] Envio dos dados em tempo real via web-socket
- [x] Endpoint para ultimos valores do bitcoin
- [x] Recebimento das informações via RabbitMQ
- [ ] Adaptar para suportar opções de criptomoedas
- [ ] Desenvolver sistema de usuarios
- [ ] Desenvolver sistema de favoritos
- [ ] Desenvolver sistema de simulação de compra e venda

## Project setup
```
npm install
docker-compose up
```

### Compiles and hot-reloads for development
```
npm run start
```

### Compiles and minifies for production
```
npm run build
```
