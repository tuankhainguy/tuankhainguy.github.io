import { defineStore } from 'pinia'
import { /* getProjectName,*/ getREADME, getRepository } from '../common/actions';
import { getMdTitle } from '../common/utils';

export const useProjectsStore = defineStore('projects', {
  state: () => {
    const projects: Record<string, { name: string, data: any, readme?: string}> = {};
    return {
      projects
    }
  },
  actions: {
    async add(repoURL: string) {
      const data = await getRepository({
        repo: repoURL
      });
      if (!data) { return; }

      const readme = await getREADME(repoURL);
      if (!readme) { return; }

      this.projects[data.name] = { name: getMdTitle(readme).slice(2) ?? data.name, data: data, readme };

      return this.projects[data.name];
    },
    async getProject(repo: string) {
      const formatRegex = '.+[^/].+/.+[^/].+';
      if (!repo.match(formatRegex)) {
        if (this.projects[repo]) { return this.projects[repo]; }
      }
      let repoName = repo.split('/')[1];

      if (this.projects[repoName]) { return this.projects[repoName]; }
      const projectData = await this.add(repo);

      return projectData;
    },
  },
})
