const createActionTypes = (module, action) => {
  const upperModule = module.toUpperCase();
  const upperAction = action.toUpperCase();

  return {
    [`${upperModule}_FETCH_${upperAction}`]: `${upperModule}_FETCH_${upperAction}`,
    [`${upperModule}_SAVE_${upperAction}`]: `${upperModule}_SAVE_${upperAction}`,
    [`${upperModule}_SUCCESS_${upperAction}`]: `${upperModule}_SUCCESS_${upperAction}`,
    [`${upperModule}_FAILED_${upperAction}`]: `${upperModule}_FAILED_${upperAction}`
  };
};

export { createActionTypes };
