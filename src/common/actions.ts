import { Octokit } from "octokit"


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

async function getRepository(
  { owner, repo }: { owner: string, repo: string }
) {
  if (!owner || !repo) return;

  const data: any = await fetch(`https://api.github.com/repos/${owner}/${repo}`)
    .then((res) => res.json())

  return data;
}

export {
  octokit,
  repoSearch,
  searchCommits,
  getRepository,
}
