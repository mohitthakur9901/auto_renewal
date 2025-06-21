function path(root: string, sublink: string) {
  return `${root}${sublink}`;
}

const ROOTS_DASHBOARD = "/dashboard";
const BASE_PATH = "/";

export const PATH_DASHBOARD = {
  root: ROOTS_DASHBOARD,
  analytics: path(ROOTS_DASHBOARD, "/analytics"),
  admin: {
    root: path(ROOTS_DASHBOARD, "/admin"),
    services: path(ROOTS_DASHBOARD, "/admin/services"),
    subscriptions: path(ROOTS_DASHBOARD, "/admin/subscriptions"),
    members: path(ROOTS_DASHBOARD, "/admin/members"),
    users: path(ROOTS_DASHBOARD, "/admin/users"),
  },
  members: {
    root: path(ROOTS_DASHBOARD, "/members"),
    list: path(ROOTS_DASHBOARD, "/members/list"),
    new: path(ROOTS_DASHBOARD, "/members/new"),
    view: path(ROOTS_DASHBOARD, "/members/:id"),
  },
  services: {
    root: path(ROOTS_DASHBOARD, "/services"),
    email: path(ROOTS_DASHBOARD, "/services/email"),
    whatsapp: path(ROOTS_DASHBOARD, "/services/whatsapp"),
  },
  account: {
    root: path(ROOTS_DASHBOARD, "/account"),
    settings: path(ROOTS_DASHBOARD, "/account/settings"),
    billing: path(ROOTS_DASHBOARD, "/account/billing"),
    notifications: path(ROOTS_DASHBOARD, "/account/notifications"),
    security: path(ROOTS_DASHBOARD, "/account/security"),
  },
};

export const PATH_BASE = {
  root: BASE_PATH,
  about: path(BASE_PATH, "about"),
  contact: path(BASE_PATH, "contact"),
  pricing: path(BASE_PATH, "pricing"),
};
