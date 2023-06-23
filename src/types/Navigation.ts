import { ReactNode } from 'react';

export type SubNavigation = {
  id: number;
  name: string;
  link: string;
};

export type Navigation = {
  id: number;
  name: string;
  link?: string;
  icon: ReactNode;
  sub?: SubNavigation[];
};
