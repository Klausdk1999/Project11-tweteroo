- Geral
    - [ ]  A porta utilizada pelo seu servidor deve ser a 5000 (isso facilita nossa avaliação 🙂)
    - [ ]  Versionamento usando Git é obrigatório, crie um **repositório público** no seu perfil do GitHub
    - [ ]  Faça commits a cada funcionalidade implementada
- Armazenamento de dados
    - [ ]  Para persistir os dados (usuários e tweets), utilize variáveis globais em memória
    - [ ]  O formato de um **usuário** deve ser:
        
        ```jsx
        {
        	username: 'bobesponja', 
        	avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info" 
        }
        ```
        
    - [ ]  O formato de um **tweet** deve ser:
        
        ```jsx
        {
        	username: "bobesponja",
          tweet: "eu amo o hub",
        }
        ```
        
- **POST** `/sign-up`
    - [ ]  Deve receber (pelo body da request), um parâmetro **username** e um **avatar**, contendo o nome do username do usuário e a sua foto de avatar:
        
        ```jsx
        {
            username: "bobesponja",
        		avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info"
        }
        ```
        
    - [ ]  Salvar esse usuário num array de usuários do servidor
    - [ ]  Por fim, retornar a mensagem `“OK”`
- **POST** `/tweets`
    - [ ]  Deve receber (pelo body da request), os parâmetros `username` e `tweet`:
        
        ```jsx
        {
        	username: "bobesponja",
          tweet: "eu amo o hub"
        }
        ```
        
    - [ ]  Salvar esse tweet num array de tweets do servidor
    - [ ]  Por fim, retornar a mensagem `“OK”`
- **GET** `/tweets`
    - [ ]  Retornar os 10 últimos tweets publicados
        
        ```jsx
        [
        	{
        		username: "bobesponja",
        		avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
        	  tweet: "eu amo o hub"
        	}
        ]
        ```


 # Bônus
Front-end bônus (esse front-end assume que todas as features bônus estão implementadas, então, se você quiser testar parte dos bônus, talvez precise modificar parte do front-end)

[tweteroo-bonus.zip](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/b5cdba2f-3a8b-45a5-a009-6641ee7d750a/tweteroo-bonus.zip)

- Validação de dados
    - [ ]  Todas as rotas deverão validar os dados recebidos, caso algum dado venha vazio ou no formato inválido, o servidor deverá retornar o status code 400 (BAD REQUEST) e não continuará com a execução da função. **Dica:** procure pelo método `res.sendStatus()`
    - [ ]  **POST** `/sign-up` precisa validar se os valores de `username` e `avatar` foram enviados e caso contrário, deverá responder com a mensagem “Todos os campos são obrigatórios!”
    - [ ]  **POST** `/tweets` precisa validar se os valores de `username` e `tweet` foram enviados e caso contrário, deverá responder com a mensagem “Todos os campos são obrigatórios!”
- Status codes de requisições POST
    - [ ]  Todas as requisições POST deverão retornar o status code 201 (CREATED) além do seu retorno já descrito (mensagens, JSONs, etc). **Dica:** procure pelo método `res.status()` e tente utilizá-lo junto do método `res.send()`
- **GET** `/tweets/USERNAME`
    - [ ]  Retornar todos os tweets publicados do usuario recebido por parâmetro de rota
        
        ```jsx
        [
        	{
        		username: "bobesponja",
        		avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
        	  tweet: "eu amo o hub"
        	}
        ]
        ```
        
- **GET** `/tweets` com paginação
    - [ ]  Esse endpoint deverá passar a receber a página identificada via query string (`?page=1`). Esse é um recurso diferente do que vimos até agora (route params e body)
    - [ ]  Modifique o endpoint para retornar corretamente os tweets da “página” (`page`) atual, esse endpoint será chamado ao clicar no botão “**Carregar mais**” (isso já foi feito no front-end). A primeira página corresponde aos ultimos 10 tweets, a segunda do 11 ao 20, a terceira do 21 ao 30, etc
    - [ ]  Lembre-se de validar se o valor de `page` (query string) foi enviado e tem valor **maior que** 1 e caso contrário, deverá responder com a mensagem “Informe uma página válida!” e com o status code 400 (BAD REQUEST)
- **POST** `/tweets` recebendo username por Header
    - [ ]  Esse endpoint deverá parar de receber o valor de username do body e passar a recebê-lo por meio de um **header** `user`. Esse é um recurso diferente do que vimos até agora (route params e body)