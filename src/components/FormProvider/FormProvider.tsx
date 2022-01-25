import { FormEvent, ReactNode } from "react";

export interface FormProviderProps {
  onSubmit: (formData: { [key: string]: string }) => void;
  children: ReactNode;
  useNativeValidation?: boolean;
}

const handleInvalidEvent = (
  event: FormEvent<HTMLFormElement>,
  useNativeValidation?: boolean
) => {
  //prevent the browser from showing default error bubble/ hint
  if (useNativeValidation) return;
  event.preventDefault();
  const target = event.target;
  if (
    target &&
    (target instanceof HTMLInputElement ||
      target instanceof HTMLTextAreaElement)
  ) {
    target.focus();
  }
  return false;
};

function FormProvider({
  onSubmit,
  children,
  useNativeValidation,
}: FormProviderProps) {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    event.stopPropagation();
    const newFormData: { [key: string]: string } = {};
    for (
      let index = 0;
      index < event.currentTarget.elements.length;
      index += 1
    ) {
      const element = event.currentTarget.elements.item(index);
      if (
        element instanceof HTMLInputElement ||
        element instanceof HTMLTextAreaElement
      )
        newFormData[element.name] = element.value;
    }
    onSubmit(newFormData);
  };

  return (
    // eslint-disable-next-line jsx-a11y/no-redundant-roles
    <form
      onInvalid={(event) => handleInvalidEvent(event, useNativeValidation)}
      role="form"
      onSubmit={handleSubmit}
    >
      {children}
    </form>
  );
}

export default FormProvider;
