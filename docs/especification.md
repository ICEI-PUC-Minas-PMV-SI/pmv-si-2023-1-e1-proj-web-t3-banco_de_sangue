# Especificações do Projeto

O problema em que irá ser atacado para esse projeto é a falta de doadores de sangue no Brasil. Esse sistema deve ter como objetivo incentivar mais pessoas a se tornarem doadores de sangue, facilitar o processo de doação e garantir que os bancos de sangue tenham um suprimento adequado de sangue para atender às necessidades da população.

Para isso será abordado a construção das personas e das histórias de usuários para, posteriormente, serem definidas os requisitos do sistema.
As técnicas utilizadas são:
- Definição de personas, contextualizando seus momentos de vida e suas necessidades.
- Criação das histórias de usuários, separando em "Persona" | "Funcionalidade" | "Motivo".
- Criação dos requisitos do sistema, baseado nos resultados dos passos anteriores.

## Personas

1) Maria, 35 anos, Enfermeira:
Maria trabalha em um banco de sangue em uma grande cidade do Brasil. Ela é uma pessoa ocupada que geralmente precisa lidar com muitas tarefas simultaneamente. Como representante do banco de sangue, ela precisa entrar em contato com doadores regularmente para agendar doações e atualizar informações importantes. Os últimos anos tem sido muito difíceis para Maria, uma vez que a COVID 19, o isolamento social, e uma crescente quantidade de fake news anti-ciência afastaram as pessoas dos centros doação e as tornaram mais desinformadas

2) João, 25 anos, Estudante universitário:
João é um jovem estudante universitário que está preocupado com a questão da doação de sangue. Ele não sabe muito sobre o processo e não tem certeza se pode doar sangue ou não. João quer aprender mais sobre como se tornar um doador e como se preparar para a doação. Ele gostaria de ter acesso a informações precisas e confiáveis sobre doação de sangue, como requisitos, tipos de doação, riscos e benefícios.

3) Ana, 50 anos, Dona de casa:
Ana é uma dona de casa que se preocupa com a saúde da família e da comunidade. Ela acredita que a doação de sangue é uma forma importante de ajudar outras pessoas em momentos de necessidade. Ana adquiriu o habito quando quase perdeu uma amiga muito próxima devido à falta de sangue no hospital da cidade. Desde então, ela doa sempre que possível, e incentiva as pessoas a sua volta a fazerem o mesmo. No entanto, Ana percebe que muitos ao seu redor não entendem muito bem como o processo de doação funciona e acabam não indo ao hemocentro  por conta disso.

4) Gabriel, 35 anos, médico:
 Gabriel é um médico especialista no tratamento de câncer. Durante toda sua carreira, ele e seus colegas sofre com a falta de doadores de sangue. A situação piorou quando ele se especializou no tratamento de câncer, uma vez que nessa área da medicina a demanda de sangue é muito grande devido à quimioterapia. Um único paciente às vezes usa muitas bolsas de sangue, que demora para ser reposto devido ao baixo volume de doações. Gabriel doa sempre que possível, e incentiva os familiares a fazerem o mesmo deste que entrou na faculdade, mas ele sempre notou a falta de engajamento da sociedade com o problema.

## Histórias de Usuários

|`PERSONA`| `FUNCIONALIDADE` |`MOTIVO/VALOR` |
|--------------------|------------------------------------|----------------------------------------|
|Representante do banco de sangue | Encontrar doadores disponíveis rapidamente quando surge uma necessidade urgente | Maior eficiênia na busca e possibilidade de contata-los |
|Representante do banco de sangue | Atualizar informações importantes sobre os doadores, como a última data de doação e os tipos de sangue | Manter os usuários atualizados |
|Doador de sangue |Ter acesso à fnformações detalhadas sobre doação de sangue |Aprender mais sobre a doação de sangue e se sentir mais confiante e preparada para doar |
|Doador de sangue |Se voluntariar à doação de sangue através de um cadastro |Disponibilizar os dados de contato para a doação |
|Doador de sangue |Acompanhar o histórico de doações e receber notificações de doação |Monitorar sua frequência de doação e receber lembretes para doar novamente |
|Administrador do sistema |Gerenciar permissões de acesso |Organização dos acessos referentes ao usuários representantes dos bancos de sangue |

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade | Responsável |
|------|-----------------------------------------|----| ----|
|RF-001 | O sistema deve permitir que novos usuários se cadastrem como doadores de sangue | ALTA |  |
|RF-002 | O sistema deve permitir que representantes de banco de sangue criem contas para acessar o sistema | ALTA | |
|RF-003 | O sistema deve permitir que os usuários visualizem informações sobre doação de sangue, requisitos e locais de doação | ALTA |
|RF-004 | O sistema deve permitir que os usuários visualizem suas próprias informações de doação de sangue | ALTA |
|RF-005 | O sistema deve permitir que os usuários atualizem suas próprias informações de doação de sangue | ALTA |
|RF-006 | O sistema deve permitir que representantes de banco de sangue visualizem informações de doadores de sangue | ALTA |
|RF-007 | O sistema deve permitir que representantes de banco de sangue atualizem informações de doadores de sangue | ALTA |
|RF-008 | O sistema deve permitir que os usuários recebam notificações por e-mail ou mensagem de texto sobre campanhas de doação de sangue | BAIXA |
|RF-009 | O sistema deve permitir que o administrador do sistema gerencie as permissões de acesso dos usuários do sistema | ALTA |
|RF-010 | O sistema deve permitir que os usuários solicitem a remoção de suas informações do sistema | BAIXA |

### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O sistema deve ser responsivo para rodar em um dispositivos móvel | MÉDIA | 
|RNF-002 | O sistema deve ser seguro e confiável, com medidas de segurança adequadas para proteger as informações dos usuários | ALTA |
|RNF-003 | O sistema deve ser compatível com diferentes navegadores web, incluindo Chrome, Firefox e Safari | MÉDIA |
|RNF-004 | O sistema deve ter um tempo de resposta rápido para fornecer uma boa experiência do usuário | ALTA |

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
