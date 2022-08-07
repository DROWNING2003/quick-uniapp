/*
 * @Author: zusheng
 * @Date: 2022-04-24 14:43:26
 * @LastEditTime: 2022-05-13 21:07:03
 * @Description:API服务
 * @FilePath: \uni-preset-vue-vite-ts\src\common\apiService.ts
 */

const baseURL = 'https://music.zusheng.club'//apiURI
const sslVerify = false //ssl证书验证
const tokenfield = 'Access-Token'//token字段名

uni.addInterceptor('request', {
  invoke(args) {
    args.url = baseURL + args.url
  }
})

let token: any = ''

/**
 *
 * @param url url
 * @param params 参数
 * @param requireToken 是否手动传递token
 */
export const get = (
  url: string,
  params: any,
  requireToken?: boolean,
): Promise<any> => {
  if (!token) token = uni.getStorageSync('token')

  return new Promise(resolve => {
    const data = params
    if (requireToken && token) data.cookie = encodeURIComponent(token)
    
    const uniReq: any = uni.request({
      url,
      data,
      method: 'GET',
      sslVerify: sslVerify,
      header: {
        tokenfield : token ? token : '',
        'content-type': 'application/json'
      },
    })

    uniReq
      .then((res: any) => {
        resolve(res.data)
      })
      .catch((err: any) => {
        resolve(err)
      })
  })
}
export const post = (
  url: string,
  params: any,
  requireToken?: boolean,
): Promise<any> => {
  if (!token) token = uni.getStorageSync('token')
  return new Promise((resolve, reject) => {
    const data = params
    if (requireToken && token) data.token = encodeURIComponent(token)
    const uniReq: any = uni.request({
      url,
      data,
      method: 'POST',
      sslVerify: sslVerify,
      header: {
        tokenfield : token ? token : '',
        'content-type': 'application/json'
      },
    })

    uniReq
      .then((res: any) => {
        resolve(res.data)
      })
      .catch((err: any) => {
        resolve(err)
      })
  })
}