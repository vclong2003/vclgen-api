enum EPasswordConfigKey {
  Rounds = 'rounds',
}

const passwordConfig = () => ({
  [EPasswordConfigKey.Rounds]: parseInt(process.env.PASSWORD_ROUNDS),
});

export { EPasswordConfigKey };
export default passwordConfig;
