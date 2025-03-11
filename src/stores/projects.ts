import { defineStore } from 'pinia'
import { /* getProjectName,*/ getREADME, getRepository } from '../common/actions';
import { getMdTitle } from '../common/utils';


const PROJECTS = "projects"

export const useProjectsStore = defineStore('projects', {
  state: () => {
    type Projects = Record<
      string, { name: string, data: any, readme?: string, imgSrc?: string }
    > & {
      createdAt: EpochTimeStamp,
    };

    const localProjects: Projects | null =
      (localStorage.getItem(PROJECTS) !== null) ? JSON.parse(localStorage.getItem(PROJECTS)!) : null;
    const newProjects: Projects = { createdAt: Date.now() } as Projects;

    if (!localProjects) {
      const projects = newProjects;
      return {
        projects
      }
    }
    // check if the createdAt time has been over 60 minutes
    // if true create new
    if (((Date.now() - localProjects.createdAt) / 60000) > 60) {
      const projects = newProjects;
      return {
        projects
      }
    }

    const projects = localProjects;
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
      localStorage.setItem(PROJECTS, JSON.stringify(this.projects));

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
