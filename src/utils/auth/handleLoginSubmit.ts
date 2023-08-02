import { FormEvent } from "react";
import login from '@/utils/auth/login';
import { UseErrorAndLoadingType } from '@/types/Error'
import { AsyncTaskFunction } from '@/types/Error'

async function handleLoginFormSubmit(
    event: FormEvent,
    handleAsyncTask: UseErrorAndLoadingType["handleAsyncTask"]
): Promise<void> {

    event.preventDefault();
    const target =
        event.target as typeof event.target & {
        email: { value: string };
        password: { value: string };
    };

    const email = target.email.value;
    const password = target.password.value;
    await handleAsyncTask(login as AsyncTaskFunction, email, password);
}

export default handleLoginFormSubmit;