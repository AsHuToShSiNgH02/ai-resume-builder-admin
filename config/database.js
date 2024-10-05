const path = require('path');

module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'ep-old-block-a59ij6t1.us-east-2.aws.neon.tech'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'ai-resume-admin'),
      user: env('DATABASE_USERNAME', 'ai-resume-admin_owner'),
      password: env('DATABASE_PASSWORD', 'Kdb73oGCnecP'),
      ssl: {
        rejectUnauthorized: false,
      },
    },
  },
});

