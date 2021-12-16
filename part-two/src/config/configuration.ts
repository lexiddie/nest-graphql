export const configuration = () => {
  return {
    port: parseInt(process.env.PORT, 10) || 3000,
    dbUri: process.env.DB_CONNECTION
  };
};
