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
      <main className="flex-1 rounded-3xl flex flex-col gap-6 p-20  min-h-screen items-center justify-center">
        <div className="p-20 rounded-3xl bg-black/30 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-green-600 via-purple-600 to-orange-600">
        <form action={addToWaitlistAction} className="flex flex-col gap-4 mt-6">
          <label htmlFor="email" className="font-medium text-3xl">
            Join the waitlist!
          </label>
          <Input 
            className="text-xl"
            type="email"
            name="email"
            placeholder="Enter your email"
            required
          />
          <SubmitButton>Submit</SubmitButton>
        </form>
        </div>
      </main>
    </>
  );
}