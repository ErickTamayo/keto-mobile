const email = {
  presence: { allowEmpty: false },
  email: true,
}

const displayName = {
  presence: { allowEmpty: false },
  length: { minimum: 3, tooShort: 'is too short' },
}

const password = {
  presence: { allowEmpty: false },
  length: { minimum: 5, tooShort: 'is too short' },
}

export default {
  email,
  displayName,
  password,
}
