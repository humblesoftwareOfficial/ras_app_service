module.exports = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '',
  database: 'ras_app',
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  synchronize: true,
};
