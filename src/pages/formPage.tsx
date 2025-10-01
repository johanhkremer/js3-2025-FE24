import ReactHookForm from "@/components/react-hook-form"
import { ReactHookFormShadcn } from "@/components/react-hook-form-shadcn"
import ReactHookFormZod from "@/components/react-hook-form-zod"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { useState } from "react"

const formVariants: string[] = [
    "React-Hook-Form",
    "React-Hook-Form-Zod",
    "React-Hook-Form-Shadcn"
]

const FormPage = () => {
    const [changeForm, setChangeForm] = useState<string>("React-Hook-Form")

    return (
        <>
            <h1>Form Page</h1>

            <div className="flex gap-3 mb-3">
                {formVariants.map((formVariant, index) => (
                    <Button key={index} onClick={() => setChangeForm(formVariant)}>{formVariant}</Button>
                ))}
            </div>

            <section>
                <Card className="p-6 max-w-2xs">
                    {changeForm === "React-Hook-Form" && <ReactHookForm />}
                    {changeForm === "React-Hook-Form-Zod" && <ReactHookFormZod />}
                    {changeForm === "React-Hook-Form-Shadcn" && <ReactHookFormShadcn />}
                </Card>
            </section>
        </>
    )
}

export default FormPage
