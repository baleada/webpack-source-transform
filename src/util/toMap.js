export default function(objectOrMap) {
  return objectOrMap instanceof Map
    ? objectOrMap
    : new Map([
      Object.keys(objectOrMap).map(key => [key, objectOrMap[key]])
    ])
}
