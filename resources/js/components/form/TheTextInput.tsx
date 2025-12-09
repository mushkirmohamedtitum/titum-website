/* eslint-disable @typescript-eslint/no-explicit-any */
import { THEME } from '@/constants/theme';
import { FunctionComponent } from 'react';
import { Controller } from 'react-hook-form';
import { useTheme } from '../ThemeProvider';
import { Field, FieldError, FieldLabel } from '../ui/field';
import { Input } from '../ui/input';

interface ITextInput {
    id: string;
    required?: boolean;
    label: string;
    placeholder?: string;
    form?: any;
}

const TheTextInput: FunctionComponent<ITextInput> = ({ id, required, label, placeholder, form }) => {
    const { theme } = useTheme();

    return (
        <Controller
            name={id}
            control={form.control}
            render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor={id} className={`${theme == THEME.DARK ? 'text-slate-200' : 'text-logoPurple'}`}>
                        {label}
                        {required && <span className="-ml-2 text-red-500">*</span>}
                    </FieldLabel>
                    <Input {...field} id={id} aria-invalid={fieldState.invalid} placeholder={placeholder} autoComplete="off" />
                    {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                </Field>
            )}
        ></Controller>
    );
};

export default TheTextInput;
