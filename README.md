# Aula Docker

## Comandos:

- ps => Lista containers ativos
 *Argumentos:*
  -a => Lista todos os containers(Ativos e parados)

- run => Roda uma imagem docker a patir do docker hub ou imagem baixada. Ex: docker run postgres
   *Argumentos:*
    -d => Roda o container em modo deatched(Desatarraxado, ou seja, em background)
    --name => Atribui um nome ao container
    -p => Faz o redirecionamento de porta. Exemplo: 8080(Porta na máquina local):80(Porta no container)

- build => Cria uma imagem docker a partir de um Dockefile. Ex: docker -t nome_da_imagem diretorio_do_docker_file
  *Argumentos:*
    -t => Atribui um nome a imagem

- rm => Remove um container da lista de containers. Ex: docker rm -f nome_ou_id_do_container
  *Argumentos:*
    -f => Remove tudo

- rmi => Remove imagens docker

- stop => Para um processo de um container. Ex: docker stop nome_do_container

- start => Reinicia um processo de um container que foi parado. Ex: docker start nome_do_container

- images => Lista as imagens dcoker disponiveis no PC

- exec => Executa comandos no container. Ex: docker exec nome_do_container comando_unix

### Docker Compose

## Comandos:

- up => Faz a orquestração de container a partir de um arquivo .docker-compose.yaml

- down => Derruba os container que foram rodados com o comando up.