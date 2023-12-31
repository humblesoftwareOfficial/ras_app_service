export const groupByAttributes = (array: any[], key: string) => {
  return array.reduce((result, obj) => {
    const keyValue = obj[key];

    if (!result[keyValue]) {
      result[keyValue] = [];
    }

    result[keyValue].push(obj);

    return result;
  }, {});
};

export const ErrorMessages = {
  INTERNAL_SERVER_ERROR: 'An internal error has occurred. Please try again',
  ERROR_GETTING_DATA: 'Error while getting data',
  ERROR_CREATING_DATA: 'Error while creating new ',
  REQUIRED_FIELD_ERROR: 'Some required field(s) is (are) not provided.',
};
