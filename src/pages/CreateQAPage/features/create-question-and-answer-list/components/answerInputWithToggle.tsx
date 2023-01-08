import React from 'react'
import { TextInput, Toggle } from '../../../../../components/form/inputs';

interface Props {
  label: string
  name: string;
  control: any; //Todo type
  labelInput?: string
  required?: boolean;
  errors: any
}

export const AnswerInputWithToggle: React.FC<Props> = ({ label, name, control, labelInput, required, errors }) => {
  return (
    <>
      <div className="flex mb-2">
        <div className="flex-1">
          <TextInput id={`answer${name}`} name={`answer${name}`} label={labelInput} control={control} errors={errors} required={required} />
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
