/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-key */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */

'use client'

import { useOperators } from "@/components/operator/hooks/operator.hook";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";

const schema = yup
  .object({
    name: yup.string().required(),
    email: yup.string().email().required(),
  })
  .required()

export default function Operator() {
  const { operators, deleteOperator } = useOperators();

  // react-hook-forms para formularios
  // eslint-disable-next-line no-empty-pattern
  const {} = useForm({
    resolver: yupResolver(schema),
  });

  async function handleDeleteOperator(id: string) {
    await deleteOperator(id);
  }

  return (
    <div className="flex flex-col">
      {operators.map((operator) => <button onClick={() => handleDeleteOperator(operator.id)}>{operator.id}</button>)}
    </div >
  )
}

