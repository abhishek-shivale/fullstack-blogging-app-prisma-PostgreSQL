import { Context, Next } from "hono";
import { verify } from "hono/jwt";

export function authMiddleware (app:any){
    app.use("/api/v1/blog/*", async(c:Context, next:Next)=>{
        const header = c.req.header("authorization") || "";
          if (!header) {
            c.status(401);
            return c.json({ error: "unauthorized" });
          }

          const token = header.split(" ")[1];

          const response = await verify(token, c.env.JWT_SECRET);

           if (response.id) {
             next();
           } else {
             c.status(403);
             return c.json({ error: "unauthorized" });
           }
    });
}