
import { get, post } from '@/common/apiService'
export default {
  //初始化api
  hello: (data: any) => {
    return post(`/api/v1/user/userinfo`, data, true);
  },
  world: (data: any) => {
    return get(`/api/v1/user/userinfo`, data, true);
  },
}
