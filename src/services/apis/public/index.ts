/*
 * @Date: 2022-07-17
 * @Author: 马晓川 maxc@dustess.com
 * @LastEditors: 马晓川 maxc@dustess.com
 * @LastEditTime: 2022-08-16
 */

import $axios from '@/services/$axios';

export const getUser = () => {
  return $axios.get('/m1/1300842-0-default/pet/1').then((res) => res.data);
};
