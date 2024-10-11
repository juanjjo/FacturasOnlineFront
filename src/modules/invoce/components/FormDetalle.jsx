import { TextField } from "@mui/material";
// import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
// import { DatePicker } from "antd";
import dayjs from 'dayjs'; // Importa dayjs

import Divider from '@mui/material/Divider';
// steper
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import 'animate.css';

export const FormDetalle = ({ stateForm, onFormValidationChange }) => {
    const [date, setDate] = React.useState(dayjs());


    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors, isValid }, // Incluye isValid
    } = useForm();

    const handleChange = (dateChange) => {
        const formattedDate = dateChange ? dateChange.format("YYYY-MM-DD") : "";
        setValue("fecha", formattedDate, {
            shouldDirty: true
        });
        setDate(dateChange);
    };

    useEffect(() => {
        console.log(stateForm);
        if(stateForm.next == true && stateForm.state == 1){
            const result = handleSubmit(onSubmit)();
            if (result && !isValid) {
                console.log("Errores de validación:", errors);
                onFormValidationChange({ next: false, stateForm: '1' });
            }
        }
    }, [stateForm,setValue]);



    const onSubmit = (data) => {
        console.log(data);
        onFormValidationChange({ dataForm: data, next: true, stateForm: '2' });

    };

    return (
        <>
            <div className="flex-col justify-center mt-6 md:mt-8 max-w-3xl mx-auto border  pb-6 rounded-xl
            animate__animated animate__fadeIn">
                <div className="px-4 py-2">
                    <h4 className="text-primary md:text-2xl">Detalle Factura</h4>
                </div>
                <Divider />
                <div className="px-4 mt-2">
                    <form >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DatePicker
                                    label="Selecciona una fecha"
                                    value={date}
                                    onChange={handleChange}
                                    sx={{
                                        width: '100%',
                                        marginTop: '8px',
                                        '& .MuiOutlinedInput-root': {
                                            height: '50px',
                                        },
                                    }}

                                />
                            </LocalizationProvider>
                            <TextField
                                label="Folio"
                                {...register("folio", { required: "El folio es obligatorio" })}
                                sx={{
                                    width: '100%',
                                    '& .MuiInputBase-input': {
                                        height: '1em',
                                    },
                                }}
                                className="margin-top-desktop"
                                error={!!errors.folio}
                                helperText={errors.folio?.message}
                            />
                            <TextField id="outlined-basic" label="Email" variant="outlined"
                                {...register("email", { required: "El email es obligatorio" })}
                                sx={{
                                    width: '100%',
                                    '& .MuiInputBase-input': {
                                        height: '1em',
                                    },
                                }}
                                error={!!errors.email}
                                helperText={errors.email?.message}
                            />
                            <TextField id="outlined-basic" label="Nombre cliente" variant="outlined"
                                {...register("cliente", { required: 'EL cliente es obligatorio' })}
                                sx={{
                                    width: '100%',
                                    '& .MuiInputBase-input': {
                                        height: '1em',
                                    },
                                }}
                                error={!!errors.cliente}
                                helperText={errors.cliente?.message}
                            />
                            <TextField id="outlined-basic" label="Descripción" variant="outlined"
                                {...register("descripcion", { required: 'La descripción es obligatoria' })}
                                sx={{
                                    width: '100%',
                                    '& .MuiInputBase-input': {
                                        height: '1em',
                                    },
                                }}
                                error={!!errors.descripcion}
                                helperText={errors.descripcion?.message}
                            />
                            <TextField id="outlined-basic" label="Observación" variant="outlined"
                                {...register("observacion", { required: false })}
                                sx={{
                                    width: '100%',
                                    '& .MuiInputBase-input': {
                                        height: '1em',
                                    },
                                }}
                            />
                        </div>
                    </form>
                </div>
            </div>

        </>
    );
};