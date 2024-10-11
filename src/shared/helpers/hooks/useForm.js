import { useState } from 'react';

export const useForm = ( initialForm = {} ) => {
  
    const [ formState, setFormState ] = useState( initialForm );
    const [errors, setErrors] = useState({});

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        console.log(target);
        setFormState({
            ...formState,
            [ name ]: value
        });
    }

    const onResetForm = () => {
        console.log('entro aqui');
        setFormState( initialForm );
        setErrors({});
    }

    const validate = () => {
        const validationErrors = validateForm(formState);
        setErrors(validationErrors);
        return Object.keys(validationErrors).length === 0;
    };

    return {
        ...formState,
        formState, 
        onInputChange,
        onResetForm,
        errors,
        validate,
    }
}