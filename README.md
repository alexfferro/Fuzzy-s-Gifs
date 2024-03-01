# App Fuzzy's Gifs

### Sobre

Projeto iniciado com Vite, escolhendo a opção de React + TypeScript.
API escolhida [GIPHY], uma particularidade é que para ter acesso a API é necessário criar uma conta
e gerar uma API_KEY.
Foi gerado uma gratuita e que limitações quanto ao uso dos recursos.

Caso a API_KEY já tenha expirado, deve seguir os seguintes passos: 
1. Entrar no site [https://developers.giphy.com/]
2. Criar uma conta
3. Ir na Opção "Create an APP"
4. Selecionar API e dar next
5. Dar nome ao App (Um nome que facilite identificar o projeto)
6. Feito isso, a API_KEY será gerada

Em seguida, iremos clonar o projeto :

no terminal digite :

```
git clone https://github.com/alexfferro/Fuzzy-s-Gifs.git
cd Fuzzy-s-Gifs
npm install
npm run dev
```
No caso citado acima, caso a API_KEY tenha expirado, deve ir no componente `GiphyGrid` e substituir a constante API_KEY para a nova API_KEY Criada no site do GIPHY.
