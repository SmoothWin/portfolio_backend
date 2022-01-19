module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'd696c282158b4773e985cb833031b886'),
  },
});
