declare namespace API {
  interface Result<T> {
    data: T
  }

  interface Pagination_Result<T> {
    data: {
      results: T[];
      count: number
    }
  }
}