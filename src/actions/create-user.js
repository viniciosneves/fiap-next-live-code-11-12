'use server'

import db from "@/prisma/db"

export async function createUser(formData) {

    const rawFormData = {
        nome: formData.get('nome'),
        email: formData.get('email'),
        telefone: formData.get('telefone'),
    }

    console.log(rawFormData)

    try {
        await db.user.create({
            data: {
                nome: rawFormData.nome,
                email: rawFormData.email,
                telefone: rawFormData.telefone
            }
        })
    } catch (error) {
        console.log('ops! alguma coisa deu errado', error)
    }


}