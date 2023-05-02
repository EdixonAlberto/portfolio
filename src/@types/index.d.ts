type TProject = {
  id: number
  created_at: string
  stargazers_count: number
  name: string
  description: string
  html_url: string
  homepage: string
  topics: string[]
}

type TErrorApiGithub = {
  documentation_url: string
  errors: Array<{
    code: string
    field: string
    message: string
    resource: string
  }>
  message: string
}

type TResponseApiGithub = {
  id: 365625035
  node_id: 'MDEwOlJlcG9zaXRvcnkzNjU2MjUwMzU='
  name: 'web-linux'
  full_name: 'EdixonAlberto/web-linux'
  private: false
  owner: {
    login: 'EdixonAlberto'
    id: 40126214
    node_id: 'MDQ6VXNlcjQwMTI2MjE0'
    avatar_url: 'https://avatars.githubusercontent.com/u/40126214?v=4'
    gravatar_id: ''
    url: 'https://api.github.com/users/EdixonAlberto'
    html_url: 'https://github.com/EdixonAlberto'
    followers_url: 'https://api.github.com/users/EdixonAlberto/followers'
    following_url: 'https://api.github.com/users/EdixonAlberto/following{/other_user}'
    gists_url: 'https://api.github.com/users/EdixonAlberto/gists{/gist_id}'
    starred_url: 'https://api.github.com/users/EdixonAlberto/starred{/owner}{/repo}'
    subscriptions_url: 'https://api.github.com/users/EdixonAlberto/subscriptions'
    organizations_url: 'https://api.github.com/users/EdixonAlberto/orgs'
    repos_url: 'https://api.github.com/users/EdixonAlberto/repos'
    events_url: 'https://api.github.com/users/EdixonAlberto/events{/privacy}'
    received_events_url: 'https://api.github.com/users/EdixonAlberto/received_events'
    type: 'User'
    site_admin: false
  }
  html_url: 'https://github.com/EdixonAlberto/web-linux'
  description: 'Web page that looks like a linux desktop'
  fork: false
  url: 'https://api.github.com/repos/EdixonAlberto/web-linux'
  forks_url: 'https://api.github.com/repos/EdixonAlberto/web-linux/forks'
  keys_url: 'https://api.github.com/repos/EdixonAlberto/web-linux/keys{/key_id}'
  collaborators_url: 'https://api.github.com/repos/EdixonAlberto/web-linux/collaborators{/collaborator}'
  teams_url: 'https://api.github.com/repos/EdixonAlberto/web-linux/teams'
  hooks_url: 'https://api.github.com/repos/EdixonAlberto/web-linux/hooks'
  issue_events_url: 'https://api.github.com/repos/EdixonAlberto/web-linux/issues/events{/number}'
  events_url: 'https://api.github.com/repos/EdixonAlberto/web-linux/events'
  assignees_url: 'https://api.github.com/repos/EdixonAlberto/web-linux/assignees{/user}'
  branches_url: 'https://api.github.com/repos/EdixonAlberto/web-linux/branches{/branch}'
  tags_url: 'https://api.github.com/repos/EdixonAlberto/web-linux/tags'
  blobs_url: 'https://api.github.com/repos/EdixonAlberto/web-linux/git/blobs{/sha}'
  git_tags_url: 'https://api.github.com/repos/EdixonAlberto/web-linux/git/tags{/sha}'
  git_refs_url: 'https://api.github.com/repos/EdixonAlberto/web-linux/git/refs{/sha}'
  trees_url: 'https://api.github.com/repos/EdixonAlberto/web-linux/git/trees{/sha}'
  statuses_url: 'https://api.github.com/repos/EdixonAlberto/web-linux/statuses/{sha}'
  languages_url: 'https://api.github.com/repos/EdixonAlberto/web-linux/languages'
  stargazers_url: 'https://api.github.com/repos/EdixonAlberto/web-linux/stargazers'
  contributors_url: 'https://api.github.com/repos/EdixonAlberto/web-linux/contributors'
  subscribers_url: 'https://api.github.com/repos/EdixonAlberto/web-linux/subscribers'
  subscription_url: 'https://api.github.com/repos/EdixonAlberto/web-linux/subscription'
  commits_url: 'https://api.github.com/repos/EdixonAlberto/web-linux/commits{/sha}'
  git_commits_url: 'https://api.github.com/repos/EdixonAlberto/web-linux/git/commits{/sha}'
  comments_url: 'https://api.github.com/repos/EdixonAlberto/web-linux/comments{/number}'
  issue_comment_url: 'https://api.github.com/repos/EdixonAlberto/web-linux/issues/comments{/number}'
  contents_url: 'https://api.github.com/repos/EdixonAlberto/web-linux/contents/{+path}'
  compare_url: 'https://api.github.com/repos/EdixonAlberto/web-linux/compare/{base}...{head}'
  merges_url: 'https://api.github.com/repos/EdixonAlberto/web-linux/merges'
  archive_url: 'https://api.github.com/repos/EdixonAlberto/web-linux/{archive_format}{/ref}'
  downloads_url: 'https://api.github.com/repos/EdixonAlberto/web-linux/downloads'
  issues_url: 'https://api.github.com/repos/EdixonAlberto/web-linux/issues{/number}'
  pulls_url: 'https://api.github.com/repos/EdixonAlberto/web-linux/pulls{/number}'
  milestones_url: 'https://api.github.com/repos/EdixonAlberto/web-linux/milestones{/number}'
  notifications_url: 'https://api.github.com/repos/EdixonAlberto/web-linux/notifications{?since,all,participating}'
  labels_url: 'https://api.github.com/repos/EdixonAlberto/web-linux/labels{/name}'
  releases_url: 'https://api.github.com/repos/EdixonAlberto/web-linux/releases{/id}'
  deployments_url: 'https://api.github.com/repos/EdixonAlberto/web-linux/deployments'
  created_at: '2021-05-08T22:48:13Z'
  updated_at: '2023-03-03T23:37:51Z'
  pushed_at: '2021-07-20T03:37:02Z'
  git_url: 'git://github.com/EdixonAlberto/web-linux.git'
  ssh_url: 'git@github.com:EdixonAlberto/web-linux.git'
  clone_url: 'https://github.com/EdixonAlberto/web-linux.git'
  svn_url: 'https://github.com/EdixonAlberto/web-linux'
  homepage: 'https://weblinux.netlify.app/'
  size: 3077
  stargazers_count: 35
  watchers_count: 35
  language: 'SCSS'
  has_issues: false
  has_projects: false
  has_downloads: true
  has_wiki: false
  has_pages: false
  has_discussions: false
  forks_count: 2
  mirror_url: null
  archived: false
  disabled: false
  open_issues_count: 0
  license: null
  allow_forking: true
  is_template: false
  web_commit_signoff_required: false
  topics: ['desktop', 'linux', 'portfolio', 'sass', 'vue', 'website']
  visibility: 'public'
  forks: 2
  open_issues: 0
  watchers: 35
  default_branch: 'main'
  score: 1
}