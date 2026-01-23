import { Description } from '@/components/ui/form/description'
import { Error } from '@/components/ui/form/error'
import { Label } from '@/components/ui/form/label'

import type { ReactNode } from 'react'

type FieldWrapperProps = {
  label?: undefined | string
  error?: undefined | string
  description?: undefined | ReactNode
  children: ReactNode
}

export type FieldWrapperPassThroughProps = Omit<FieldWrapperProps, 'children'>
// export type FieldWrapperPassThroughProps = Omit<
//   FieldWrapperProps,
//   'children'
// > & { registration: Partial<UseFormRegisterReturn> }

export const FieldWrapper = ({
  label,
  error,
  description,
  children,
}: FieldWrapperProps) => {
  return (
    <div>
      <Label error={error}>
        {label}
        <div className="mt-1">{children}</div>
      </Label>
      <Description>{description}</Description>
      <Error error={error} />
    </div>
  )
}
