import { DEFAULT_PAGE_NUM, DEFAULT_PAGE_SIZE } from '@/const'
import { getTodoList, QueryTodoList } from '@/services/todo/TodoController'
import { useRequest } from '@umijs/max'
import { TableProps } from 'antd'
import React, { useMemo, useState } from 'react'

export default () => {
  const query: QueryTodoList = {
    pageNum: DEFAULT_PAGE_NUM,
    pageSize: DEFAULT_PAGE_SIZE,
    order: '-createdAt'
  }

  const [filter, setFilter] = useState<QueryTodoList>(query)

  const { data, run,loading, refresh } = useRequest((_filter) => getTodoList(_filter), {
    manual: true,
    onSuccess(r, params) {
      setFilter(params[0])
    }
  })

  const list = useMemo(() => {
    return data?.results || []
  }, [data])

  const total = data?.count || 0

  const onChange: TableProps<Unpacked<typeof list>>['onChange'] = (pagination, filters, sorter) => {
    const { current, pageSize } = pagination
    const { field, order } = sorter

    const orderBy = order ? order === 'descend' ? `-${field}` : `+${field}` : '-createdAt'

    run({
      pageNum: current,
      pageSize,
      order: orderBy
    })
  }

  const tableProps: TableProps<Unpacked<typeof list>> = {
    onChange,
    pagination: {
      current: filter.pageNum,
      pageSize: filter.pageSize,
      total
    }
  }


  return {
    filter,
    list,
    run,
    tableProps,
    refresh
  }
}