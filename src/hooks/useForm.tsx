import { ChangeEvent, useState } from 'react';

export const useForm = <T extends Object>(initialState: T) => {

    const [formState, setFormState] = useState(initialState);

    const onInputChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [name]: value
        })
    }

    return {
        ...formState,
        formState,
        onInputChange
    }
}
