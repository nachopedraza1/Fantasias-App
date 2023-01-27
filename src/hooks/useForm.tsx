import { ChangeEvent, useState } from "react"


export const useForm = <T extends object>(initState: T) => {

    const [formState, setFormState] = useState(initState);

    const onInpuChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [name]: value
        })
    }

    return {
        formState,
        onInpuChange,
        ...formState,
    }
}
