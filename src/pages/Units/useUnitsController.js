import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { httpClient } from "../../app/services/httpClient";
import toast from "react-hot-toast";
import { useAddDialog } from "../../app/hooks/useAddDialog";
import { useNavigate } from "react-router-dom";

export function useUnitsController() {
  const { control, register, handleSubmit, formState: { errors }, setValue } = useForm();

  const [units, setUnits] = useState([]);

  const navigate = useNavigate();

  const { close, setIsLoading } = useAddDialog();

  const onSubmit = handleSubmit(async (data) => {
    console.log(data);
    // return;
    try {
      setIsLoading(true);
      const res = await httpClient.post("/users/units", data);
      
      if(!res?.data?.unit?.id) throw new Error("Error to create unit");

      toast.success("Unidade criada com sucesso");
      close();
      setTimeout(() => {
        navigate("/units/" + res.data.unit.id);
      }, 1000);
    } catch (error) {
      console.log(error);
      toast.error("Erro ao criar unidade");
    } finally {
      setIsLoading(false);
    }
  });

  async function getUnits() {
    const res = await httpClient.get("/users/units")
    setUnits(res?.data?.units);
  }
  
  useEffect(() => {
    getUnits();
  }, []);

  function handleFilter() {
    console.log("Filtering...");
  }

  return {
    register,
    errors,
    handleFilter,
    onSubmit,
    units,
    control,
    setValue,
  }
}