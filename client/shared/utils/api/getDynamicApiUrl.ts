import { ApiUrl } from 'app/shared/constants/url';

type Params = {
  [key: string]: string | number;
};
export type GetDynamicApirProps = {
  base: ApiUrl;
  params: Params;
};
export const getDynamicApiUrl = ({ base, params }: GetDynamicApirProps) => {
  const queryString = Object.keys(params)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
    .join('&');
  return `${base}?${queryString}`;
};
