# Should You Watch?

Este aplicativo faz requests à API Jikan a fim de determinar se um anime vale a pena ser assistido ou não. Ele se baseia tanto no score do anime quanto nas métricas da intenção das pessoas que interagem com o MyAnimeList.

## Execução

Primeiramente, deve-se rodar

> npm install

a fim de se instalar as dependências do aplicativo.

Assim feito, pode-se rodar

> npx expo start

para abrir as opções de execução. 

## Bugs

É necessário declarar no terminal 

> export NODE_OPTIONS=--openssl-legacy-provider

a fim de fazer o aplicativo funcionar no webbrowser.