export enum EInstanceIntervalTime {
  Last_Hour = 'Last_Hour',
  Last_Half_Hour = 'Last_Half_Hour',
  Last_Quarter_Hour = 'Last_Quarter_Hour',
}

export const getTimeInterval = (indicator: EInstanceIntervalTime) => {
  const endDate = new Date("2023-12-28T17:59:22.000Z");
  let startDate = null;
  switch (indicator) {
    case EInstanceIntervalTime.Last_Hour:
      startDate = new Date(endDate.getTime() - 60 * 60 * 1000);
      break;
    case EInstanceIntervalTime.Last_Half_Hour:
      startDate = new Date(endDate.getTime() - 30 * 60 * 1000);
      break;
    case EInstanceIntervalTime.Last_Quarter_Hour:
      startDate = new Date(endDate.getTime() - 15 * 60 * 1000);
      break;
    default:
        startDate = endDate;
      break;
  }
  return { startDate, endDate };
};
