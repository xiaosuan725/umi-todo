import { request } from '@umijs/max';

// 获取用户
export async function getUser(
  options?: { [key: string]: any },
) {
  return request<API.Result<API.User_Record>>('/1.1/users/me', {
    method: 'GET',
    ...(options || {}),
  });
}

// 登陆
export async function login(
  body?: API.Login_Request_Body,
  options?: { [key: string]: any },
) {
  return request<API.Result<API.User_Record>>('/1.1/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

// 更新用户
export async function updateUser(
  { objectId, ...rest }: API.User_Record,
  options?: { [key: string]: any },
) {
  return request<API.Result<API.User_Record>>(`/1.1/users/${objectId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: rest,
    ...(options || {}),
  });
}