import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { httpClient } from "../../app/services/httpClient";
import toast from "react-hot-toast";
import { useAddDialog } from "../../app/hooks/useAddDialog";

export function useParticipantsController() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const [participants, setParticipants] = useState([]);

  const { close, setIsLoading } = useAddDialog();

  const onSubmit = handleSubmit(async (data) => {
    console.log(data);
    try {
      setIsLoading(true);
      const res = await httpClient.post("/users/participants", data);
      
      if(!res?.data?.participant?.id) throw new Error("Error to create unit");

      toast.success("Participante criado com sucesso");
      close();
      setTimeout(() => {
        getParticipants();
      }, 1000);
    } catch (error) {
      console.log(error);
      toast.error("Erro ao criar participante");
    } finally {
      setIsLoading(false);
    }
  });

  async function getParticipants() {
    const res = await httpClient.get("/users/participants");
    setParticipants(res?.data?.participants);
  }
  
  useEffect(() => {
    getParticipants();
  }, []);

  function handleFilter() {
    console.log("Filtering...");
  }

  return {
    register,
    errors,
    handleFilter,
    onSubmit,
    participants,
  }
}