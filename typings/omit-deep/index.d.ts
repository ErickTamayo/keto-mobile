// This package is needed for removing __typename
// https://github.com/apollographql/apollo-feature-requests/issues/6
declare module 'omit-deep' {
  const omitDeep: (obj: {}, key: string) => {}
  export = omitDeep
}
