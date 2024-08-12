const express = require("express");
const app = express();
const port = 3000;

app.get("/auth/callback", async function (req, res) {
  const code = req.query.code;
  const next = req.query.next ?? "/";
  console.log(req.query,'zzz reqqq')
  const SUPABASE_URL = "https://mivdbkihexmoiftqtwic.supabase.co";
  const SUPABASE_ANON_KEY =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1pdmRia2loZXhtb2lmdHF0d2ljIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjMyODkxOTYsImV4cCI6MjAzODg2NTE5Nn0.jCQUVxW6mqvnw71pbtssrCVdOqrWnQIl01ncdgWFvUU";
  if (code) {
    const supabase = createServerClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
      cookies: {
        getAll() {
          return parseCookieHeader(context.req.headers.cookie ?? "");
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value, options }) =>
            context.res.appendHeader(
              "Set-Cookie",
              serializeCookieHeader(name, value, options)
            )
          );
        },
      },
    });
    await supabase.auth.exchangeCodeForSession(code);
  }

  res.redirect(303, `/${next.slice(1)}`);
});
app.get("/", (req, res) => {
    // console.log(req.query,'zzz reqqq')
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
