export type ChildrenProps = {
  className?: string;
  children: React.ReactNode
}

type ProjectCardDetail = {
  id: number;
  year: string;
  wlinks: {
    id: number;
    link: string;
    icon: string;
  }[];
  title: string;
  para: string;
  langs: {
    id: number;
    lang: string;
  }[];
}

export type ProjectCardProps = {
  project: ProjectCardDetail
}