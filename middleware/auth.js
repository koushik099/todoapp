import { defineNuxtRouteMiddleware, navigateTo } from '#app';
import { useClerk } from '#imports';
import { RedirectToSignIn } from '@clerk/vue';

export default defineNuxtRouteMiddleware(() => {
  const clerk = useClerk();
  const { user }=useUser();
  useEffect(() => {
    if (user) {
      redirect('/')
    }
  }, [user]);
});