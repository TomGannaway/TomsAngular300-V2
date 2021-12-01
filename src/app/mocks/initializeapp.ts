import { environment } from 'src/environments/environment';

export function initializeApp(): Promise<void> {
  return new Promise(resolve => {
    if (environment.production === false) {
      import('./hypertheory-learning.mock-server').then(m => {
        m.mockServer();
        resolve();
      });
    } else {
      resolve();
    }
  });
}
