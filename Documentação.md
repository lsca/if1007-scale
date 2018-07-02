# Universidade Federal de Pernambuco CIn Centro de Informática
### IF1007 - Tópicos Avançados em SI 4 - Micro Serviços
#### João Paulo Lins {jplo@cin.ufpe.br}, Lerisson Freitas {lff3@cin.ufpe.br}, Lucas Assad {lsca@cin.ufpe.br}, Matheus Raz {mrol@cin.ufpe.br}



## Documentação do projeto micro serviços

### Objetivo
Desenvolver um micro serviço voltado para prover dados sobre os Restaurantes e suas localizações na Região Metropolitana do Recife e outro micro serviço que disponibiliza vários artigos de um jornal. Depois, "dockerizaremos" o serviço. Feito isso, utilizaremos algum mecanismo  k8s para balanceamento de carga. Após, especificaremos alguma regra de negócio para escalarmos o serviço horizontalmente. Tentaremos usar o Grafana para ilustrar/monitorar o aumento do consumo de Memória ou CPU do serviço.


### Configuração de Ambiente

Para execução desse projeto é necessário uma configuração mínima para tal.
Para fácil implantação, nossa recomendação é que use alguma distribuição do Linux. 

#### Tecnologias:

```
- Docker 
- MiniKube
- Kubernetes
- Virtual Box
- npm
- node.js
- mongo db
- elasticsearch
```
### Guia de instalação rápida:

1-  Instalação do Virtual Box
```
$ apt-get install virtualbox
```
2- Instalação do Docker

Antes de começar a instalação, garanta que não existem outras versões do Docker instalado no servidor. Se existir algo, o comando abaixo irá remover, caso contrário faça a instalação normalmente. 
```
$ sudo apt-get remove docker docker-engine docker.io
$ sudo apt-get install docker-ce
$ sudo apt-get update
```
Caso não der certo siga esse tutorial: https://solutions4crowds.com.br/instalando-o-docker-no-ubuntu-16-04-com-portainer/.

3- Instalação do MiniKube
```
$ curl -Lo minikube https://storage.googleapis.com/minikube/releases/v0.28.0/minikube-linux-amd64 && chmod +x minikube && sudo mv minikube /usr/local/bin/
```
4- Instalação do Kubernetes
 ```
$ apt-get update && apt-get install -y apt-transport-https
$ curl -s https://packages.cloud.google.com/apt/doc/apt-key.gpg | apt-key add -cat <<EOF >/etc/apt/sources.list.d/kubernetes.list
deb http://apt.kubernetes.io/ kubernetes-xenial main EOF
$ apt-get update
$ apt-get install -y kubectl
 ```
5  e 6 - Instalação do node.js e npm
```
$ sudo apt-get update
$ sudo apt-get install nodejs
$ sudo apt-get install npm
``` 
7- Instalação do mongo db
```
$ sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv EA312927
```
- Seguir esse tutorial: https://www.digitalocean.com/community/tutorials/como-instalar-o-mongodb-no-ubuntu-16-04-pt . 

8 - Instalação do elasticsearch
- Seguir esse tutorial: https://www.digitalocean.com/community/tutorials/how-to-install-and-configure-elasticsearch-on-ubuntu-16-04. 
 
### Arquitetura

Nossa arquitetura é baseada em micro serviços onde temos dois servidores escritos em Node.js, onde cada um possui seu próprio banco de dados. Usamos bancos que utilizam a estrutura de orientação a documentos já que os serviços implementados transitam-se um considerável número de transações, então há necessidade de GETs e SETs rápidos, desse modo optamos pelo uso do Mongo DB e do Elasticsearch.

Na coleta das métricas usamos a própria tecnologia metric server do K8s no que diz respeito ao auto scale. E o kibana para visualização dos dados.
São dois servidores/micro serviços escritos em Node.js, cada um possuindo um banco de dados próprio (um utiliza o mongo.db e o outro elasticsearch).
Para coleta de métricas para fazer o auto scale utilizamos o metric server.

Fizemos uso desta arquitetura visando, além da modularização dos serviços para a fácil manutenção o uso da HPA, ou seja, um auto scale horizontal eficiente.  

### Libs Utilizadas

As Libs podem ser encontrados no package.json de cada micro serviço, além do uso do kibana, do Metric Server do K8s - para pegar as métricas CPU, MEMÓRIA, NETWORK e mock para o HPA -, do mongo db, do elasticsearch, do node.js para backend. 

### Scripts para implantação

Com todo ambiente pronto e configurado faça o clone do repositória e entre na pasta, após execute o comando ```npm install``` em cada pasta dos micro serviços para instalar as dependências e em seguida volte para pasta raiz do projeto e execute o comando  npm run dev” para rodar os projetos.

Foram criados scripts em shell de carga para os serviços, para executá-los rode o comando ```$ ./ run .sh``` dentro da pasta ```script para carga```.   

### Referências

https://github.com/Netflix/eureka/wiki/Eureka-at-a-glance
https://kubernetes.io/docs/home/?path=users&persona=app-developer&level=foundational
https://stackoverflow.com/questions/38549902/eureka-server-how-to-achieve-high-availability
https://www.elastic.co/guide/en/elasticsearch/reference/current/docs.html
https://www.elastic.co/guide/en/elasticsearch/reference/current/docs-replication.html
https://github.com/kubernetes-incubator/metrics-server
https://github.com/topics/metrics
https://github.com/topics/kubernetes
https://github.com/topics/kubernetes-monitoring
https://kubernetes.io/docs/tasks/tools/install-kubectl/
https://www.elastic.co/guide/en/kibana/current/getting-started.html
https://www.elastic.co/guide/en/kibana/current/install.html
