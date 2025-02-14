import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { httpClient } from "../../app/services/httpClient";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";

export function useUnitController() {
  const { control, register, handleSubmit, formState: { errors }, setValue } = useForm();

  const { id } = useParams();
  
  const [unit, setUnit] = useState(null);

  const [isOpen, setIsOpen] = useState(false);

  const [isOpenDelete, setIsOpenDelete] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const getUnit = async () => {
      const res = await httpClient.get(`/users/units/${id}`);
      console.log(res?.data?.unit);
      
      setUnit(res?.data?.unit);
      setValue('name', res?.data?.unit.name);
      setValue('cnpj', res?.data?.unit.cnpj);
      setValue('percentage', res?.data?.unit.percentage);
      setValue('royalties', res?.data?.unit.royalties);
    }
    getUnit();
  }, [])

  const onSubmitUpdate = handleSubmit(async (data) => {
    console.log(data);
    // return;
    try {
      const res = await httpClient.put(`/users/units/${id}`, data);
      console.log(res);
      if(!res?.data?.unit?.id) throw new Error("Error on update unit");

      toast.success("Unidade atualizada com sucesso");
      setUnit(res?.data?.unit);
      setIsOpen(false);
    } catch (error) {
      console.log(error);
      toast.error("Erro ao atualizar unidade");
    }
  });

  const deleteUnit = async () => {
    try {
      const res = await httpClient.delete(`/users/units/${id}`);
      console.log(res);
      if(res?.status != 200) throw new Error("Error on delete unit");

      toast.success("Unidade excluída com sucesso");
      setIsOpenDelete(false);
      navigate("/units");
    } catch (error) {
      console.log(error);
      toast.error("Erro ao excluir unidade");
    }
  };

  return {
    register,
    control,
    errors,
    setValue,
    onSubmitUpdate,
    unit,
    isOpen,
    setIsOpen,
    isOpenDelete,
    setIsOpenDelete,
    deleteUnit,
  }
}