import { serve } from "https://deno.land/std@0.50.0/http/server.ts";

for await (const req of serve({ port: 8080 })) {
  req.respond({ body: "hello, world\n" });
}
