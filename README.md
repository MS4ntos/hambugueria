Título: Burguer Food - Sistema de Gerenciamento de Restaurante

Descrição: O Burguer Food é um sistema de gerenciamento de restaurante que utiliza a arquitetura MVC (Model-View-Controller) para gerenciar os dados e interações com o usuário. O sistema é composto por um backend e frontend integrados, além de uma API e Firebase para autenticação e armazenamento de dados.




Funcionalidades:


Gerenciamento de pratos: criar, ler, atualizar e excluir pratos do menu.
Gerenciamento de pedidos: criar, ler, atualizar e excluir pedidos dos clientes.
Gerenciamento de usuários: criar, ler, atualizar e excluir usuários do sistema.
Autenticação de usuários: utilizar o Firebase Authentication para autenticar os usuários.
Armazenamento de dados: utilizar o Firebase Firestore para armazenar os dados do sistema.



Tecnologias utilizadas:

HTML, CSS e JavaScript para o frontend.
Node.js com Express.js para o backend.
Firebase Firestore para armazenamento de dados.
Firebase Authentication para autenticação de usuários.



Arquitetura:

O sistema é dividido em três camadas: Model, View e Controller.
A camada Model é responsável por gerenciar os dados e interações com o banco de dados.
A camada View é responsável por representar a interface do usuário.
A camada Controller é responsável por gerenciar as interações entre a camada Model e a camada View.



Componentes:

Model: responsável por gerenciar os dados e interações com o banco de dados.
View: responsável por representar a interface do usuário.
Controller: responsável por gerenciar as interações entre a camada Model e a camada View.
API: responsável por fornecer uma interface para acessar os dados do sistema.
Firebase Authentication: responsável por autenticar os usuários.
Firebase Firestore: responsável por armazenar os dados do sistema.



Funções:

criarPrato(): criar um novo prato no menu.
lerPratos(): ler todos os pratos do menu.
atualizarPrato(): atualizar um prato existente no menu.
excluirPrato(): excluir um prato do menu.
criarPedido(): criar um novo pedido.
lerPedidos(): ler todos os pedidos.
atualizarPedido(): atualizar um pedido existente.
excluirPedido(): excluir um pedido.
criarUsuario(): criar um novo usuário.
lerUsuarios(): ler todos os usuários.
atualizarUsuario(): atualizar um usuário existente.
excluirUsuario(): excluir um usuário.


Requisitos:

O sistema deve ser capaz de gerenciar os pratos, pedidos e usuários.
O sistema deve ser capaz de autenticar os usuários.
O sistema deve ser capaz de armazenar os dados no Firebase Firestore.


Limitações:

O sistema não tem uma interface de usuário para gerenciar os pratos, pedidos e usuários.
O sistema não tem uma API para acessar os dados do sistema.
Futuras melhorias:

Implementar uma interface de usuário para gerenciar os pratos, pedidos e usuários.
Implementar uma API para acessar os dados do sistema.
Implementar uma funcionalidade para enviar notificações para os usuários.
