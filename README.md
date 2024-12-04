
BURGUER FOOD


O "Burguer Food" é um site de hambugueria desenvolvido utilizando a arquitetura MVC e as tecnologias HTML, CSS, JavaScript e Firebase. Com foco em facilitar o pedido de hambúrgueres, o aplicativo oferece funcionalidades como personalização de pedidos, carrinho de compras e pagamento online. O Firebase garante o armazenamento seguro dos dados e a autenticação dos usuários, enquanto a arquitetura MVC organiza o código e facilita a manutenção.

Arquitetura MVC:

O projeto adota a arquitetura Model-View-Controller (MVC) para organizar o código e facilitar a manutenção.

Model: Representa a camada de dados, interagindo diretamente com o banco de dados Firebase. Inclui as classes para representar os pratos, pedidos e usuários, e as funções CRUD para manipular esses dados.
View: Responsável pela interface do usuário, exibindo as informações e permitindo a interação do usuário. É construída utilizando HTML, CSS e JavaScript.
Controller: Atua como intermediário entre a View e o Model, recebendo as requisições do usuário, manipulando os dados através do Model e retornando as respostas para a View. Implementa as rotas da aplicação, seguindo a estrutura MVC.


Tecnologias Utilizadas:

HTML: Linguagem de marcação para estruturar o conteúdo das páginas.
CSS: Linguagem de estilo para definir a aparência visual da aplicação.
JavaScript: Linguagem de programação para adicionar interatividade e lógica à aplicação.
Firebase: Plataforma Backend-as-a-Service (BaaS) utilizada para o armazenamento de dados, autenticação de usuários e outras funcionalidades.



Estrutura de Dados e Interações com o Firebase:

Dados:
Pratos: Nome, descrição, preço, imagem.
Pedidos: Lista de pratos, valor total, status (pendente, confirmado, entregue), informações do usuário.
Usuários: Nome, e-mail, senha.
Interações:
CRUD:
Criar: Adicionar novos pratos ao cardápio, criar novos pedidos e registrar novos usuários.
Ler: Listar todos os pratos, exibir os detalhes de um pedido específico e recuperar as informações de um usuário logado.
Atualizar: Editar as informações de um prato, alterar o status de um pedido.
Excluir: Remover um prato do cardápio, cancelar um pedido.
Autenticação: Utilizar o Firebase Authentication para permitir que os usuários se registrem e façam login.


Interface do Usuário:

Tela Inicial: Apresenta um banner com informações sobre a hamburgueria, um cardápio resumido e um botão para acessar o cardápio completo.
Cardápio: Lista os pratos disponíveis, com informações sobre cada um, como nome, descrição, preço e imagem. Permite adicionar itens ao carrinho.
Carrinho: Exibe os itens adicionados ao carrinho, o valor total do pedido e um botão para finalizar a compra.
Finalizar Pedido: Coleta as informações do usuário (nome, endereço) e permite escolher a forma de pagamento.

Lógica de Aplicação e Rotas:

Rotas:
/: Tela inicial.
/menu: Cardápio.
/cart: Carrinho.
/checkout: Finalizar pedido.
Controller:
Recebe as requisições HTTP das rotas.
Chama as funções do Model para realizar as operações de banco de dados.
Renderiza as views com os dados obtidos.


Configuração do Firebase:

Criar um projeto no Firebase: Configurar o banco de dados NoSQL para armazenar os dados do aplicativo.
Habilitar a autenticação: Configurar os métodos de autenticação desejados (e-mail/senha, Google, Facebook, etc.).
Configurar as regras de segurança: Definir as regras de acesso aos dados para garantir a segurança da aplicação.


Desafios Enfrentados:


Gerenciamento do estado: Manter o estado do carrinho de compras atualizado em todas as páginas.
Otimização de desempenho: Carregar as páginas rapidamente, mesmo com muitos produtos no cardápio.
Tratamento de erros: Implementar mecanismos para lidar com erros durante a comunicação com o Firebase e outras operações.
