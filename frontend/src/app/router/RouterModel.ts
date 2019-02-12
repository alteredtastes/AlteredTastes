export interface RouterModel {
  id: number;
  text: string;
  completed: boolean;
}

export namespace RouterModel {
  export enum Filter {
    SHOW_ALL = 'all',
    SHOW_ACTIVE = 'active',
    SHOW_COMPLETED = 'completed'
  }
}