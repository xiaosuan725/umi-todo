import { request } from '@umijs/max';

export interface QueryTodoList {
  pageSize?: number;
  pageNum?: number;
  order?: string;
}

export interface TodoRecord {
  status: string;
  title: string;
  createdAt: Date;
  updatedAt: Date;
  objectId: string;
}

export async function getTodoList(
  params: QueryTodoList,
  options?: { [key: string]: any },
) {
  return request<API.Pagination_Result<TodoRecord>>('/1.1/classes/todoList', {
    method: 'GET',
    params: {
      skip: (params?.pageSize || 10) * ((params?.pageNum || 1) - 1),
      limit: (params?.pageSize || 10),
      count: 1,
      order: params?.order
    },
    ...(options || {}),
  });
}

interface AddTodoList {
  title: string;
  content?: string;
}

export async function addTodoList(
  body: AddTodoList,
  options?: { [key: string]: any },
) {
  return request<API.Result<API.Pagination_Result<TodoRecord>>>('/1.1/classes/todoList', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}