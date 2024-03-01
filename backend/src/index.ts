import { Hono } from 'hono'
import userRouter from './Routes/user';
import BlogRouter from './Routes/blog';

export const app = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
}>();


app.route("/api/v1/user", userRouter);
app.route("/api/v1/book", BlogRouter);

export default app
