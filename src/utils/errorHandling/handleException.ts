const handleException = (err: any) => {
    if (err instanceof Error) return err.message;
    else throw err;
}

export default handleException;