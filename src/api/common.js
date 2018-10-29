import axios from 'axios';
import { stringify } from 'qs';
import './interceptors';

const API = 'http://123.0.0.1:8080';

axios.defaults.withCredentials = true;

export const commonPatch = (params => axios.patch(`${API}/cost/member`, params));
export const commonDel = (params => axios.delete(`${API}/cost/member/${params.memberId}`, params));
export const commonGet = (params => axios.get(`${API}/app/member/getAllMyAppIdWithRole${stringify(params)}`));
export const commonPut = (params => axios.post(`${API}/app/member/quitAppIdAndTransferOther`, params));
