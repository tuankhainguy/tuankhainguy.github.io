import { Octokit } from "octokit"
import { getMdTitle } from "./utils";


const octokit = new Octokit({
  auth: import.meta.env.VITE_TOKEN,
})

const repoSearch = async () => {
  const res = await octokit.request('GET /search/repositories', {
    q: 'user:tuankhainguy',
    headers: {
      'X-GitHub-Api-Version': '2022-11-28'
    }
  })

  return res;
}

const searchCommits = async (
  { per_page, page }: { per_page?: number, page?: number } = {}
) => {
  const res = await octokit.request('GET /search/commits', {
    q: 'author:tuankhainguy',
    per_page: per_page ?? 100,
    page: page ?? 1,
    headers: {
      'X-GitHub-Api-Version': '2022-11-28'
    }
  })

  return res;
}


/**
 * getting the specified repo data
 * @param {Object} options options to get repo
 * @param {string} options.repo part of url format '[owner]/[repo-name]'
 */
async function getRepository({ repo }: { repo: string }) {
  // just a nvim issue
  // 'if (!repo) return;' makes auto indent dumb
  if (!repo) {
    return;
  }

  const formatRegex = '.+[^/].+/.+[^/].+';
  if (!repo.match(formatRegex)) {
    return;
  }

  try {
    const data: any = await fetch(`https://api.github.com/repos/${repo}`)
      .then((res) => res.json());
    // console.log(data);

    return data;
  } catch (err: any) {
    console.error(err);
  }

  return;
}

/**
 * getting the specified repo README file
 * @param {string} repo part of url format '[owner]/[repo-name]'
 */
async function getREADME(repo: string) {
  if (!repo) {
    return;
  }

  const formatRegex = '.+[^/].+/.+[^/].+';
  if (!repo.match(formatRegex)) {
    return;
  }

  // const data: any = await fetch(`https://raw.githubusercontent.com/${repo}/${branch}/README.md`)
  //   .then(async (res) => new Response(res.body).text());
  try {
    const data: any = await fetch(`https://api.github.com/repos/${repo}/contents/README.md`)
      .then((res) => res.json())
      .then((json) => atob(json.content));
    return data;
  } catch (err: any) {
    console.error(err);
  }

  // const data: any = await fetch(`https://api.github.com/repos/${repo}/contents/README.md`)
  //   .then((res) => res.json())
  //   .then((json) => atob(json.content));
  //
  return;
}

/**
 * getting the project name from specified repo
 * @param {string} repo part of url format '[owner]/[repo-name]'
 */
async function getProjectName(repo: string) {
  if (!repo) {
    return;
  }

  const readme = await getREADME(repo);
  const name = getMdTitle(readme);
  return name.slice(2);
}

export {
  octokit,
  repoSearch,
  searchCommits,
  getRepository,
  getREADME,
  getProjectName,
}
