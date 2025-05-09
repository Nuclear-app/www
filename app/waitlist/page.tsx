import Hero from "@/components/hero";
import ConnectSupabaseSteps from "@/components/tutorial/connect-supabase-steps";
import SignUpUserSteps from "@/components/tutorial/sign-up-user-steps";
import { hasEnvVars } from "@/utils/supabase/check-env-vars";
import { addToWaitlistAction } from "@/app/actions";
import { Input } from "@/components/ui/input";
import { SubmitButton } from "@/components/submit-button";

export default async function Waitlist() {
  return (
    <>
      <main className="flex-1 flex flex-col gap-6 px-4">
        <form action={addToWaitlistAction} className="flex flex-col gap-4 mt-6">
          <label htmlFor="email" className="font-medium">
            Join the waitlist!
          </label>
          <Input
            type="email"
            name="email"
            placeholder="Enter your email"
            required
          />
          <SubmitButton>Submit</SubmitButton>
        </form>
      </main>
    </>
  );
}