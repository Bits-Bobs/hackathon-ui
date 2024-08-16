function path(root: string, subLink: string) {
  return `${root}${subLink}`;
}

const ROOTS_DASHBOARD = '/';

export const PATH_DASHBOARD = {
  root: ROOTS_DASHBOARD,
  general: {
    home: path(ROOTS_DASHBOARD, 'home'),
  },
};
