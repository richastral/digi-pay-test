import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/auth/signup',
    pathMatch: 'full',
  },
  {
    path: 'auth',
    loadComponent: () =>
      import('./auth/auth.component').then((m) => m.AuthComponent),
    children: [
      {
        path: 'signup',
        loadComponent: () =>
          import('./auth/signup/signup.page').then((m) => m.SignupPage),
      },
      {
        path: 'import',
        loadComponent: () =>
          import('./auth/import/import.page').then((m) => m.ImportPage),
      },
    ],
  },
  {
    path: 'tabs',
    loadComponent: () => import('./tabs/tabs.page').then((m) => m.TabsPage),
    children: [
      {
        path: 'accounts',
        loadComponent: () =>
          import('./tabs/accounts/accounts.page').then((m) => m.AccountsPage),
      },
      {
        path: 'add-account',
        loadComponent: () =>
          import('./tabs/add-account/add-account.page').then(
            (m) => m.AddAccountPage,
          ),
      },
      {
        path: 'transactions',
        loadComponent: () =>
          import('./tabs/transactions/transactions.page').then(
            (m) => m.TransactionsPage,
          ),
      },
      {
        path: 'contacts',
        loadComponent: () =>
          import('./tabs/contacts/contacts.page').then((m) => m.ContactsPage),
      },
      {
        path: 'settings',
        loadComponent: () =>
          import('./tabs/settings/settings.page').then((m) => m.SettingsPage),
      },
    ],
  },
];
