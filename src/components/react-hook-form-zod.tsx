import { useForm, type SubmitHandler } from "react-hook-form"
import { Button } from "./ui/button"
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod"
import LoadSpinner from "./loadspinner";

const schema = z.object({
    email: z.email().trim(),
    password: z.string().min(8).trim()
})

type FormFields = z.infer<typeof schema>

const ReactHookFormZod = () => {
    const { register, handleSubmit, setError,
        formState:
        { errors, isSubmitting } } = useForm<FormFields>({
            resolver: zodResolver(schema)
        })

    const onSubmit: SubmitHandler<FormFields> = async (data) => {
        try {
            await new Promise((resolve) => setTimeout(resolve, 3000))
            console.log(data)
        } catch (error) {
            setError("root", {
                message: `Somthing went wrong: ${error}`
            })
        }
    }

    return (
        <form className="flex flex-col gap-3" onSubmit={handleSubmit(onSubmit)}>
            <h3>React Hook Form ZOD</h3>

            <label>Email</label>
            <input {...register("email")} type="text" placeholder="type email" />
            {/* Errormeddelande för email */}
            {errors.email && <div className="text-destructive">{errors.email?.message}</div>}

            <label>Password</label>
            <input {...register("password")} type="text" placeholder="type password" />
            {/* Errormeddelande för password */}
            {errors.password && <div className="text-destructive">{errors.password?.message}</div>}

            <Button disabled={isSubmitting} type="submit">
                {isSubmitting
                    ? <LoadSpinner size="sm" />
                    : "Submit"}
            </Button>
        </form>
    )
}

export default ReactHookFormZod