# Testes

Neste projeto serão realizados dois tipos de testes:

 - O **Teste de Software**, que utiliza uma abordadem de caixa preta, e tem por objetivo verificar a conformidade do software com os requisitos funcionais e não funcionais do sistema.
 - O **Teste de Usabilidade**, que busca avaliar a qualidade do uso do sistema por um usuário do público alvo. 

Se quiser conhecer um pouco mais sobre os tipos de teste de software, leia o documento [Teste de Software: Conceitos e tipos de testes](https://blog.onedaytesting.com.br/teste-de-software/).

A documentação dos testes é dividida nas seguintes seções:

 - [Plano de Testes de Software](#plano-de-testes-de-software)
 - [Registro dos Testes de Software](#registro-dos-testes-de-software)
 - [Avaliação dos Testes de Software](#avaliação-dos-testes-de-software)
 - [Cenários de Teste de Usabilidade](#cenários-de-teste-de-usabilidade)
 - [Registro dos Testes de Usabilidade](#registro-dos-testes-de-usabilidade)
 - [Avaliação dos Testes de Usabilidade](#avaliação-dos-testes-de-usabilidade)

# Teste de Software

Nesta seção são documentados os testes de software que verificam a correta implementação dos requisitos funcionais e não funcionais do software.

## Plano de Testes de Software

Preencha a tabela com o plano dos testes. Para cada Caso de Teste (CT), associe qual o Requisito  Funcional ou não funcional que ele está verificando. Associe também a página (ou artefato) onde o teste será realizado e descreva o cenário do teste. Veja a tabela de exemplo.


**Caso de Teste** | **CT01 - Criar conta parte 1**
 :--------------: | ------------
**Procedimento**  | 1) Usuário deve acessar o link do site do seguinte endereço: https://banco-de-sangue.netlify.app/<br>2) Ao entrar na página principal o usuário deve clicar no botão "Cadastra-se" e criar seu login.<br>3) Usuário deve preencher os campos solicitados, incluindo: nome completo, e-mail,  DDD e telefone, senha, confirmar senha, escolher (sim ou não) para ser um representante,<br> 4) Em seguida clica no botão "Cadastrar".
**Requisitos associados** | RF-001
**Resultado esperado** | A aplicação deve verifica se os dados são válidos e informa ao usuário caso haja algum problema.
**Dados de entrada** | Inserção de dados válidos no formulário de cadastro.
**Resultado obtido** | Sucesso.

**Caso de Teste** | **CT02 - Criar conta parte 2**
 :--------------: | ------------
**Procedimento**  | 1) Usuário informa nome, sobrenome, e-mail, DDD e telefone, senha, confirmar senha, escolhe (sim ou não) se quer ser um representante.<br>2) Em seguida clica no botão "cadastrar".
**Requisitos associados** | RF-001
**Resultado esperado** | Criação de cadastro A aplicação verifica se os dados são válidos e informa ao usuário caso haja algum problema.<br> 3) A aplicação armazena os dados e direciona o usuário para a tela de login.
**Dados de entrada** | Inserção de dados válidos no formulário de cadastro.
**Resultado obtido** | Sucesso.

**Caso de Teste** | **CT03 - Acesso às informações sobre doação de sangue**
 :--------------: | ------------
**Procedimento**  | 1) O usuário acessa a aplicação, seja como usuário cadastrado ou não.<br>2) O usuário navega pela tela principal, sem estar logado, e acessa as informações clicando nos botões "Saiba mais", ou quando estiver logado, através do menu hamburguer, clicando na página correspondente a: "Porque doar?", "Quem pode doar?", "Processo de doação", "Tipos de sangue", "Mitos e Verdades" e "Quem somos".
**Requisitos associados** | RF-002 RF-003 RF-004 RF-005 RF-006
**Resultado esperado** | O usuário consegue acessar as informações sobre a doação de sangue. As informações exibidas de forma clara e de fácil entendimento, motivando o usuário a doar sangue.<br>
**Dados de entrada** | Navegação até as telas supracitadas.
**Resultado obtido** | Sucesso.

**Caso de Teste** | **CT04 - Autogerenciamento de informações pelos doadores**
 :--------------: | ------------
**Procedimento**  | 1) O usuário depois de cadastrado, dentro da página do doador ele consegue gerenciar seu cadastro através do botão "Editar Perfil".<br>2) O usuário gerenciára seus dados como, Nome, Telefone, E-mail, Data de nascimento, Cidade, Peso e Tipo Sangue clicando em "Editar Perfil". 3) Após as alterações clicar em confirmar.
**Requisitos associados** | RF-007
**Resultado esperado** | O usuário consegue geranciar sua conta.
**Dados de entrada** | Inserir informações no formulário de Editar Perfil. 
**Resultado obtido** | Sucesso.

**Caso de Teste** | **CT05 - Autogerenciamento das próprias informações por novos usuários representantes de banco de sangue**
 :--------------: | ------------
**Procedimento**  | 1) O usuário acessa a aplicação, seja como usuário cadastrado ou não.<br>2) O usuário navega pela tela principal, sem estar logado, e acessa as informações clicando nos botões "Saiba mais", ou quando estiver logado, através do menu hamburguer, clicando na página correspondente a "Porque doar?", "Quem pode doar?", "Processo de doação", "Tipos de sangue", "Mitos e Verdades", "Quem somos".
**Requisitos associados** | RF-008
**Resultado esperado** | O usuário consegue acessar as informações sobre a doação de sangue. As informações exibidas são claras, concisas e fornecem um entendimento abrangente sobre cada grupo de alimento.Criação de cadastro A aplicação verifica se os dados são válidos e informa ao usuário caso haja algum problema.<br> 3) A aplicação armazena os dados e direciona o usuário para a tela de login.
**Dados de entrada** | Inserção de dados válidos no formulário de cadastro.
**Resultado obtido** | Sucesso.

**Caso de Teste** | **CT06 - Acesso às informações sobre doação de sangue**
 :--------------: | ------------
**Procedimento**  | 1) O usuário cadastrado acessa a tela principal através do link: https://banco-de-sangue.netlify.app/, em seguiga clica em fazer login.<br>2) O usuário informa e-mail, senha clica no botão entrar.<br>3) Usuario logado, pode acessa as informações no menu au lado e navegar nas páginas correspondentes a "Porque doar?", "Quem pode doar?", "Processo de doação", "Tipos de sangue", "Mitos e Verdades", "Quem somos", "voltar para home".
**Requisitos associados** | RF-009
**Resultado esperado** | O usuário consegue acessar as informações sobre a doação de sangue. As informações exibidas são claras, concisas e fornecem um entendimento abrangente sobre cada grupo de alimento.Criação de cadastro A aplicação verifica se os dados são válidos e informa ao usuário caso haja algum problema.<br> 3) A aplicação armazena os dados e direciona o usuário para a tela de login.
**Dados de entrada** | Inserção de dados válidos no formulário de cadastro.
**Resultado obtido** | Sucesso.

**Caso de Teste** | **CT07 - Acesso às informações sobre doação de sangue**
 :--------------: | ------------
**Procedimento**  | 1) O usuário acessa a aplicação, seja como usuário cadastrado ou não.<br>2) O usuário navega pela tela principal, sem estar logado, e acessa as informações clicando nos botões "Saiba mais", ou quando estiver logado, através do menu hamburguer, clicando na página correspondente a "Porque doar?", "Quem pode doar?", "Processo de doação", "Tipos de sangue", "Mitos e Verdades", "Quem somos".
**Requisitos associados** | RF-011
**Resultado esperado** | O usuário consegue acessar as informações sobre a doação de sangue. As informações exibidas são claras, concisas e fornecem um entendimento abrangente sobre cada grupo de alimento.Criação de cadastro A aplicação verifica se os dados são válidos e informa ao usuário caso haja algum problema.<br> 3) A aplicação armazena os dados e direciona o usuário para a tela de login.
**Dados de entrada** | Inserção de dados válidos no formulário de cadastro.
**Resultado obtido** | Sucesso.

**Caso de Teste** | **CT08 - Acesso às informações sobre doação de sangue**
 :--------------: | ------------
**Procedimento**  | 1) O usuário acessa a aplicação, seja como usuário cadastrado ou não.<br>2) O usuário navega pela tela principal, sem estar logado, e acessa as informações clicando nos botões "Saiba mais", ou quando estiver logado, através do menu hamburguer, clicando na página correspondente a "Porque doar?", "Quem pode doar?", "Processo de doação", "Tipos de sangue", "Mitos e Verdades", "Quem somos".
**Requisitos associados** | RF-12
**Resultado esperado** | O usuário consegue acessar as informações sobre a doação de sangue. As informações exibidas são claras, concisas e fornecem um entendimento abrangente sobre cada grupo de alimento.Criação de cadastro A aplicação verifica se os dados são válidos e informa ao usuário caso haja algum problema.<br> 3) A aplicação armazena os dados e direciona o usuário para a tela de login.
**Dados de entrada** | Inserção de dados válidos no formulário de cadastro.
**Resultado obtido** | Sucesso.

**Caso de Teste** | **CT09 - O sistema deve permitir que representantes de banco de sangue gerenciem informações de doadores de sangue**
 :--------------: | ------------
**Procedimento**  |  1) O sistema deve permitir que o representante gerenciem informções de doadores de sangue.<br>2)As informações disponíveis são: Nome completo, e-mail, telefone, peso, tipo sanguineo, cidade, data de nascimento, estar sentindo bem (sim ou não).
**Requisitos associados** | RF-013
**Resultado esperado** | O usuário consegue acessar as informações sobre a doação de sangue. As informações exibidas são claras, concisas e fornecem um entendimento abrangente sobre cada grupo de alimento.Criação de cadastro A aplicação verifica se os dados são válidos e informa ao usuário caso haja algum problema.<br> 3) A aplicação armazena os dados e direciona o usuário para a tela de login.
**Dados de entrada** | Inserção de dados válidos no formulário de cadastro.
**Resultado obtido** | Sucesso.

**Caso de Teste** | **CT10 - Acesso às informações sobre doação de sangue**
 :--------------: | ------------
**Procedimento**  | 1) O usuário acessa a aplicação, seja como usuário cadastrado ou não.<br>2) O usuário navega pela tela principal, sem estar logado, e acessa as informações clicando nos botões "Saiba mais", ou quando estiver logado, através do menu hamburguer, clicando na página correspondente a "Porque doar?", "Quem pode doar?", "Processo de doação", "Tipos de sangue", "Mitos e Verdades", "Quem somos".
**Requisitos associados** | RF-015
**Resultado esperado** | O usuário consegue acessar as informações sobre a doação de sangue. As informações exibidas são claras, concisas e fornecem um entendimento abrangente sobre cada grupo de alimento.Criação de cadastro A aplicação verifica se os dados são válidos e informa ao usuário caso haja algum problema.<br> 3) A aplicação armazena os dados e direciona o usuário para a tela de login.
**Dados de entrada** | Inserção de dados válidos no formulário de cadastro.
**Resultado obtido** | Sucesso.








## Registro dos Testes de Software

Esta seção deve apresentar o relatório com as evidências dos testes de software realizados no sistema pela equipe, baseado no plano de testes pré-definido. Documente cada caso de teste apresentando um vídeo ou animação que comprove o funcionamento da funcionalidade. Veja os exemplos a seguir.

|*Caso de Teste*                                 |*TC-01 - Criar uma conta*                                         |
|---|---|
|Requisito Associado | RF-004 - Usuários não autenticados podem se cadastrar para criar uma conta e serem autenticados.|
|Link do vídeo do teste realizado: | https://1drv.ms/u/s!AhD2JqpOUvJChapRtRSQ9vPzbNLwGA?e=mxZs6t| 

|*Caso de Teste*                                 |*TC-02 - Efetuar Login (usuário autenticado)*                                         |
|---|---|
|Requisito Associado | RF-004 - Usuários não autenticados podem se cadastrar para criar uma conta e serem autenticados.|
|Link do vídeo do teste realizado: | https://1drv.ms/v/s!AhD2JqpOUvJChapQ8CPXL-TI_A7iVg?e=spD3Ar | 


## Avaliação dos Testes de Software

Discorra sobre os resultados do teste. Ressaltando pontos fortes e fracos identificados na solução. Comente como o grupo pretende atacar esses pontos nas próximas iterações. Apresente as falhas detectadas e as melhorias geradas a partir dos resultados obtidos nos testes.



## Testes de unidade automatizados (Opcional)

Se o grupo tiver interesse em se aprofundar no desenvolvimento de testes de software, ele podera desenvolver testes automatizados de software que verificam o funcionamento das funções JavaScript desenvolvidas. Para conhecer sobre testes unitários em JavaScript, leia 0 documento  [Ferramentas de Teste para Java Script](https://geekflare.com/javascript-unit-testing/).


# Testes de Usabilidade

O objetivo do Plano de Testes de Usabilidade é obter informações quanto à expectativa dos usuários em relação à  funcionalidade da aplicação de forma geral.

Para tanto, elaboramos quatro cenários, cada um baseado na definição apresentada sobre as histórias dos usuários, definido na etapa das especificações do projeto.

Foram convidadas quatro pessoas que os perfis se encaixassem nas definições das histórias apresentadas na documentação, visando averiguar os seguintes indicadores:

Taxa de sucesso: responde se o usuário conseguiu ou não executar a tarefa proposta;

Satisfação subjetiva: responde como o usuário avalia o sistema com relação à execução da tarefa proposta, conforme a seguinte escala:

1. Péssimo; 
2. Ruim; 
3. Regular; 
4. Bom; 
5. Ótimo.

Tempo para conclusão da tarefa: em segundos, e em comparação com o tempo utilizado quando um especialista (um desenvolvedor) realiza a mesma tarefa.

Objetivando respeitar as diretrizes da Lei Geral de Proteção de Dados, as informações pessoais dos usuários que participaram do teste não foram coletadas, tendo em vista a ausência de Termo de Consentimento Livre e Esclarecido.


Apresente os cenários de testes utilizados na realização dos testes de usabilidade da sua aplicação. Escolha cenários de testes que demonstrem as principais histórias de usuário sendo realizadas. Neste tópico o grupo deve detalhar quais funcionalidades avaliadas, o grupo de usuários que foi escolhido para participar do teste e as ferramentas utilizadas.

> - [UX Tools](https://uxdesign.cc/ux-user-research-and-user-testing-tools-2d339d379dc7)


## Cenários de Teste de Usabilidade

| Nº do Cenário | Descrição do cenário |
|---------------|----------------------|
| 1             | Você é uma pessoa que deseja comprar um iphone. Encontre no site um iphone e veja detalhes de localização e contato da loja que anunciando. |
| 2             | Você é uma pessoa que deseja comprar um smartphone até R$ 2.000,00. Encontre no site smartphone's nessa faixa de preço. |



## Registro de Testes de Usabilidade

Cenário 1: Você é uma pessoa que deseja comprar um iphone. Encontre no site um iphone e veja detalhes de localização e contato da loja que anunciando.

| Usuário | Taxa de sucesso | Satisfação subjetiva | Tempo para conclusão do cenário |
|---------|-----------------|----------------------|---------------------------------|
| 1       | SIM             | 5                    | 27.87 segundos                  |
| 2       | SIM             | 5                    | 17.11 segundos                  |
| 3       | SIM             | 5                    | 39.09 segundos                  |
|  |  |  |  |
| **Média**     | 0%           | 0                | 0 segundos                           |
| **Tempo para conclusão pelo especialista** | SIM | 5 | 8.66 segundos |


    Comentários dos usuários: Achei o site muito bom e intuitivo. 
    Não tive dificuldades e acho que ficou bem intuitivo.




Cenário 2: Você é uma pessoa que deseja comprar um smartphone até R$ 2.000,00. Encontre no site smartphone's nessa faixa de preço.

| Usuário | Taxa de sucesso | Satisfação subjetiva | Tempo para conclusão do cenário |
|---------|-----------------|----------------------|---------------------------------|
| 1       | SIM             | 5                    | 22.54 segundos                          |
| 2       | SIM             | 5                    | 31.42 segundos                          |
| 3       | SIM             | 5                    | 36.21 segundos                          |
|  |  |  |  |
| **Média**     | 0%           | 0                | 0 segundos                           |
| **Tempo para conclusão pelo especialista** | SIM | 5 | 13.57 segundos |


    Comentários dos usuários: O site é fácil de acessar, mas algumas páginas poderiam 
    redirecionar a gente automaticamente para outras. Senti a falta de mais opções de filtros, 
    tanto na hora da pesquisa, quanto depois dela, nos resultados.




## Avaliação dos Testes de Usabilidade


Tomando como base os resultados obtidos, foi possível verificar que a aplicação web apresenta bons resultados quanto à taxa de sucesso na interação dos usuários, tendo em vista que os cenários propostos foram concluídos com sucesso.

Além disso, a aplicação obteve também uma elevada satisfação subjetiva dos usuários no momento que realizavam os cenários propostos. Prova são as médias das avaliações em cada um dos cenários, que variou entre 4 (bom) e 5 (ótimo).

Com relação ao tempo para conclusão de cada tarefa/cenário, notamos discrepância entre a média de tempo dos usuários e o tempo do especialista/desenvolvedor em todos os cenários. Tal discrepância, em certa medida, é esperada, tendo em vista que o desenvolvedor já tem prévio conhecimento de toda a interface da aplicação, do posicionamento dos elementos, lógica de organização das páginas, etc.

Contudo, tendo em vista que a diferença foi relevante (por exemplo, 113 segundos — média usuários — contra 25 segundos — especialista — no cenário três), e ainda os comentários feitos por alguns usuários, entendemos haver oportunidades de melhoria na usabilidade da aplicação.



