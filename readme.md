funcionalidades:

GET 

/get/allscreen
- [x] Retornar todos os documents da collection

/get/findscreen/:screen
- [x] Retornar um document específico.

POST

/post/insert
- [x] Insere um novo document no banco de dados, rebendo dados através do objeto de requisição.

-DELETE

/delete/deletescreen/:id
- [x] Encontra um determinado document a partir de um id enviado nos parametros da requisição e em seguida deleta o mesmo da collection.


#Middlewares
    - [x] Validação de nome, caso ja tenha um nome registrado. Uma consulta no banco é feita, se for encontrado um nome
    já registrado, o middleware interrompe o fluxo da requisição e envia um objeto de resposta ao lado do cliente.