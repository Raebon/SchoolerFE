import React from 'react'
import { TextInput, Toggle } from '../../../../../components/form/inputs';

interface Props {
  label: string
  name: string;
  control: any; //Todo type
  placeholder?: string
  required?: boolean;
  errors: any
}

export const AnswerInputWithToggle: React.FC<Props> = ({ label, name, control, placeholder, required, errors }) => {
  return (
    <>
      <div className="flex mb-2">
        <div className="flex-1">
          <TextInput name={`answer${name}`} placeholder={placeholder} control={control} errors={errors} required={required} />
        </div>
      </div>
      <div className="flex mb-3">
        <div className="flex-1 p-2">
          <Toggle label={label} name={`isTrue${name}`} control={control} />
        </div>
      </div>
    </>
  )
}
