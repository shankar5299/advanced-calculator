import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { FaGithub } from "react-icons/fa"
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Alert, AlertTitle } from "@/components/ui/alert";
import { OctagonAlertIcon } from "lucide-react";
import { useState } from "react";
import { authClient } from "@/lib/auth-client";

interface Props {
    open: boolean;
    onOpenChange: (open: boolean) => void;
}

const formSchema = z.object({
    email: z.string().email(),
    password: z.string().min(1, { message: "Password is required" }),
})

export const AuthdialogSignin = ({ onOpenChange, open }: Props) => {
    const [ispending, setIspending] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",
        }
    });

    const onSubmit = (data: z.infer<typeof formSchema>) => {
        setError(null);
        setIspending(true);
        authClient.signIn.email(
            {
                email: data.email,
                password: data.password,
                callbackURL: "/"
            },
            {
                onSuccess: () => {
                    setIspending(false)
                },
                onError: ({ error }) => {
                    setIspending(false)
                    setError(error.message)
                }
            },

        )
    }

    const onSocial = (provider: "github" | "google") => {
        setError(null);
        setIspending(true);
        authClient.signIn.social(
            {
                provider: provider,
                callbackURL: "/"
            },
            {
                onSuccess: () => {
                    setIspending(false)
                },
                onError: ({ error }) => {
                    setIspending(false)
                    setError(error.message)
                }
            },

        )
    }
    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Log in</DialogTitle>
                </DialogHeader>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)}>
                        <div className="grid gap-3">
                            <Button
                                onClick={() => onSocial("google")}
                                variant="outline"
                                className="rounded-none w-full flex items-center gap-3 border-gray-300"
                            >                                <svg className="w-5 h-5" viewBox="0 0 533.5 544.3">
                                    <path fill="#4285F4" d="M533.5 278.4c0-18.7-1.5-37.4-4.7-55.6H272v105.2h146.9c-6.3 33.7-25.4 62.3-54 81.6v67h87.3c51-47 81.3-116.3 81.3-198.2z" />
                                    <path fill="#34A853" d="M272 544.3c73.5 0 135.2-24.3 180.3-66.2l-87.3-67c-24.2 16.2-55.1 25.9-93 25.9-71 0-131.2-47.9-152.7-112.1h-89.5v70.6C67.5 482 162.2 544.3 272 544.3z" />
                                    <path fill="#FBBC05" d="M119.3 324.9c-9.4-27.6-9.4-57.3 0-84.9v-70.6H29.8c-39.8 79.5-39.8 173.6 0 253.1l89.5-70.6z" />
                                    <path fill="#EA4335" d="M272 107.6c39.9-.6 78.3 14.5 107.6 41.8l80.3-80.3C423 24.2 349.4-2.4 272 0 162.2 0 67.5 62.3 29.8 152.1l89.5 70.6C140.8 155.5 201 107.6 272 107.6z" />
                                </svg>
                                Continue with Google
                            </Button>
                            <Button
                                onClick={() => onSocial("github")}
                                variant="outline"
                                className="rounded-none w-full flex items-center gap-3 border-gray-300"
                            >
                                <FaGithub className="size-5 text-black" />
                                Continue with Github
                            </Button>

                            <div className="flex items-center gap-4 my-4">
                                <div className="flex-grow h-px bg-gray-300" />
                                <span className="text-sm text-gray-500">or</span>
                                <div className="flex-grow h-px bg-gray-300" />
                            </div>

                            <div className="space-y-4">
                                <h2 className="text-base font-medium">Continue with email:</h2>

                                <div className="grid gap-3">
                                    <FormField
                                        control={form.control}
                                        name="email"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Email</FormLabel>
                                                <FormControl>
                                                    <Input type="email" placeholder="Email" className="rounded-none" {...field} />
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
                                                    <Input type="password" placeholder="Password" className="rounded-none" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>

                                {!!error && (
                                    <Alert className="bg-destructive/10 border-none rounded-none">
                                        <OctagonAlertIcon className="size-4 !text-destructive" />
                                        <AlertTitle>{error}</AlertTitle>
                                    </Alert>
                                )}
                                <Button disabled={ispending} type="submit" className="w-full mt-2 rounded-none bg-blue-600 hover:bg-blue-700">
                                    Log in
                                </Button>
                            </div>
                        </div>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    )
}