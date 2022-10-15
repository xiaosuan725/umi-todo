import moment from "moment"

export const formatTime = (time?: Date | number | string) => {
  return time ? moment(time).format('YYYY-MM-DD HH:mm:ss') : '--'
}