import React from 'react'
import { Controller } from "react-hook-form";

type InputProps = {
  name: string;
  control: any; //Todo type
  placeholder?: string
  required?: boolean;
  errors: any
}

const errorClassName = "bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:outline outline-red-500 focus:border-red-500"
const defaultClassName = "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline outline-blue-300 focus:border-blue-300"

export const TextInput: React.FC<InputProps> = ({ name, control, placeholder, required }) => {
  return (
    <>
      <Controller
        render={({ field, fieldState: { error } }) => <>
          <input className={`${error ? errorClassName : defaultClassName} block w-full p-2.5`} placeholder={placeholder} type="text" {...field} />
          {error &&
            <div className="ui pointing red basic label">
              <p className="mt-2 text-sm text-red-600 dark:text-red-500"><span className="font-medium">Validační chyba!</span> Toto pole je povinné pole.</p>
            </div>

          }
        </>}
        name={name}
        control={control}
        defaultValue=""
        rules={{ required: required }}
      />
    </>
  )
}
