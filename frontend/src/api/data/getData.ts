import api from '../config';
import { handleApiResponse, handleApiError } from '../utils';
import { Data } from '../../types/data/data.ts';

export const getData = (): Promise<Data[]> =>
  api.get<Data[]>('/api/v1/data')
    .then(handleApiResponse)
    .catch(handleApiError);