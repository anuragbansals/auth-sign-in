
import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
// const supabase = createClient('https://xyzcompany.supabase.co', 'public-anon-key')

// document.getElementById('linkedin-button').addEventListener('click', function() {
//     const clientId = 'YOUR_CLIENT_ID';
//     const redirectUri = 'YOUR_REDIRECT_URI';
//     const scope = 'r_liteprofile r_emailaddress'; // Specify the permissions your app requires

//     // Step 1: Redirect to LinkedIn's OAuth 2.0 authorization page
//     const authorizationUrl = `https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=${clientId}&redirect_uri=${encodeURIComponent(redirectUri)}&scope=${encodeURIComponent(scope)}`;
    
//     window.location.href = authorizationUrl;
// });


const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1pdmRia2loZXhtb2lmdHF0d2ljIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjMyODkxOTYsImV4cCI6MjAzODg2NTE5Nn0.jCQUVxW6mqvnw71pbtssrCVdOqrWnQIl01ncdgWFvUU'

const SUPABASE_URL = "https://mivdbkihexmoiftqtwic.supabase.co"
const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

async function signInWithFacebook() {
    console.log('signInWithFacebook');
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'facebook'
    })

    console.log(error,'zzz error')

    console.log(data,'zzz data');
  }

  let btn = document.getElementById('fb-btn');
  btn.addEventListener('click', signInWithFacebook);
//   signInWithFacebook();