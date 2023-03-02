import request from '@utils/request';

type UserInfo = {
  data: {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;
  };
  support: {
    url: string;
    text: string;
  };
};

/**
 * 示例：获取用户信息
 * @param id 用户id
 */
export const getUserInfo = async (id: number) => {
  const data = await request<UserInfo>({
    baseURL: 'https://reqres.in',
    url: `/api/users/${id}`,
  });
  return data;
};
