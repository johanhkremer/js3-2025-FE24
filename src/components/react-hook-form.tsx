import { useForm, type SubmitHandler } from "react-hook-form"
import { Button } from "./ui/button"

type FormFields = {
    email: string,
    password: string,
}

const ReactHookForm = () => {

    const { register, handleSubmit, setError,
        formState:
        { errors } } = useForm<FormFields>()

    const onSubmit: SubmitHandler<FormFields> = (data) => {

        try {
            console.log(data)

        } catch (error) {
            setError("root", {
                message: `Somthing went wrong: ${error}`
            })
        }
    }

    return (
        <form className="flex flex-col gap-3" onSubmit={handleSubmit(onSubmit)}>
            <h3>React Hook Form</h3>
            <label>Email</label>
            <input {...register("email", {
                required: "Email is required",
                pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/,
                    message: "Must be a valid email "
                },
            })} type="text" placeholder="type email" />
            {errors.email && <div className="text-destructive">{errors.email?.message}</div>}

            <label>Password</label>
            <input {...register("password")} type="text" placeholder="type password" />
            <Button type="submit">Submit</Button>
        </form>
    )
}

export default ReactHookForm