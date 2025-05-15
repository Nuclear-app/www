import Hero from "@/components/hero";
import ConnectSupabaseSteps from "@/components/tutorial/connect-supabase-steps";
import SignUpUserSteps from "@/components/tutorial/sign-up-user-steps";
import { hasEnvVars } from "@/utils/supabase/check-env-vars";

export default async function Home() {
  return (
    <>
    <h1 style={{ fontWeight: "bold", fontSize: "66px" }}>Nuclear</h1>

    <p style={{fontSize: "32px"}}>Under construction<i>-Coming Soon</i></p>
    </>
  );
}
