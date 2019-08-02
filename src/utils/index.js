export const createActionTypes = (module, action) => ({
  [`${action}_${module}`]: `${action}_${module}`,
  [`${action}_${module}_REQUEST`]: `${action}_${module}_REQUEST`,
  [`${action}_${module}_SUCCESS`]: `${action}_${module}_SUCCESS`,
  [`${action}_${module}_FAILED`]: `${action}_${module}_FAILED`
});
