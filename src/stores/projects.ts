import { defineStore } from 'pinia'
import { getRepository } from '../common/actions';

export const useProjectsStore = defineStore('projects', {
  state: () => {
    const projects: Record<string, string> = {};
    return {
      projects
    }
  },
  actions: {
    async add(repoURL: string) {
      const data = await getRepository({
        repo: repoURL
      });
      this.projects[repoURL] = data;

      return data;
    },
    async getProject(repoURL: string) {
      if (this.projects[repoURL]) { return this.projects[repoURL]; }
      const data = await this.add(repoURL);

      return data;
    },
  },
})
