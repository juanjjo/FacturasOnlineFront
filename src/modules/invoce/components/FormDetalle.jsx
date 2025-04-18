import { TextField } from "@mui/material";
// import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Controller, useForm } from 'react-hook-form'

// import { DatePicker } from "antd";
import dayjs from 'dayjs'; // Importa dayjs

import Divider from '@mui/material/Divider';
// steper
import React, { useEffect } from "react";
import 'animate.css';

export const FormDetalle = ({ stateForm, onFormValidationChange }) => {


    const {
        register,
        handleSubmit,
        setValue,
        reset,
        control,
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
        if (stateForm.next == true && stateForm.state == 1) {
            console.log(stateForm);
            const result = handleSubmit(onSubmit)();
            console.log(result);
            console.log(isValid);
            if (result && !isValid) {
                console.log("Errores de validación:", errors);
               // onFormValidationChange({ next: false, stateForm: '1' });                       
            }
        } else {
            console.log(stateForm);
            console.log("por dios entro aqui");
            if (stateForm.next == false && stateForm.state == 1 && Object.keys(stateForm.dataForm).length > 0) {
                console.log(stateForm);
                console.log("hoo lishit");
                const dataParsed = {
                    ...stateForm.dataForm,
                    fecha: stateForm.dataForm.fecha ? dayjs(stateForm.dataForm.fecha) : null
                };
                console.log(dataParsed);
                reset(dataParsed);
            }else{
                console.log(stateForm);
                //onFormValidationChange({ next: false, stateForm: '1' });
            }
        }
        //reset(stateForm.dataForm);
    }, [stateForm, setValue]);



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
                                <Controller
                                    control={control}
                                    name='fecha'
                                    render={({ field, fieldState }) => (
                                        <DatePicker
                                            label="Selecciona una fecha"
                                            value={field.value}
                                            onChange={(newValue) => {
                                                field.onChange(newValue);
                                            }}
                                            slotProps={{
                                                textField: {
                                                    error: !!fieldState.error,
                                                    helperText: fieldState.error?.message,
                                                    sx: {
                                                        width: '100%',
                                                        marginTop: '8px',
                                                        '& .MuiOutlinedInput-root': {
                                                            height: '50px',
                                                        },
                                                    },
                                                },
                                            }}
                                        />
                                    )}
                                />
                            </LocalizationProvider>
                            <TextField id="outlined-basic" label="Email" variant="outlined"
                                {...register("email", { required: "El email es obligatorio" })}
                                sx={{
                                    width: '100%',
                                    '& .MuiInputBase-input': {
                                        height: '1em',
                                    },
                                }}
                                className="margin-top-desktop"
                                error={!!errors.email}
                                helperText={errors.email?.message}
                            />
                            <TextField
                                label="Apellido"
                                {...register("apellido", { required: "El folio es obligatorio" })}
                                sx={{
                                    width: '100%',
                                    '& .MuiInputBase-input': {
                                        height: '1em',
                                    },
                                }}
                                error={!!errors.apellido}
                                helperText={errors.apellido?.message}
                            />
                            <TextField id="outlined-basic" label="Nombre cliente" variant="outlined"
                                {...register("nombre", { required: 'EL nombre es obligatorio' })}
                                sx={{
                                    width: '100%',
                                    '& .MuiInputBase-input': {
                                        height: '1em',
                                    },
                                }}
                                error={!!errors.nombre}
                                helperText={errors.nombre?.message}
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