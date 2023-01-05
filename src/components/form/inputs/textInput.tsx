import React from 'react'
import { Controller } from "react-hook-form";

type InputProps = {
  name: string;
  label: string;
  control: any;
}

export const TextInput: React.FC<InputProps> = ({ name, label, control }) => {
  return (
    <div>
      <label htmlFor={name}>{label}:</label>
      <Controller
        render={({ field }) => <input type="text" {...field} />}
        name={name}
        control={control}
        defaultValue=""
      />
    </div>
  )
}
