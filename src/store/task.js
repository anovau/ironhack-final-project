import { defineStore } from 'pinia'
import { supabase } from "../supabase"

export const useTaskStore = defineStore('task', {
    // arrow function recommended for full type inference
    state: () => {
        return {
            // all these properties will have their type inferred automatically
            // Guardaremos los task que nos de supabase
            tasks: []
        }
    },
    actions: {

        async getTask() {
            //TODO guardar en el stado las task que nos de supabase
                const response = await supabase
                    .from("task")
                    .select("*")
                    .order("id", { ascending: false })
                this.task = response.data
                return response.data
        },

       async updateTask(id, title, description) {
            // TODO modificar el estado de la task
            // Encontrar el indice de la task con ese id y cambiar su contenido con task
            const response = await supabase
        .from('task')
        .update({ title: title, description: description })
        .eq('id', id)
        },

        async deleteTask(taskId) {
            // TODO modificar el estado borrando esa task
            // Encontramos el indice de ese id y eliminamos ese indice de la array
            const response = await supabase
            .from('task')
            .delete()
            .eq('id', taskId)
        },

        async addTask(id, title, description) {
            const response = await supabase.from('task')
        .insert({
            user_id: id,
            title: title,
            description: description,
          });
    // TODO identificar la  respuesta y retornar lo que necesitemos p.ej true si se ha insertado el registro y false si no
    // El response no retorna el id de la task que se ha creado tendremos que volver a hace un getTask para obtener los id
    console.log(response);
    console.log("Funcion newTask")
    
        },
        async taskDone(id, isCompleted) {
            const response = await supabase.from('task')
                    .update({ isCompleted: isCompleted })
                    .match({ id: id })
    // TODO identificar la  respuesta y retornar lo que necesitemos p.ej true si se ha insertado el registro y false si no
    // El response no retorna el id de la task que se ha creado tendremos que volver a hace un getTask para obtener los id
    console.log(response);
    console.log("Funcion newTask")
    
        }



    }
})