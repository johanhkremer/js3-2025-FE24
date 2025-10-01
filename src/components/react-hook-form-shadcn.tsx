import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import LoadSpinner from "./loadspinner"
import { toast } from "sonner"

const formSchema = z.object({
    email: z.email().trim(),
    password: z.string().min(8).trim(),
})

type FormFields = z.infer<typeof formSchema>

export function ReactHookFormShadcn() {
    const form = useForm<FormFields>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: ""
        }
    })

    const { formState } = form
    const { isSubmitting, isSubmitted } = formState

    const onSubmit = async (values: FormFields) => {
        await new Promise((resolve) => setTimeout(resolve, 1000))
        console.log(values)
    }

    return (
        <>
            {isSubmitted && toast("Your form was submitted.")}
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <h3>React Hook Form With Shadcn</h3>
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input placeholder="email" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Password</FormLabel>
                                <FormControl>
                                    <Input placeholder="password" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button disabled={isSubmitting} type="submit">
                        {isSubmitting
                            ? <LoadSpinner size="sm" />
                            : "Submit"}
                    </Button>
                </form>
            </Form>
        </>
    )
}