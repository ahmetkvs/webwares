export const formatSignUpData = (data) => {
  const {
    name,
    email,
    password,
    role,
    storeBankAccount,
    storeName,
    storePhone,
    storeTaxNo,
  } = data;

  if (role === "customer" || role === "admin") {
    return {
      name: name,
      email: email,
      password: password,
      role_id: role === "customer" ? 3 : 1,
    };
  } else {
    return {
      name: name,
      email: email,
      password: password,
      role_id: 2,
      store: {
        name: storeName,
        phone: storePhone,
        tax_no: storeTaxNo,
        bank_account: storeBankAccount,
      },
    };
  }
};

export const formatLogin = (data) => {
  const { email, password } = data;
  return { email: email, password: password };
};
