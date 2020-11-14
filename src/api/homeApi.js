'use strict';
import request from '@/utils/http';

// 登录
export const login = (data) => {
  return request({
    url: '/api/v1/login',
    method: 'POST',
    data: data
  }).catch((err) => {
    return Promise.reject(err);
  });
};
