"use client";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

interface Props {
    open: boolean;
    onOpenChange: (open: boolean) => void;
}

// Zod schema for validation
const formSchema = z.object({
    name: z.string().min(1, "Name must be at least 2 characters"),
    email: z.string().email("Invalid email address"),
    website: z.string().url("Invalid website URL").optional().or(z.literal("")),
    description: z.string().min(5, "Please describe how you'd like to work with us").optional(),
});

export const DialogButton = ({ onOpenChange, open }: Props) => {
    const [isPending, setIsPending] = useState(false);

    const { register, handleSubmit, reset } = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            website: "",
            description: "",
        },
    });


    const onSubmit = async (data: z.infer<typeof formSchema>) => {
        try {
            setIsPending(true);

            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                throw new Error("Failed to submit form");
            }

            toast.success("Contact submitted successfully!");
            reset();
            onOpenChange(false);
        } catch (error) {
            console.error(error);
            toast.error("Something went wrong.");
        } finally {
            setIsPending(false);
        }
    };

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Contact Us</DialogTitle>
                </DialogHeader>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="grid gap-4">
                        <div className="grid gap-3">
                            <Label htmlFor="name">Your Name</Label>
                            <Input type="text" id="name" {...register("name")} required />
                        </div>

                        <div className="grid gap-3">
                            <Label htmlFor="email">Your Email</Label>
                            <Input type="email" id="email" {...register("email")} required />
                        </div>

                        <div className="grid gap-3">
                            <Label htmlFor="website">Company Website (Optional)</Label>
                            <Input type="url" id="website" {...register("website")} />
                        </div>

                        <div className="grid gap-3">
                            <Label htmlFor="description">How would you like to work with us?</Label>
                            <Input type="text" id="description" {...register("description")} />
                        </div>
                    </div>

                    <DialogFooter>
                        <DialogClose asChild>
                            <Button
                                type="button"
                                variant="outline"
                                className="border border-gray-300 cursor-pointer mt-2"
                            >
                                Cancel
                            </Button>
                        </DialogClose>

                        <Button
                            type="submit"
                            variant="secondary"
                            disabled={isPending}
                            className="cursor-pointer bg-blue-600 text-white  hover:bg-blue-700 mt-2"
                        >
                            Send
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
};