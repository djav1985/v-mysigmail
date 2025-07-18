export const iconUrl = name =>
  process.env.VUE_APP_API_URL
    ? `${process.env.VUE_APP_API_URL}/icons/${name}`
    : `/icons/${name}`
