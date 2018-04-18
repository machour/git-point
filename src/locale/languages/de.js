module.exports = {
  '{actor} commented on commit': '{actor} kommentierte den commit',
  '{actor} created branch {ref} at {repo}':
    '{actor} hat Branch erstellt {ref} bei {repo}',
  '{actor} created tag {ref} at {repo}':
    '{actor} hat Tag erstellt {ref} bei {repo}',
  '{actor} created repository {repo}': '{actor} hat Repository erstellt {repo}',
  '{actor} deleted branch {ref} at {repo}':
    '{actor} hat Branch gelöscht {ref} bei {repo}',
  '{actor} deleted tag {ref} at {repo}':
    '{actor} hat Tag gelöscht {ref} bei {repo}',
  '{actor} forked {repo} at {fork}': '{actor} forked {repo} bei {fork}',
  '{actor} created the {repo} wiki': '',
  '{actor} edited the {repo} wiki': '',
  '{actor} commented on pull request {issue} at {repo}':
    '{actor} kommentierte on Pull Request {issue} bei {repo}',
  '{actor} commented on issue {issue} at {repo}':
    '{actor} kommentierte on Issue {issue} bei {repo}',
  '{actor} opened issue {issue} at {repo}':
    '{actor} eröffnet Issue {issue} bei {repo}',
  '{actor} reopened issue {issue} at {repo}':
    '{actor} erneut geöffnet Issue {issue} bei {repo}',
  '{actor} closed issue {issue} at {repo}':
    '{actor} geschlossen Issue {issue} bei {repo}',
  '{actor} edited {member} at {repo}': '{actor} bearbeitet {member} bei {repo}',
  '{actor} removed {member} at {repo}': '{actor} löschte {member} bei {repo}',
  '{actor} added {member} at {repo}': '{actor} hinzugefügt {member} bei {repo}',
  '{actor} made {repo} public': '{actor} hat {repo} veröffentlicht',
  '{actor} opened pull request {pr} at {repo}':
    '{actor} eröffnet Pull Request {pr} bei {repo}',
  '{actor} reopened pull request {pr} at {repo}':
    '{actor} erneut geöffnet Pull Request {pr} bei {repo}',
  '{actor} merged pull request {pr} at {repo}': '',
  '{actor} closed pull request {pr} at {repo}':
    '{actor} geschlossen Pull Request {pr} bei {repo}',
  '{actor} commented on pull request {pr} at {repo}': '',
  '{actor} pushed to {ref} at {repo}': '',
  '{actor} published release {id}': '{actor} veröffentlicht Release {id}',
  '{actor} starred {repo}': '',
  'One of the most feature-rich GitHub clients that is 100% free':
    'Der umfangreichste GitHub Client der zu 100% kostenlos ist',
  auth: {
    login: {
      connectingToGitHub: 'Verbinde mit GitHub...',
      preparingGitPoint: 'Bereite GitPoint vor...',
      cancel: 'ABBRECHEN',
      troubles: "Can't login?",
      welcomeTitle: 'Willkommen bei GitPoint',
      welcomeMessage:
        'Der umfangreichste GitHub Client der zu 100% kostenlos ist',
      notificationsTitle: 'Verwalte Benachrichtigungen',
      notificationsMessage: 'Finde und verwalte alle deine Benachrichtigungen',
      reposTitle: 'Repositories und Benutzer',
      reposMessage:
        'Erhalte Information über Repositories, Benutzer und Organisationen',
      issuesTitle: 'Issues und Pull Requests',
      issuesMessage:
        'Unterhalte dich in Konversationen, merge Pull Requests und vieles mehr',
      signInButton: 'EINLOGGEN',
    },
    networkError: 'Oops! it seems that you are not connected to the internet!',
    welcome: {
      welcomeTitle: 'Willkommen bei GitPoint',
    },
    events: {
      welcomeMessage:
        'Willkommen! Das ist dein News-Feed - er hälft dich auf dem neusten Stand zu den Benutzern und Repositories denen du folgst.',
      commitCommentEvent: 'kommentierte den Commit',
      createEvent: 'hat {{object}} erstellt',
      deleteEvent: 'hat {{object}} gelöscht',
      issueCommentEvent: '{{action}} on {{type}}',
      issueEditedEvent: '{{action}} den Kommentar bei {{type}}',
      issueRemovedEvent: '{{action}} den Kommentar bei {{type}}',
      issuesEvent: '{{action}} Issue',
      publicEvent: {
        action: 'hat',
        connector: 'veröffentlicht',
      },
      pullRequestEvent: '{{action}} Pull Request',
      pullRequestReviewEvent: '{{action}} Pull Request review',
      pullRequestReviewCommentEvent: 'hat eine Pull Request {{action}}',
      pullRequestReviewEditedEvent:
        '{{action}} sein Kommentar bei einer Pull Request',
      pullRequestReviewDeletedEvent:
        '{{action}} sein Kommentar bei einer Pull Request',
      releaseEvent: '{{action}} Release',
      atConnector: 'bei',
      toConnector: 'zu',
      types: {
        pullRequest: 'Pull Request',
        issue: 'Issue',
      },
      objects: {
        repository: 'Repository',
        branch: 'Branch',
        tag: 'Tag',
      },
      actions: {
        added: 'hinzugefügt',
        created: 'erstellt',
        edited: 'bearbeitet',
        deleted: 'gelöscht',
        assigned: 'zugewiesen',
        unassigned: 'Zuweisung aufgehoben',
        labeled: 'Label hinzugefügt',
        unlabeled: 'Label entfernt',
        opened: 'eröffnet',
        milestoned: 'mit einem Meilenstein versehen',
        demilestoned: 'einen Meilenstein entfernt',
        closed: 'geschlossen',
        reopened: 'erneut geöffnet',
        review_requested: 'Review angefragt',
        review_request_removed: 'Review Anfrage entfernt',
        submitted: 'bestätigt',
        dismissed: 'abgelehnt',
        published: 'veröffentlicht',
        publicized: 'publiziert',
        privatized: 'privatisiert',
        starred: 'starred',
        pushedTo: 'pushed to',
        forked: 'forked',
        commented: 'kommentierte',
        removed: 'löschte',
      },
    },
    profile: {
      orgsRequestApprovalTop: 'Du siehst nicht alle deine Organisationen?',
      orgsRequestApprovalBottom:
        'Vielleicht bist du noch nicht eingeladen worden.',
      codePushCheck: 'Nach Updates suchen',
      codePushChecking: 'Suche nach Updates...',
      codePushUpdated: 'App ist aktuell!',
      codePushAvailable: 'Ein Update ist verfügbar!',
      codePushNotApplicable: 'Nicht verfügbar im Debug Modus',
    },
    userOptions: {
      donate: 'Spenden',
      title: 'Optionen',
      language: 'Sprache',
      privacyPolicy: 'Datenschutzerklärung',
      signOut: 'Ausloggen',
    },
    privacyPolicy: {
      title: 'Datenschutzerklärung',
      effectiveDate: 'Zuletzt aktualisiert: 15. Juli 2017',
      introduction:
        'Wir freuen uns das du dich für GitPoint entschieden hast. Diese Datenschutzerklärung ist dafür da, dir zu erklären was wir mit den Daten unserer Nutzer tun und was wir nicht tun.',
      userDataTitle: 'NUTZERDATEN',
      userData1:
        'Wir verwenden in keinem Fall deine GitHub Daten. Nach der Autorisierung wird dein OAuth-Token direkt auf deinem Gerät gespeichert. Es ist uns nicht möglich diesen Token auszulesen. Desweiteren wird er in keinem Fall irgendwo anders gespeichert.',
      userData2:
        'Das bedeutet das wir in keinem Fall deine GitHub Daten einsehen noch verwenden werden. Sollten private Daten sichtbar werden, werden wir diese nicht einsehen oder verarbeiten. Sollten sie versehentlich aufgenommen werden, werden sie unverzüglich durch sichere Methoden vernichtet. Wir haben unsere Authentifizierungsmethoden jedoch so spezialisert das dies nie passiert.',
      analyticsInfoTitle: 'ANALYTICS INFORMATIONEN',
      analyticsInfo1:
        'Wir verwenden Google Analytics und iTunes App Analytics um den Traffic und Benutzertrend von GitPoint zu untersuchen. Diese Programme sammeln Daten über dein Gerät, deine Betriebssystemversion, deinen Standoirt und Referrer. Anhand dieser Informationen kann kein Benutzer von GitPoint eindeutig identifiziert werden.',
      analyticsInfo2:
        'Sollten wir in Zukunft andere 3rd-Party Programme einbinden um die Anlayse der Verwendung, sammeln von Fehlern und Logs zuverbessern, werden wir sicher stellen das Ihre Daten anonym und verschlüsselt bleiben.',
      openSourceTitle: 'QUELLOFFEN',
      openSource1:
        'GitPoint ist "Open-Soure" und alle teilhabenden Menschen werden immer öffentlich einsehbar sein.',
      openSource2:
        'Jeder Beitrag zu unserer App wird von uns sorgfältig überprüft um das Einbinden von gefährlichen Programmen zu verhindern.',
      contactTitle: 'KONTAKT',
      contact1:
        'Danke das Sie die Datenschutzerklärung von GitPoint durchgelesen haben. Wir hoffen Sie haben genauso viel Spaß an der Verwendung wie wir ihn bei der Entwicklung haben.',
      contact2:
        'Sollten Sie irgendwelche Fragen über diese Datenschutzerklärung oder GitPoint im allgemeinen. Bitte eröffnen Sie ein Issue im',
      contactLink: 'GitPoint Repository',
    },
  },
  notifications: {
    main: {
      unread: 'ungelesen',
      participating: 'teilhabend',
      all: 'alle',
      unreadButton: 'Ungelesen',
      participatingButton: 'Teilhabend',
      allButton: 'Alle',
      retrievingMessage: 'Hole Benachrichtigungen',
      noneMessage: 'Du hast keine Benachrichtungen dieser Art',
      markAllAsRead: 'Alle als gelesen markieren',
    },
  },
  search: {
    main: {
      repositoryButton: 'Repositories',
      userButton: 'Benutzer',
      searchingMessage: 'Suche nach {{query}}',
      searchMessage: 'Suche nach allen {{type}}',
      repository: 'repository',
      user: 'benutzer',
      noUsersFound: 'Keine Benutzer gefunden :(',
      noRepositoriesFound: 'Keine Repositories gefunden :(',
    },
  },
  user: 'benutzer',
  repository: 'repository',
  organization: {
    main: {
      membersTitle: 'MITGLIEDER',
      descriptionTitle: 'BESCHREIBUNG',
    },
    organizationActions: 'Organisation Aktionen',
  },
  issue: {
    settings: {
      title: 'Einstellungen',
      pullRequestType: 'Pull Request',
      issueType: 'Issue',
      applyLabelButton: 'Label anheften',
      noneMessage: 'Bisher keine',
      labelsTitle: 'LABEL',
      assignYourselfButton: 'Selbst zuweisen',
      assigneesTitle: 'ZUSTÄNDIGE',
      actionsTitle: 'AKTIONEN',
      unlockIssue: 'Entsperre {{issueType}}',
      lockIssue: 'Sperre {{issueType}}',
      closeIssue: 'Schließe {{issueType}}',
      reopenIssue: 'Öffne {{issueType}} erneut',
      areYouSurePrompt: 'Bist du dir sicher?',
      applyLabelTitle: 'Hefte ein Label an dieses Issue an',
    },
    comment: {
      commentActions: 'Kommentar Aktionen',
      editCommentTitle: 'Kommentar bearbeiten',
      editAction: 'Bearbeiten',
      deleteAction: 'Löschen',
    },
    main: {
      assignees: 'Zuständige',
      mergeButton: 'Merge Pull Request',
      noDescription: 'Keine Beschreibung verfügbar.',
      lockedCommentInput: 'Gepserrt, du kannst trotzdem kommentieren...',
      commentInput: 'Füge einen Kommentar hinzu...',
      lockedIssue: 'Issue ist gesperrt',
      states: {
        open: 'Offen',
        closed: 'Geschlossen',
        merged: 'Merged',
      },
      screenTitles: {
        issue: 'Issue',
        pullRequest: 'Pull Request',
      },
      openIssueSubTitle: '#{{number}} wude vor {{time}} von {{user}} geöffnet',
      closedIssueSubTitle:
        '#{{number}} von {{user}} wurde vor {{time}} geschlossen',
      issueActions: 'Issue Aktionen',
    },
    newIssue: {
      title: 'Neues Issue',
      missingTitleAlert: 'Ein Issue Titel wird benötigt!',
      issueTitle: 'Issue Titel',
      writeATitle: 'Hier kommte der Titel für dein Issue hin',
      issueComment: 'Issue Kommentar',
      writeAComment: 'Hier kommt der Kommentar für dein Issue hin',
    },
    pullMerge: {
      title: 'Merge Pull Request',
      createMergeCommit: 'Merge Commit erstellen',
      squashAndMerge: 'Squash und Merge',
      merge: 'Merge',
      squash: 'Squash',
      missingTitleAlert: 'Ein Commit Titel wird benötigt!',
      commitTitle: 'Commit Titel',
      writeATitle: 'Hier kommt der Titel für deinen Commit hin',
      commitMessage: 'Commit Nachricht',
      writeAMessage: 'Hier kommt die Nachricht für deinen Commit hin',
      mergeType: 'Merge Typ',
      changeMergeType: 'Merge Typ ändern',
    },
  },
  common: {
    bio: 'BIO',
    stars: 'Sterne',
    orgs: 'ORGANISATIONEN',
    noOrgsMessage: 'Keine Organisationen',
    info: 'INFO',
    company: 'Firma',
    location: 'Standort',
    email: 'Email',
    website: 'Website',
    repositories: 'Repositories',
    cancel: 'Abbrechen',
    yes: 'Ja',
    ok: 'OK',
    submit: 'Bestätigen',
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
      thousand: 't',
    },
    openInBrowser: 'In Browser öffnen',
  },
  Options: 'Optionen',
  BIO: 'BIO',
  ORGANIZATIONS: 'ORGANISATIONEN',
  'No organizations': 'Keine Organisationen',
  "Can't see all your organizations?":
    'Du siehst nicht alle deine Organisationen?',
  'You may have to request approval for them.':
    'Vielleicht bist du noch nicht eingeladen worden.',
  Language: 'Sprache',
  'Connecting to GitHub...': 'Verbinde mit GitHub...',
  'Preparing GitPoint...': 'Bereite GitPoint vor...',
  'Welcome to GitPoint': 'Willkommen bei GitPoint',
  'Control notifications': 'Verwalte Benachrichtigungen',
  'View and control all of your unread and participating notifications':
    'Finde und verwalte alle deine Benachrichtigungen',
  'Repositories and Users': 'Repositories und Benutzer',
  'Easily obtain repository, user and organization information':
    'Erhalte Information über Repositories, Benutzer und Organisationen',
  'Issues and Pull Requests': 'Issues und Pull Requests',
  'Communicate on conversations, merge pull requests and more':
    'Unterhalte dich in Konversationen, merge Pull Requests und vieles mehr',
  'SIGN IN': 'EINLOGGEN',
  CANCEL: 'ABBRECHEN',
  "Can't login?": "Can't login?",
  'Last updated: July 15, 2017': 'Zuletzt aktualisiert: 15. Juli 2017',
  "We're glad you decided to use GitPoint. This Privacy Policy is here to inform you about what we do — and do not do — with our user's data.":
    'Wir freuen uns das du dich für GitPoint entschieden hast. Diese Datenschutzerklärung ist dafür da, dir zu erklären was wir mit den Daten unserer Nutzer tun und was wir nicht tun.',
  'USER DATA': 'NUTZERDATEN',
  "We do not do anything with your GitHub information. After authenticating, the user's OAuth token is persisted directly on their device storage. It is not possible for us to retrieve that information. We never view a user's access token nor store it whatsoever.":
    'Wir verwenden in keinem Fall deine GitHub Daten. Nach der Autorisierung wird dein OAuth-Token direkt auf deinem Gerät gespeichert. Es ist uns nicht möglich diesen Token auszulesen. Desweiteren wird er in keinem Fall irgendwo anders gespeichert.',
  "This means that in no way, shape or form do we ever view, use or share a user's GitHub data. If private data ever becomes visible at any point we will not record or view it. If it happens to be accidentally recorded, we will delete it immediately using secure erase methods. Again, we've set up authentication specifically so that this never happens.":
    'Das bedeutet das wir in keinem Fall deine GitHub Daten einsehen noch verwenden werden. Sollten private Daten sichtbar werden, werden wir diese nicht einsehen oder verarbeiten. Sollten sie versehentlich aufgenommen werden, werden sie unverzüglich durch sichere Methoden vernichtet. Wir haben unsere Authentifizierungsmethoden jedoch so spezialisert das dies nie passiert.',
  'ANALYTICS INFORMATION': 'ANALYTICS INFORMATIONEN',
  'We currently use Google Analytics and iTunes App Analytics to help us measure traffic and usage trends for the GitPoint. These tools collect information sent by your device including device and platform version, region and referrer. This information cannot reasonably be used to identify any particular individual user and no personal information is extracted.':
    'Wir verwenden Google Analytics und iTunes App Analytics um den Traffic und Benutzertrend von GitPoint zu untersuchen. Diese Programme sammeln Daten über dein Gerät, deine Betriebssystemversion, deinen Standoirt und Referrer. Anhand dieser Informationen kann kein Benutzer von GitPoint eindeutig identifiziert werden.',
  "If we happen to include another third party platform to collect stack traces, error logs or more analytics information, we'll make sure that user data remains anonymized and encrypted.":
    'Sollten wir in Zukunft andere 3rd-Party Programme einbinden um die Anlayse der Verwendung, sammeln von Fehlern und Logs zuverbessern, werden wir sicher stellen das Ihre Daten anonym und verschlüsselt bleiben.',
  'OPEN SOURCE': 'QUELLOFFEN',
  'GitPoint is open source and the history of contributions to the platform will always be visible to the public.':
    'GitPoint ist "Open-Soure" und alle teilhabenden Menschen werden immer öffentlich einsehbar sein.',
  'With each contribution to the app, code review is always performed to prevent anybody from including malicious code of any kind.':
    'Jeder Beitrag zu unserer App wird von uns sorgfältig überprüft um das Einbinden von gefährlichen Programmen zu verhindern.',
  CONTACT: 'KONTAKT',
  'Thank you for reading our Privacy Policy. We hope you enjoy using GitPoint as much as we enjoyed building it.':
    'Danke das Sie die Datenschutzerklärung von GitPoint durchgelesen haben. Wir hoffen Sie haben genauso viel Spaß an der Verwendung wie wir ihn bei der Entwicklung haben.',
  'If you have any questions about this Privacy Policy or GitPoint in general, please file an issue in the':
    'Sollten Sie irgendwelche Fragen über diese Datenschutzerklärung oder GitPoint im allgemeinen. Bitte eröffnen Sie ein Issue im',
  'GitPoint repository': 'GitPoint Repository',
  'Check for update': 'Nach Updates suchen',
  'Checking for update...': 'Suche nach Updates...',
  'App is up to date': 'App ist aktuell!',
  'Update is available!': 'Ein Update ist verfügbar!',
  'Not applicable in debug mode': 'Nicht verfügbar im Debug Modus',
  'Open in Browser': 'In Browser öffnen',
  'Privacy Policy': 'Datenschutzerklärung',
  'Make a donation': 'Spenden',
  'Sign Out': 'Ausloggen',
  'Locked, but you can still comment...':
    'Gepserrt, du kannst trotzdem kommentieren...',
  'Add a comment...': 'Füge einen Kommentar hinzu...',
  'Issue is locked': 'Issue ist gesperrt',
  Edit: 'Bearbeiten',
  Delete: 'Löschen',
  'No description provided.': 'Keine Beschreibung verfügbar.',
  'Comment Actions': 'Kommentar Aktionen',
  Cancel: 'Abbrechen',
  INFO: 'INFO',
  Company: 'Firma',
  Location: 'Standort',
  Email: 'Email',
  Website: 'Website',
  'Oops! it seems that you are not connected to the internet!':
    'Oops! it seems that you are not connected to the internet!',
  Diff: 'Diff',
  Assignees: 'Zuständige',
  'Merge Pull Request': 'Merge Pull Request',
  '#{{number}} opened {{time}} ago by {{user}}':
    '#{{number}} wude vor {{time}} von {{user}} geöffnet',
  '#{{number}} by {{user}} was closed {{time}} ago':
    '#{{number}} von {{user}} wurde vor {{time}} geschlossen',
  Stars: 'Stars',
  Forks: 'Forks',
  Unknown: 'Unknown',
  'Repository is not found': 'Repository is not found',
  'forked from': 'geforked von',
  Starred: 'Starred',
  Watchers: 'Watchers',
  Watching: 'Watching',
  Merged: 'Merged',
  Open: 'Offen',
  Closed: 'Geschlossen',
  Repositories: 'Repositories',
  Followers: 'Follower',
  Following: 'Following',
  'Follows you': 'Folgt dir',
  'Issue Comment': 'Issue Kommentar',
  'Write a comment for your issue here':
    'Hier kommt der Kommentar für dein Issue hin',
  Submit: 'Bestätigen',
  'Pull Request': 'Pull Request',
  Issue: 'Issue',
  'Apply Label': 'Label anheften',
  'None yet': 'Bisher keine',
  LABELS: 'LABEL',
  'Assign Yourself': 'Selbst zuweisen',
  ASSIGNEES: 'ZUSTÄNDIGE',
  ACTIONS: 'AKTIONEN',
  'Unlock {{issueType}}': 'Entsperre {{issueType}}',
  'Lock {{issueType}}': 'Sperre {{issueType}}',
  'Close {{issueType}}': 'Schließe {{issueType}}',
  'Reopen {{issueType}}': 'Öffne {{issueType}} erneut',
  'Are you sure?': 'Bist du dir sicher?',
  Yes: 'Ja',
  'Apply a label to this issue': 'Hefte ein Label an dieses Issue an',
  Settings: 'Einstellungen',
  'Edit Comment': 'Kommentar bearbeiten',
  'Issue Actions': 'Issue Aktionen',
  'You need to have an issue title!': 'Ein Issue Titel wird benötigt!',
  OK: 'OK',
  'Issue Title': 'Issue Titel',
  'Write a title for your issue here':
    'Hier kommte der Titel für dein Issue hin',
  'Create a merge commit': 'Merge Commit erstellen',
  'Squash and merge': 'Squash und Merge',
  merge: 'Merge',
  squash: 'Squash',
  'You need to have a commit title!': 'Ein Commit Titel wird benötigt!',
  'Commit Title': 'Commit Titel',
  'Write a title for your commit here':
    'Hier kommt der Titel für deinen Commit hin',
  'Commit Message': 'Commit Nachricht',
  'Write a message for your commit here':
    'Hier kommt die Nachricht für deinen Commit hin',
  'Merge Type': 'Merge Typ',
  'Change Merge Type': 'Merge Typ ändern',
  'Mark all as read': 'Alle als gelesen markieren',
  Unread: 'Ungelesen',
  Participating: 'Teilhabend',
  All: 'Alle',
  'Retrieving notifications': 'Hole Benachrichtigungen',
  "You don't have any notifications of this type":
    'Du hast keine Benachrichtungen dieser Art',
  MEMBERS: 'MITGLIEDER',
  DESCRIPTION: 'BESCHREIBUNG',
  'Organization Actions': 'Organisation Aktionen',
  'New Issue': 'Neues Issue',
  'Searching for {{query}}': 'Suche nach {{query}}',
  'No open issues found!': 'Keine offenen Issues gefunden!',
  'No closed issues found!': 'Keine geschlossenen Issues gefunden!',
  '{{numFilesChanged}} files': '{{numFilesChanged}} Dateien',
  NEW: 'NEU',
  DELETED: 'GELÖSCHT',
  'File renamed without any changes': 'Datei ohne Änderungen umbenannt',
  'No open pull requests found!': 'Keine offenen Pull Requests gefunden!',
  'No README.md found': 'Keine README.md Datei gefunden.',
  'README Actions': 'README Aktionen',
  'Share {{repoName}}': 'Teile {{repoName}}',
  'Check out {{repoName}} on GitHub. {{repoUrl}}':
    'Schau mal bei {{repoName}} auf GitHub vorbei. {{repoUrl}}',
  Unstar: 'Unstar',
  Star: 'Star',
  Unwatch: 'Unwatch',
  Watch: 'Watch',
  Share: 'Teilen',
  Fork: 'Fork',
  TOPICS: 'TOPICS',
  OWNER: 'BESITZER',
  CONTRIBUTORS: 'BEITRAGENDE',
  'No contributors found': 'Keine Beitragenden gefunden',
  SOURCE: 'QUELLCODE',
  README: 'README',
  'View Code': 'Quellcode ansehen',
  Code: 'Code',
  ISSUES: 'ISSUES',
  'No issues': 'Keine Issues',
  'No open issues': 'Keine offenen Issues',
  'View All': 'Alle anzeigen',
  Issues: 'Issues',
  'PULL REQUESTS': 'PULL REQUESTS',
  'No pull requests': 'Keine Pull Requests',
  'No open pull requests': 'Keine offenen Pull Requests',
  'Pull Requests': 'Pull Requests',
  'Repository Actions': 'Repository Aktionen',
  'No repositories found :(': 'Keine Repositories gefunden :(',
  'No users found :(': 'Keine Benutzer gefunden :(',
  Users: 'Benutzer',
  'Search for any {{type}}': 'Suche nach allen {{type}}',
  Unfollow: 'Entfolgen',
  Follow: 'Folgen',
  'User Actions': 'Benutzer Aktionen',
  _thousandsAbbreviation: 't',
};
