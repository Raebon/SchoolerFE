import { Controller } from "react-hook-form";

type InputProps = {
  label: string
  name: string;
  control: any; //Todo type
}

export const Toggle: React.FC<InputProps> = ({ name, control, label }) => {
  return (
    <>
      <Controller
        render={({ field }) => <>
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" className="sr-only peer"  {...field} />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-blue-600"></div>
            <span className="ml-3 text-sm font-medium text-gray-900">
              {label}
            </span>
          </label>
        </>}
        name={name}
        control={control}
        defaultValue={false}
      />
    </>
  )
}
