"use client";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"
import { CornerDownLeft, Delete, Redo, Undo } from "lucide-react"
import { useCalcultor } from "../hooks/use-Calculator";


export const FourFunction = () => {
    const {
        display,
        handleButtonClick,
        handleKeyDown,
        history,
        lastAnswer,
        operatorButtons,
        redoStack,
        setDisplay
    } = useCalcultor();

    // Buttons for top utility functions
    const utilityButtons = [
        { label: "undo", icon: <Undo className="size-6" />, disabled: history.length === 0 },
        { label: "redo", icon: <Redo className="size-6" />, disabled: redoStack.length === 0 },
        { label: "clear all", icon: "clear all", disabled: false },
        { label: "delete", icon: <Delete className="size-6" />, disabled: history.length === 0 },
    ];

    // Calculator buttons grid
    const calcButtons = [
        "(", ")", "√", "÷",
        "7", "8", "9", "x",
        "4", "5", "6", "-",
        "1", "2", "3", "+",
        "0", ".", "ans", "Enter",
    ];
    return (
        <div className="flex flex-col items-center justify-end md:justify-center min-h-screen p-0 md:p-4 md:fixed md:left-0 md:right-0">
            <div className="w-full md:max-w-sm rounded-none border-0 md:border border-gray-300">
                <div className="h-48 md:h-60 rounded p-5 overflow-y-auto text-sm space-y-1" />

                {/* input selection */}
                <div className="relative">
                    <Input
                        value={display}
                        onKeyDown={handleKeyDown}
                        onChange={(e) => setDisplay(e.target.value)}
                        className="rounded-none border-l-0 border-r-0 h-14 text-lg"
                    />
                    {lastAnswer && (
                        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground whitespace-nowrap">
                            = {lastAnswer}
                        </span>
                    )}
                </div>


                {/* button grid */}
                <div className="grid grid-cols-4 gap-1 rounded-none p-1 bg-gray-100">
                    {utilityButtons.map((item) => (
                        <Button
                            variant="ghost"
                            key={item.label}
                            onClick={() => handleButtonClick(item.label)}
                            className="text-muted-foreground flex items-center cursor-pointer justify-center p-2 hover:bg-gray-300 rounded-lg hover:text-black">
                            {item.icon}
                        </Button>
                    ))}
                    {calcButtons.map((item) => (
                        <Button
                            key={item}
                            onClick={() => handleButtonClick(item)}
                            className={cn("rounded-none text-black border cursor-pointer border-gray-300",
                                item === "Enter" ? "bg-blue-500 hover:bg-blue-600 text-white flex items-center justify-center gap-2"
                                    : operatorButtons.includes(item)
                                        ? "bg-white hover:bg-gray-100"
                                        : "bg-gray-300 hover:bg-gray-400"
                            )} >
                            {item === "Enter" ? (
                                <>
                                    <CornerDownLeft className="size-4" />
                                </>
                            )
                                : item
                            }
                        </Button>
                    ))}
                </div>
            </div>
        </div>
    )
}