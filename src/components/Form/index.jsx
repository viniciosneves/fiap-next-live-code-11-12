import { createUser } from "@/actions/create-user"
import { TextInput } from "../TextInput"

export const Form = () => {

    return <form action={createUser}>
        <h2>Formulário</h2>
        <TextInput 
            placeholder="Nome" 
            name="nome" 
            required
        />
        <TextInput 
            placeholder="E-mail" 
            name="email" 
            required
        />
        <TextInput 
            placeholder="Telefone" 
            name="telefone"
            required
        />
        <button>
            enviar
        </button>
    </form>
}