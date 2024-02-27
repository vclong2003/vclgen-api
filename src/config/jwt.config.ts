enum EJwtConfigKey {
  AccessTokenSecret = 'accessTokenSecret',
  AccessTokenExpire = 'accessTokenExpire',
  RefreshTokenSecret = 'refreshTokenSecret',
}

const jwtConfig = async () => ({
  [EJwtConfigKey.AccessTokenSecret]: process.env.JWT_ACCESS_SECRET,
  [EJwtConfigKey.AccessTokenExpire]: process.env.JWT_ACCESS_EXPIRE,

  [EJwtConfigKey.RefreshTokenSecret]: process.env.JWT_REFRESH_SECRET,
});

export { EJwtConfigKey };
export default jwtConfig;
