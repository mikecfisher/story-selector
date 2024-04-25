import { useCallback } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { FormSchema, schema } from "./formSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter, useSearchParams } from "next/navigation";
import { z } from "zod";

export function usePersonalizationForm() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormSchema>({
    resolver: zodResolver(schema),
    defaultValues: {
      placesLived: [{ value: "" }, { value: "" }, { value: "" }],
    },
  });

  const { fields, append } = useFieldArray({
    name: "placesLived",
    control,
  });

  const onSubmit = async (data: z.output<typeof schema>) => {
    router.push(
      "/questions" + "?" + createQueryString("info", JSON.stringify(data))
    );
  };

  const handleAddField = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    append({ value: "" });
  };

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  return {
    register,
    handleSubmit,
    errors,
    fields,
    onSubmit,
    handleAddField,
  };
}
