import { environment } from 'src/environments/environment';

export const baseUrl = environment.production
  ? 'hhtps:api.shopping.com'
  : 'http://localhost:3000';
export const toDosUrl = baseUrl + '/todos';
