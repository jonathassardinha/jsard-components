import { FormEvent, ReactNode } from "react";

export interface FormProviderProps {
  onSubmit: (formData: { [key: string]: string }) => void;
  children: ReactNode;
}

function FormProvider({ onSubmit, children }: FormProviderProps) {
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
      if (element instanceof HTMLInputElement)
        newFormData[element.name] = element.value;
    }
    onSubmit(newFormData);
  };

  return (
    // eslint-disable-next-line jsx-a11y/no-redundant-roles
    <form role="form" onSubmit={handleSubmit}>
      {children}
    </form>
  );
}

export default FormProvider;
