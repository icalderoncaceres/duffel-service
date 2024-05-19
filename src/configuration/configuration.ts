import { registerAs } from "@nestjs/config";
 
export default registerAs('envs', () => ({
    variable1: process.env.VARIABLE1,
    variable2: process.env.VARIABLE2
}))

// export default () => ({
//   port: parseInt(process.env.PORT, 10) || 3000,
//   database: {
//     host: process.env.DATABASE_HOST,
//     port: parseInt(process.env.DATABASE_PORT, 10) || 5432
//   }
// });