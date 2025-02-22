"use client";

import { ChangeEventHandler, FocusEventHandler, useRef } from "react";
import { Control, Controller, RegisterOptions } from "react-hook-form";
import { Input } from "antd";
import type { InputProps } from "antd/lib/input";

interface RHFInputFieldProps extends InputProps {
  control: Control<any>;
  name: string;
  label?: string | null | undefined;
  description?: string;
  showStatus?: boolean;
  isValidationErrorShow?: boolean;
  onChange?: ChangeEventHandler<HTMLInputElement> | any;
  onBlur?: FocusEventHandler<HTMLInputElement> | any;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  rules?:
    | Omit<
        RegisterOptions<any, string>,
        "valueAsNumber" | "valueAsDate" | "setValueAs" | "disabled"
      >
    | undefined;
}

const RHFInputField = (props: RHFInputFieldProps) => {
  const {
    control,
    isValidationErrorShow = true,
    name,
    label,
    description,
    rules,
    ...rest
  } = props;

  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field, fieldState }) => {
        return (
          <div>
            {label && (
              <label
                className="text-gray-secondary text-sm"
                htmlFor={field.name}
              >
                {label}
              </label>
            )}

            <Input
              {...field}
              {...rest}
              id={name}
              size="large"
              ref={inputRef as any}
              status={fieldState.error ? "error" : undefined} // Show error styling if validation fails
              style={{ fontFamily: "inherit" }}
              onBlur={(e) => {
                field.onBlur();
                if (props.onBlur) {
                  props.onBlur(e.target.value);
                }
              }}
              onChange={(e) => {
                field.onChange(e.target.value);
                if (props.onChange) {
                  props.onChange(e.target.value);
                }
              }}
            />
            {!!description && !(isValidationErrorShow && fieldState.error) && (
              <span className="text-gray-secondary text-sm">{description}</span>
            )}

            {isValidationErrorShow && fieldState.error ? (
              <span className="text-sm text-red-500">
                {fieldState.error?.message}
              </span>
            ) : null}
          </div>
        );
      }}
    />
  );
};

export default RHFInputField;
