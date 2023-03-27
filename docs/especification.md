# Especificações do Projeto

O problema em que irá ser atacado para esse projeto é a falta de doadores de sangue no Brasil. Esse sistema deve ter como objetivo incentivar mais pessoas a se tornarem doadores de sangue, facilitar o processo de doação e garantir que os bancos de sangue tenham um suprimento adequado de sangue para atender às necessidades da população.

Para isso será abordado a construção das personas e dasnhistórias de usuários para, posteriormente, serem definidas os requisitos do sistema.
As técnicas utilizadas são:
- Definição de personas, contextualizando seus momentos de vida e suas necessidades.
- Criação das histórias de usuários, separando em "Persona" | "Funcionalidade" | "Motivo".
- Baseado nos resultados dos passos anteriores, Criação dos requisitos do sistema.

## Personas

1) Maria, 35 anos, Enfermeira:
Maria trabalha em um banco de sangue em uma grande cidade do Brasil. Ela é uma pessoa ocupada que geralmente precisa lidar com muitas tarefas ao mesmo tempo. Como representante do banco de sangue, ela precisa entrar em contato com doadores regularmente para agendar doações e atualizar informações importantes. Maria precisa de um sistema de cadastro de doadores fácil de usar e que possa ser acessado rapidamente para encontrar doadores disponíveis quando necessário.

2) João, 25 anos, Estudante universitário:
João é um jovem estudante universitário que está preocupado com a questão da doação de sangue. Ele não sabe muito sobre o processo e não tem certeza se pode doar sangue ou não. Ele quer aprender mais sobre como se tornar um doador e como se preparar para a doação. Ele gostaria de ter acesso a informações precisas e confiáveis sobre doação de sangue, como requisitos, tipos de doação, riscos e benefícios.

3) Ana, 50 anos, Dona de casa:
Ana é uma dona de casa que se preocupa com a saúde da família e da comunidade. Ela acredita que a doação de sangue é uma forma importante de ajudar outras pessoas em momentos de necessidade. Ela gostaria de ter acesso a um sistema de cadastro de doadores de sangue onde possa se cadastrar e receber informações sobre quando e onde pode doar sangue. Ela também gostaria de receber lembretes sobre quando é hora de doar novamente e ter informações sobre os benefícios da doação de sangue.

4) Gabriel, 30 anos, administrador do sistema de cadastro de doadores de sangue:
 Gabriel é um profissional de TI experiente, organizado e detalhista. Ele é responsável por garantir a segurança e privacidade das informações do sistema e se preocupa em garantir que os usuários tenham as permissões de acesso corretas. Gabriel é um tomador de decisão confiável e justo, motivado pela causa da doação de sangue.

## Histórias de Usuários

|`PERSONA`| `FUNCIONALIDADE` |`MOTIVO/VALOR` |
|--------------------|------------------------------------|----------------------------------------|
|Representante do banco de sangue | Encontrar doadores disponíveis rapidamente quando surge uma necessidade urgente | Maior eficiênia na busca e possibilidade de contata-los |
|Representante do banco de sangue | Atualizar informações importantes sobre os doadores, como a última data de doação e os tipos de sangue | Manter os usuários atualizados |
|Doador de sangue |Ter acesso à fnformações detalhadas sobre doação de sangue |Aprender mais sobre a doação de sangue e se sentir mais confiante e preparada para doar |
|Doador de sangue |Acompanhar o histórico de doações e receber notificações de doação |Monitorar sua frequência de doação e receber lembretes para doar novamente |
|Administrador do sistema |Gerenciar permissões de acesso |Organização dos acessos referentes ao usuários representantes dos bancos de sangue |

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade | Responsável |
|------|-----------------------------------------|----| ----|
|RF-001| Permitir que o usuário cadastre tarefas | ALTA |  |
|RF-002| Emitir um relatório de tarefas no mês   | MÉDIA | |


### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O sistema deve ser responsivo para rodar em um dispositivos móvel | MÉDIA | 
|RNF-002| Deve processar requisições do usuário em no máximo 3s |  BAIXA | 

Com base nas Histórias de Usuário, enumere os requisitos da sua solução. Classifique esses requisitos em dois grupos:

- [Requisitos Funcionais
 (RF)](https://pt.wikipedia.org/wiki/Requisito_funcional):
 correspondem a uma funcionalidade que deve estar presente na
  plataforma (ex: cadastro de usuário).
- [Requisitos Não Funcionais
  (RNF)](https://pt.wikipedia.org/wiki/Requisito_n%C3%A3o_funcional):
  correspondem a uma característica técnica, seja de usabilidade,
  desempenho, confiabilidade, segurança ou outro (ex: suporte a
  dispositivos iOS e Android).
Lembre-se que cada requisito deve corresponder à uma e somente uma
característica alvo da sua solução. Além disso, certifique-se de que
todos os aspectos capturados nas Histórias de Usuário foram cobertos.

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido um módulo de backend        |


Enumere as restrições à sua solução. Lembre-se de que as restrições geralmente limitam a solução candidata.

> **Links Úteis**:
> - [O que são Requisitos Funcionais e Requisitos Não Funcionais?](https://codificar.com.br/requisitos-funcionais-nao-funcionais/)
> - [O que são requisitos funcionais e requisitos não funcionais?](https://analisederequisitos.com.br/requisitos-funcionais-e-requisitos-nao-funcionais-o-que-sao/)
