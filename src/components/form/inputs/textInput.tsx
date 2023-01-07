import React from 'react'
import { Controller } from "react-hook-form";

type InputProps = {
  id: number | string;
  name: string;
  control: any; //Todo type
  label?: string
  required?: boolean;
  errors: any
}

const errorInputClassName = "bg-red-50 border-red-500 text-red-900 placeholder-red-700 outline-red-500 focus:border-red-500"
const defaultInputClassName = "bg-gray-50 border-gray-300 text-gray-900 outline-blue-300 focus:border-blue-300"

const errorLabelClassName = "bg-red-50 text-red-500 peer-focus:text-red-500"
const defaultLabelClassName = "bg-gray-50 text-gray-900 peer-focus:text-blue-300"

export const TextInput: React.FC<InputProps> = ({ id, name, control, label, required }) => {
  return (
    <>
      <Controller
        render={({ field, fieldState: { error } }) => <>
          <div className="relative">
            <input
              id={`outlined-${id}`}
              className={`${error ? errorInputClassName : defaultInputClassName} block w-full p-2.5 border text-sm rounded-lg focus:outline appearance-none peer`}
              type="text" {...field}
              placeholder=" " />

            <label
              htmlFor={`outlined-${id}`}
              className={`${error ? errorLabelClassName : defaultLabelClassName} absolute text-sm duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1`}
            >{label}</label>
          </div>
          {error &&
            <div className="ui pointing red basic label">
              <p className="mt-2 text-sm text-red-600 dark:text-red-500"><span className="font-medium">Validační chyba!</span> Toto pole je povinné pole.</p>
            </div>
          }
        </>}
        name={name}
        control={control}
        defaultValue={undefined}
        rules={{ required: required }}
      />
    </>
  )
}
