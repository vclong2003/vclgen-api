enum EApiConfigKey {
  Port = 'port',
  MongoDbUri = 'mongoUri',
}

const apiConfig = () => ({
  [EApiConfigKey.Port]: parseInt(process.env.PORT),
  [EApiConfigKey.MongoDbUri]: process.env.MONGODB_URI,
});

export { EApiConfigKey };
export default apiConfig;
