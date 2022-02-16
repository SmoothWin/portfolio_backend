
const path = require('path');

module.exports = ({ env }) => ({
  connections: {
    default:{
      client: "postgres",
            host: env("DATABASE_HOST", "localhost"),
            port: env.int("DATABASE_PORT", 5432),
            database: env("DATABASE_NAME", "bank"),
            username: env("DATABASE_USERNAME", "postgres"),
            password: env("DATABASE_PASSWORD", "0000"),
            schema: env("DATABASE_SCHEMA", "public"),
    },
  },
});
