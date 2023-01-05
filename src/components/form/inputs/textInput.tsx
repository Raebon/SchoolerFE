import React from 'react'
import { Controller } from "react-hook-form";

type InputProps = {
  name: string;
  label: string;
  control: any; //Todo type
  placeholder?: string
  required?: boolean;
  errors: any
}

export const TextInput: React.FC<InputProps> = ({ name, label, control, placeholder, required }) => {
  return (
    <div className="field">
      <label className="label">{label}</label>

      <Controller
        render={({ field, fieldState: { error } }) => <>
          <input className="input" placeholder={placeholder} type="text" {...field} />
          {error &&
            <div className="ui pointing red basic label">
              Povinné pole
            </div>}
        </>}
        name={name}
        control={control}
        defaultValue=""
        rules={{ required: required }}
      />
    </div>
  )
}