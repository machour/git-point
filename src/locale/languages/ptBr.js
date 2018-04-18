module.exports = {
  '{actor} commented on commit': '{actor} comentou no commit',
  '{actor} created branch {ref} at {repo}':
    '{actor} criou branch {ref} em {repo}',
  '{actor} created tag {ref} at {repo}': '{actor} criou tag {ref} em {repo}',
  '{actor} created repository {repo}': '{actor} criou repositório {repo}',
  '{actor} deleted branch {ref} at {repo}':
    '{actor} apagou branch {ref} em {repo}',
  '{actor} deleted tag {ref} at {repo}': '{actor} apagou tag {ref} em {repo}',
  '{actor} forked {repo} at {fork}': '{actor} fez fork de {repo} em {fork}',
  '{actor} created the {repo} wiki': '',
  '{actor} edited the {repo} wiki': '',
  '{actor} commented on pull request {issue} at {repo}':
    '{actor} comentou em pull request {issue} em {repo}',
  '{actor} commented on issue {issue} at {repo}':
    '{actor} comentou em issue {issue} em {repo}',
  '{actor} opened issue {issue} at {repo}':
    '{actor} aberto issue {issue} em {repo}',
  '{actor} reopened issue {issue} at {repo}':
    '{actor} reaberto issue {issue} em {repo}',
  '{actor} closed issue {issue} at {repo}':
    '{actor} fechado issue {issue} em {repo}',
  '{actor} edited {member} at {repo}': '{actor} editado {member} em {repo}',
  '{actor} removed {member} at {repo}': '{actor} removeu {member} em {repo}',
  '{actor} added {member} at {repo}': '{actor} adicionado {member} em {repo}',
  '{actor} made {repo} public': '{actor} tornou {repo} público',
  '{actor} opened pull request {pr} at {repo}':
    '{actor} aberto pull request {pr} em {repo}',
  '{actor} reopened pull request {pr} at {repo}':
    '{actor} reaberto pull request {pr} em {repo}',
  '{actor} merged pull request {pr} at {repo}': '',
  '{actor} closed pull request {pr} at {repo}':
    '{actor} fechado pull request {pr} em {repo}',
  '{actor} commented on pull request {pr} at {repo}': '',
  '{actor} pushed to {ref} at {repo}': '{actor} deu push em {ref} em {repo}',
  '{actor} published release {id}': '{actor} publicado release {id}',
  '{actor} starred {repo}': '{actor} favoritado {repo}',
  'One of the most feature-rich GitHub clients that is 100% free':
    'O GitHub client com a maior quantidade de funcionalidades que é 100% grátis',
  auth: {
    login: {
      connectingToGitHub: 'Conectando ao GitHub...',
      preparingGitPoint: 'Preparando GitPoint...',
      cancel: 'CANCELAR',
      troubles: "Can't login?",
      welcomeTitle: 'Bem-vindo ao GitPoint',
      welcomeMessage:
        'O GitHub client com a maior quantidade de funcionalidades que é 100% grátis',
      notificationsTitle: 'Controlar notificações',
      notificationsMessage: 'Ver e controlar todas as suas notificações',
      reposTitle: 'Repositórios e Usuários',
      reposMessage:
        'Facilmente obter informações sobre repositórios, usuários e organizações',
      issuesTitle: 'Issues e Pull Requests',
      issuesMessage: 'Comunicar-se em conversas, merge pull requests e mais',
      signInButton: 'ENTRAR',
    },
    networkError: 'Oops! it seems that you are not connected to the internet!',
    welcome: {
      welcomeTitle: 'Bem-vindo ao GitPoint',
    },
    events: {
      welcomeMessage:
        'Bem-vindo! Este é seu feed de notícias - vai ajudá-lo a manter-se atualizado das atividades recentes dos repositórios que você acompanha e das pessoas que segue.',
      commitCommentEvent: 'comentou no commit',
      createEvent: 'criou {{object}}',
      deleteEvent: 'apagou {{object}}',
      issueCommentEvent: '{{action}} em {{type}}',
      issueEditedEvent: '{{action}} seu comentário em {{type}}',
      issueRemovedEvent: '{{action}} seu comentário em {{type}}',
      issuesEvent: '{{action}} issue',
      publicEvent: {
        action: 'tornou',
        connector: 'público',
      },
      pullRequestEvent: '{{action}} pull request',
      pullRequestReviewEvent: '{{action}} revisão de pull request',
      pullRequestReviewCommentEvent: '{{action}} em pull request',
      pullRequestReviewEditedEvent: '{{action}} seu comentário em pull request',
      pullRequestReviewDeletedEvent:
        '{{action}} seu comentário em pull request',
      releaseEvent: '{{action}} release',
      atConnector: 'em',
      toConnector: 'para',
      types: {
        pullRequest: 'pull request',
        issue: 'issue',
      },
      objects: {
        repository: 'repositório',
        branch: 'branch',
        tag: 'tag',
      },
      actions: {
        added: 'adicionado',
        created: 'criado',
        edited: 'editado',
        deleted: 'removido',
        assigned: 'atribuído',
        unassigned: 'retirado',
        labeled: 'label adicionado',
        unlabeled: 'label removido',
        opened: 'aberto',
        milestoned: 'marcado',
        demilestoned: 'desmarcado',
        closed: 'fechado',
        reopened: 'reaberto',
        review_requested: 'revisão solicitada',
        review_request_removed: 'soliticação de revisão removida',
        submitted: 'submetido',
        dismissed: 'rejeitado',
        published: 'publicado',
        publicized: 'tornou-se público',
        privatized: 'tornou-se privado',
        starred: 'favoritado',
        pushedTo: 'deu push em',
        forked: 'fez fork de',
        commented: 'comentou',
        removed: 'removeu',
      },
    },
    profile: {
      orgsRequestApprovalTop: 'Não consegue ver todas as suas organizações?',
      orgsRequestApprovalBottom: 'Talvez precise solicitar aprovação deles.',
      codePushCheck: 'Procurar atualizações',
      codePushChecking: 'Procurando atualizações...',
      codePushUpdated: 'O aplicativo está atualizado',
      codePushAvailable: 'Há atualizações disponíveis!',
      codePushNotApplicable: 'Não aplicável em modo de depuração',
    },
    userOptions: {
      donate: 'Faça uma doação',
      title: 'Opções',
      language: 'Idioma',
      privacyPolicy: 'Política de Privacidade',
      signOut: 'Sair',
    },
    privacyPolicy: {
      title: 'Política de Privacidade',
      effectiveDate: 'Última atualização: 15 de Julho de 2017',
      introduction:
        'Estamos felizes por você decidir usar o GitPoint. Esta Política de Privacidade está aqui para informar o que fazemos - e não fazemos - com os dados de nossos usuários.',
      userDataTitle: 'DADOS DO USUÁRIO',
      userData1:
        'Não fazemos nada com sua informação do GitHub. Depois de autenticado, o token do usuário é armazenado no seu dispositivo. Não é possível recuperarmos essa informação. Nunca vemos ou armazenamos o token do usuário, não importa o que aconteça.',
      userData2:
        'Isso significa que, de forma alguma, vemos, usamos ou compartilhamos os dados do GitHub de um usuário. Se dados privados ficarem visíveis em algum momento, nunca iremos armazená-los ou vê-los. Se os dados forem acidentalmente armazenados, iremos deletá-los imediatamente, usando métodos seguros. Como dito, configuramos autenticação especificamente para que isso nunca aconteça.',
      analyticsInfoTitle: 'INFORMAÇÕES ANALÍTICAS',
      analyticsInfo1:
        'Atualmente, usamos o Google Analytics e o iTunes App Analytics para nos ajudar a medir tráfego e tendências de utilização para o GitPoint. Essas ferramentas coletam informações enviadas pelo seu dispositivo, incluindo versão, plataforma e região. Estas informações não podem ser usadas para identificar qualquer usuário em particular e nenhuma informação pessoal é extraída.',
      analyticsInfo2:
        'Se acontecer de incluirmos outra plataforma de terceiros para coletar stack traces, logs de erro ou mais informações analíticas, nos certificaremos de que os dados do usuário permaneçam anônimos e criptografados.',
      openSourceTitle: 'CÓDIGO ABERTO',
      openSource1:
        'GitPoint tem código aberto e o histórico de contribuições à plataforma sempre será visível para o público.',
      openSource2:
        'A cada contribuição para o aplicativo, é realizada uma revisão de código para evitar que alguém adicione qualquer tipo de código malicioso.',
      contactTitle: 'CONTATO',
      contact1:
        'Obrigado por ler nossa Política de Privacidade. Esperamos que você goste de usar o GitPoint o tanto quanto gostamos de desenvolvê-lo.',
      contact2:
        'Se tiver alguma dúvida sobre esta Política de Privacidade ou sobre o GitPoint em geral, por favor, abra uma issue no',
      contactLink: 'repositório do GitPoint',
    },
  },
  notifications: {
    main: {
      unread: 'não lidas',
      participating: 'participando',
      all: 'todas',
      unreadButton: 'Não lidas',
      participatingButton: 'Participando',
      allButton: 'Todas',
      retrievingMessage: 'Buscando notificações',
      noneMessage: 'Você não tem notificações deste tipo',
      markAllAsRead: 'Marcar todos como lido',
    },
  },
  search: {
    main: {
      repositoryButton: 'Repositórios',
      userButton: 'Usuários',
      searchingMessage: 'Buscando por {{query}}',
      searchMessage: 'Busque por qualquer {{type}}',
      repository: 'repositório',
      user: 'usuário',
      noUsersFound: 'Nenhum usuário encontrado :(',
      noRepositoriesFound: 'Nenhum repositório encontrado :(',
    },
  },
  user: 'usuário',
  repository: 'repositório',
  organization: {
    main: {
      membersTitle: 'MEMBROS',
      descriptionTitle: 'DESCRIÇÃO',
    },
    organizationActions: 'Ações da organização',
  },
  issue: {
    settings: {
      title: 'Configurações',
      pullRequestType: 'Pull Request',
      issueType: 'Issue',
      applyLabelButton: 'Aplicar Label',
      noneMessage: 'Nenhuma ainda',
      labelsTitle: 'LABELS',
      assignYourselfButton: 'Atribua a você',
      assigneesTitle: 'ATRIBUÍDA A',
      actionsTitle: 'AÇÕES',
      unlockIssue: 'Destrancar {{issueType}}',
      lockIssue: 'Trancar {{issueType}}',
      closeIssue: 'Fechar {{issueType}}',
      reopenIssue: 'Reabrir {{issueType}}',
      areYouSurePrompt: 'Tem certeza?',
      applyLabelTitle: 'Aplicar um label a esta issue',
    },
    comment: {
      commentActions: 'Ações do comentário',
      editCommentTitle: 'Editar Comentário',
      editAction: 'Editar',
      deleteAction: 'Deletar',
    },
    main: {
      assignees: 'Atribuída a',
      mergeButton: 'Merge Pull Request',
      noDescription: 'Nenhuma descrição fornecida.',
      lockedCommentInput: 'Trancada, mas você ainda pode comentar...',
      commentInput: 'Adicionar um comentário...',
      lockedIssue: 'A issue está trancada',
      states: {
        open: 'Aberta',
        closed: 'Fechada',
        merged: 'Merged',
      },
      screenTitles: {
        issue: 'Issue',
        pullRequest: 'Pull Request',
      },
      openIssueSubTitle: '#{{number}} opened {{time}} ago by {{user}}',
      closedIssueSubTitle: '#{{number}} by {{user}} was closed {{time}} ago',
      issueActions: 'Ações da Issue',
    },
    newIssue: {
      title: 'Nova Issue',
      missingTitleAlert: 'A issue precisa ter um título!',
      issueTitle: 'Título da Issue',
      writeATitle: 'Escreva um título para sua issue aqui',
      issueComment: 'Comentário da Issue',
      writeAComment: 'Escreva um comentário para sua issue aqui',
    },
    pullMerge: {
      title: 'Merge Pull Request',
      createMergeCommit: 'Criar um merge commit',
      squashAndMerge: 'Squash e criar merge',
      merge: 'merge',
      squash: 'squash',
      missingTitleAlert: 'O commit precisa ter um título!',
      commitTitle: 'Título do Commit',
      writeATitle: 'Escreva um título para seu commit aqui',
      commitMessage: 'Mensagem do Commit',
      writeAMessage: 'Escreva uma mensagem para seu commit aqui',
      mergeType: 'Tipo de Merge',
      changeMergeType: 'Trocar Tipo de Merge',
    },
  },
  common: {
    bio: 'BIO',
    stars: 'Favoritos',
    orgs: 'ORGANIZAÇÕES',
    noOrgsMessage: 'Nenhuma organização',
    info: 'INFO',
    company: 'Empresa',
    location: 'Localização',
    email: 'E-mail',
    website: 'Website',
    repositories: 'Repositórios',
    cancel: 'Cancelar',
    yes: 'Sim',
    ok: 'OK',
    submit: 'Enviar',
    relativeTime: {
      lessThanXSeconds: '{{count}}s',
      xSeconds: '{{count}}s',
      halfAMinute: '30s',
      lessThanXMinutes: '{{count}}m',
      xMinutes: '{{count}}m',
      aboutXHours: '{{count}}h',
      xHours: '{{count}}h',
      xDays: '{{count}}d',
      aboutXMonths: '{{count}}mo',
      xMonths: '{{count}}mo',
      aboutXYears: '{{count}}y',
      xYears: '{{count}}y',
      overXYears: '{{count}}y',
      almostXYears: '{{count}}y',
    },
    abbreviations: {
      thousand: 'k',
    },
    openInBrowser: 'Abrir no Navegador.',
  },
  Options: 'Opções',
  BIO: 'BIO',
  ORGANIZATIONS: 'ORGANIZAÇÕES',
  'No organizations': 'Nenhuma organização',
  "Can't see all your organizations?":
    'Não consegue ver todas as suas organizações?',
  'You may have to request approval for them.':
    'Talvez precise solicitar aprovação deles.',
  Language: 'Idioma',
  'Connecting to GitHub...': 'Conectando ao GitHub...',
  'Preparing GitPoint...': 'Preparando GitPoint...',
  'Welcome to GitPoint': 'Bem-vindo ao GitPoint',
  'Control notifications': 'Controlar notificações',
  'View and control all of your unread and participating notifications':
    'Ver e controlar todas as suas notificações',
  'Repositories and Users': 'Repositórios e Usuários',
  'Easily obtain repository, user and organization information':
    'Facilmente obter informações sobre repositórios, usuários e organizações',
  'Issues and Pull Requests': 'Issues e Pull Requests',
  'Communicate on conversations, merge pull requests and more':
    'Comunicar-se em conversas, merge pull requests e mais',
  'SIGN IN': 'ENTRAR',
  CANCEL: 'CANCELAR',
  "Can't login?": "Can't login?",
  'Last updated: July 15, 2017': 'Última atualização: 15 de Julho de 2017',
  "We're glad you decided to use GitPoint. This Privacy Policy is here to inform you about what we do — and do not do — with our user's data.":
    'Estamos felizes por você decidir usar o GitPoint. Esta Política de Privacidade está aqui para informar o que fazemos - e não fazemos - com os dados de nossos usuários.',
  'USER DATA': 'DADOS DO USUÁRIO',
  "We do not do anything with your GitHub information. After authenticating, the user's OAuth token is persisted directly on their device storage. It is not possible for us to retrieve that information. We never view a user's access token nor store it whatsoever.":
    'Não fazemos nada com sua informação do GitHub. Depois de autenticado, o token do usuário é armazenado no seu dispositivo. Não é possível recuperarmos essa informação. Nunca vemos ou armazenamos o token do usuário, não importa o que aconteça.',
  "This means that in no way, shape or form do we ever view, use or share a user's GitHub data. If private data ever becomes visible at any point we will not record or view it. If it happens to be accidentally recorded, we will delete it immediately using secure erase methods. Again, we've set up authentication specifically so that this never happens.":
    'Isso significa que, de forma alguma, vemos, usamos ou compartilhamos os dados do GitHub de um usuário. Se dados privados ficarem visíveis em algum momento, nunca iremos armazená-los ou vê-los. Se os dados forem acidentalmente armazenados, iremos deletá-los imediatamente, usando métodos seguros. Como dito, configuramos autenticação especificamente para que isso nunca aconteça.',
  'ANALYTICS INFORMATION': 'INFORMAÇÕES ANALÍTICAS',
  'We currently use Google Analytics and iTunes App Analytics to help us measure traffic and usage trends for the GitPoint. These tools collect information sent by your device including device and platform version, region and referrer. This information cannot reasonably be used to identify any particular individual user and no personal information is extracted.':
    'Atualmente, usamos o Google Analytics e o iTunes App Analytics para nos ajudar a medir tráfego e tendências de utilização para o GitPoint. Essas ferramentas coletam informações enviadas pelo seu dispositivo, incluindo versão, plataforma e região. Estas informações não podem ser usadas para identificar qualquer usuário em particular e nenhuma informação pessoal é extraída.',
  "If we happen to include another third party platform to collect stack traces, error logs or more analytics information, we'll make sure that user data remains anonymized and encrypted.":
    'Se acontecer de incluirmos outra plataforma de terceiros para coletar stack traces, logs de erro ou mais informações analíticas, nos certificaremos de que os dados do usuário permaneçam anônimos e criptografados.',
  'OPEN SOURCE': 'CÓDIGO ABERTO',
  'GitPoint is open source and the history of contributions to the platform will always be visible to the public.':
    'GitPoint tem código aberto e o histórico de contribuições à plataforma sempre será visível para o público.',
  'With each contribution to the app, code review is always performed to prevent anybody from including malicious code of any kind.':
    'A cada contribuição para o aplicativo, é realizada uma revisão de código para evitar que alguém adicione qualquer tipo de código malicioso.',
  CONTACT: 'CONTATO',
  'Thank you for reading our Privacy Policy. We hope you enjoy using GitPoint as much as we enjoyed building it.':
    'Obrigado por ler nossa Política de Privacidade. Esperamos que você goste de usar o GitPoint o tanto quanto gostamos de desenvolvê-lo.',
  'If you have any questions about this Privacy Policy or GitPoint in general, please file an issue in the':
    'Se tiver alguma dúvida sobre esta Política de Privacidade ou sobre o GitPoint em geral, por favor, abra uma issue no',
  'GitPoint repository': 'repositório do GitPoint',
  'Check for update': 'Procurar atualizações',
  'Checking for update...': 'Procurando atualizações...',
  'App is up to date': 'O aplicativo está atualizado',
  'Update is available!': 'Há atualizações disponíveis!',
  'Not applicable in debug mode': 'Não aplicável em modo de depuração',
  'Open in Browser': 'Abrir no Navegador.',
  'Privacy Policy': 'Política de Privacidade',
  'Make a donation': 'Faça uma doação',
  'Sign Out': 'Sair',
  'Locked, but you can still comment...':
    'Trancada, mas você ainda pode comentar...',
  'Add a comment...': 'Adicionar um comentário...',
  'Issue is locked': 'A issue está trancada',
  Edit: 'Editar',
  Delete: 'Deletar',
  'No description provided.': 'Nenhuma descrição fornecida.',
  'Comment Actions': 'Ações do comentário',
  Cancel: 'Cancelar',
  INFO: 'INFO',
  Company: 'Empresa',
  Location: 'Localização',
  Email: 'E-mail',
  Website: 'Website',
  'Oops! it seems that you are not connected to the internet!':
    'Oops! it seems that you are not connected to the internet!',
  Diff: 'Diff',
  Assignees: 'Atribuída a',
  'Merge Pull Request': 'Merge Pull Request',
  '#{{number}} opened {{time}} ago by {{user}}':
    '#{{number}} opened {{time}} ago by {{user}}',
  '#{{number}} by {{user}} was closed {{time}} ago':
    '#{{number}} by {{user}} was closed {{time}} ago',
  Stars: 'Favoritos',
  Forks: 'Forks',
  Unknown: 'Unknown',
  'Repository is not found': 'Repository is not found',
  'forked from': 'é um fork de',
  Starred: 'Favoritado',
  Watchers: 'Observador',
  Watching: 'Observando',
  Merged: 'Merged',
  Open: 'Abertos',
  Closed: 'Fechados',
  Repositories: 'Repositórios',
  Followers: 'Seguidores',
  Following: 'Seguindo',
  'Follows you': 'Segue você',
  'Issue Comment': 'Comentário da Issue',
  'Write a comment for your issue here':
    'Escreva um comentário para sua issue aqui',
  Submit: 'Enviar',
  'Pull Request': 'Pull Request',
  Issue: 'Issue',
  'Apply Label': 'Aplicar Label',
  'None yet': 'Nenhuma ainda',
  LABELS: 'LABELS',
  'Assign Yourself': 'Atribua a você',
  ASSIGNEES: 'ATRIBUÍDA A',
  ACTIONS: 'AÇÕES',
  'Unlock {{issueType}}': 'Destrancar {{issueType}}',
  'Lock {{issueType}}': 'Trancar {{issueType}}',
  'Close {{issueType}}': 'Fechar {{issueType}}',
  'Reopen {{issueType}}': 'Reabrir {{issueType}}',
  'Are you sure?': 'Tem certeza?',
  Yes: 'Sim',
  'Apply a label to this issue': 'Aplicar um label a esta issue',
  Settings: 'Configurações',
  'Edit Comment': 'Editar Comentário',
  'Issue Actions': 'Ações da Issue',
  'You need to have an issue title!': 'A issue precisa ter um título!',
  OK: 'OK',
  'Issue Title': 'Título da Issue',
  'Write a title for your issue here': 'Escreva um título para sua issue aqui',
  'Create a merge commit': 'Criar um merge commit',
  'Squash and merge': 'Squash e criar merge',
  merge: 'merge',
  squash: 'squash',
  'You need to have a commit title!': 'O commit precisa ter um título!',
  'Commit Title': 'Título do Commit',
  'Write a title for your commit here':
    'Escreva um título para seu commit aqui',
  'Commit Message': 'Mensagem do Commit',
  'Write a message for your commit here':
    'Escreva uma mensagem para seu commit aqui',
  'Merge Type': 'Tipo de Merge',
  'Change Merge Type': 'Trocar Tipo de Merge',
  'Mark all as read': 'Marcar todos como lido',
  Unread: 'Não lidas',
  Participating: 'Participando',
  All: 'Todas',
  'Retrieving notifications': 'Buscando notificações',
  "You don't have any notifications of this type":
    'Você não tem notificações deste tipo',
  MEMBERS: 'MEMBROS',
  DESCRIPTION: 'DESCRIÇÃO',
  'Organization Actions': 'Ações da organização',
  'New Issue': 'Nova Issue',
  'Searching for {{query}}': 'Buscando por {{query}}',
  'No open issues found!': 'Nenhuma issue aberta encontrada!',
  'No closed issues found!': 'Nenhuma issue fechada encontrada!',
  '{{numFilesChanged}} files': '{{numFilesChanged}} arquivos',
  NEW: 'NOVO',
  DELETED: 'REMOVIDO',
  'File renamed without any changes':
    'Arquivo renomeado sem qualquer alteração',
  'No open pull requests found!': 'Nenhum pull request aberto encontrado!',
  'No README.md found': 'Nenhum README.md foi encontrado',
  'README Actions': 'Ações do README',
  'Share {{repoName}}': 'Compartilhar {{repoName}}',
  'Check out {{repoName}} on GitHub. {{repoUrl}}':
    'Veja {{repoName}} no GitHub. {{repoUrl}}',
  Unstar: 'Desfavoritar',
  Star: 'Favoritar',
  Unwatch: 'Deixar de acompanhar',
  Watch: 'Acompanhar',
  Share: 'Compartilhar',
  Fork: 'Fazer Fork',
  TOPICS: 'TÓPICOS',
  OWNER: 'PROPRIETÁRIO',
  CONTRIBUTORS: 'CONTRIBUIDORES',
  'No contributors found': 'Nenhum contribuidor encontrado',
  SOURCE: 'CÓDIGO-FONTE',
  README: 'README',
  'View Code': 'Ver Código',
  Code: 'Código',
  ISSUES: 'ISSUES',
  'No issues': 'Nenhuma issue',
  'No open issues': 'Nenhuma issue aberta',
  'View All': 'Ver Todos',
  Issues: 'Issues',
  'PULL REQUESTS': 'PULL REQUESTS',
  'No pull requests': 'Nenhum pull request',
  'No open pull requests': 'Nenhum pull request aberto',
  'Pull Requests': 'Pull Requests',
  'Repository Actions': 'Ações do Repositório',
  'No repositories found :(': 'Nenhum repositório encontrado :(',
  'No users found :(': 'Nenhum usuário encontrado :(',
  Users: 'Usuários',
  'Search for any {{type}}': 'Busque por qualquer {{type}}',
  Unfollow: 'Deixar de seguir',
  Follow: 'Seguir',
  'User Actions': 'Ações do Usuário',
  _thousandsAbbreviation: 'k',
};
