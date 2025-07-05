"use client";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"
import { ArrowBigUp, ArrowLeft, ArrowRight, CornerDownLeft, Delete, Redo, Undo } from "lucide-react"
import { useScientificCalcultor } from "../hooks/use-scietificCalcultor";

export const Scientific = () => {
    const { handleKeyDown, isUppercase, operatorButtons, activemode, setActivemode, display, setDisplay, lastAnswer, handleButtonClick, inputRef } = useScientificCalcultor();

    // Buttons for top utility functions
    const utilityButtons = [
        { label: "main", icon: "main" },
        { label: "abc", icon: "abc" },
        { label: "func", icon: "func" },
        { label: "undo", icon: <Undo className="size-6" /> },
        { label: "redo", icon: <Redo className="size-6" /> },
        { label: "clear all", icon: "Clear all" },
        { label: "delete", icon: <Delete className="size-6" /> },
    ];

    const abcButton = [
        "q", "w", "e", "r", "t", "y", "u", "i", "o", "p",
        "a", "s", "d", "f", "g", "h", "j", "k", "=",
        "l", "z", "x", "c", "v", "b", "n", "m",
        "UpArrow", ",", "(", ")", "[", "]", "!", "'", "Enter"

    ];

    const func1 = [
        "sin", "cos", "tan",
        "sin⁻¹", "cos⁻¹", "tan⁻¹",
        "mean", "stdev", "stdevp",
        "nPr", "nCr", "!",
    ];

    const func2 = [
        "a²", "√", "n√",
        "e*", "abs", "round",
        "ln", "log", "delete",
        "e", "π", "Enter",
    ]

    // Calculator buttons grid
    const ScientificButton = [
        "a²", "b²", "|a|",
        "√", "n√", "π",
        "sin", "cos", "tan",
        "(", ")", ","
    ]

    const calcButtons = [
        "7", "8", "9", "÷",
        "4", "5", "6", "x",
        "1", "2", "3", "-",
        "0", ".", "ans", "+",
    ];

    const symbolButtons = [
        { label: "%", value: "%" },
        { label: "a/b", value: "a/b" },
        { label: <ArrowLeft />, value: "leftArrow" },
        { label: <ArrowRight />, value: "rightArrow" },
        { label: <CornerDownLeft className="size-4" />, value: "Enter", isPrimary: true }
    ];

    return (
        <div className="flex flex-col min-h-screen items-center justify-end md:justify-center p-0 md:p-16 md:fixed md:left-0 md:right-0">
            <div className="w-full md:max-w-xl rounded-none border-0 md:border border-gray-300">
                <div className="h-60 rounded p-5  overflow-x-auto whitespace-nowrap" />

                {/* input selection */}
                <div className="relative">
                    <Input
                        ref={inputRef}
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
                <div className="grid grid-cols-7 gap-2 p-2 bg-gray-100">
                    {utilityButtons.map((item) => (
                        <Button
                            variant="ghost"
                            key={item.label}
                            onClick={() =>
                                ["main", "abc", "func"].includes(item.label)
                                    ? setActivemode(item.label)
                                    : handleButtonClick(item.label)}
                            className="text-xs md:text-sm text-muted-foreground cursor-pointer flex items-center justify-center p-2 hover:bg-gray-300 rounded-lg hover:text-black">
                            {item.icon || item.label}
                        </Button>
                    ))}

                </div>

                {/* dymaic grid button */}
                {activemode === 'main' && (
                    <div className="flex justify-between gap-4 p-2 bg-gray-100">
                        {/* matrix button */}
                        <div className="grid grid-cols-3 gap-1">
                            {ScientificButton.map((item) => (
                                <Button key={item}
                                    onClick={() => handleButtonClick(item)}
                                    className="text-xs md:text-sm bg-white rounded-none cursor-pointer text-black border border-gray-300 hover:bg-gray-300"
                                >
                                    {item}
                                </Button>
                            ))}
                        </div>

                        {/* normal  button */}
                        < div className="grid grid-cols-4 gap-1">
                            {calcButtons.map((item) => (
                                <Button
                                    key={item}
                                    onClick={() => handleButtonClick(item)}
                                    className={cn("text-xs md:text-sm border border-gray-300 cursor-pointer text-black rounded-none",
                                        operatorButtons.includes(item)
                                            ? "bg-white hover:bg-gray-100"
                                            : "bg-gray-300 hover:bg-gray-400 "
                                    )}>
                                    {item}
                                </Button>
                            ))}
                        </div>


                        {/* sysmbol button */}
                        <div className="grid grid-cols-2 gap-1">
                            {symbolButtons.map((item) => (
                                <Button
                                    key={item.value}
                                    onClick={() => handleButtonClick(item.value)}
                                    className={cn(
                                        "text-xs md:text-sm rounded-none cursor-pointer text-black border border-gray-300",
                                        item.isPrimary
                                            ? "bg-blue-500 hover:bg-blue-600 text-white"
                                            : operatorButtons.includes(item.value)
                                                ? "bg-white hover:bg-gray-100"
                                                : "bg-gray-300 hover:bg-gray-400"
                                    )}
                                >
                                    {item.label}
                                </Button>
                            ))}
                        </div>
                    </div>
                )}
                {activemode === "abc" && (
                    <div className="grid grid-cols-9 gap-1 p-2 bg-gray-100">
                        {abcButton.map((item) => (
                            <Button
                                onClick={() => handleButtonClick(item)}
                                key={item}
                                className={cn("text-xs md:text-sm bg-white rounded-none cursor-pointer text-black border border-gray-300 hover:bg-gray-300",
                                    item === "Enter" && "bg-blue-500 hover:bg-blue-600 text-white",
                                    item === "=" && "bg-gray-300 hover:bg-gray-400",
                                    item === "UpArrow" && (isUppercase ? "bg-blue-500 text-white" : "bg-gray-300 hover:bg-gray-400")
                                )}
                            >
                                {
                                    item === "Enter" ? <CornerDownLeft />
                                        : item === "UpArrow" ? <ArrowBigUp />
                                            : item
                                }
                            </Button>
                        ))}
                    </div>
                )}

                {activemode === "func" && (
                    <div className="flex gap-8 p-3 bg-gray-100">
                        <div className="grid grid-cols-3 flex-1 gap-1" >
                            {func1.map((item) => (
                                <Button
                                    onClick={() => handleButtonClick(item)}
                                    key={item}
                                    className="text-xs md:text-sm bg-white rounded-none cursor-pointer text-black border border-gray-300 hover:bg-gray-300"
                                >
                                    {item}
                                </Button>
                            ))}
                        </div>
                        <div className="grid grid-cols-3 gap-1 flex-1">
                            {func2.map((item) => (
                                <Button
                                    key={item}
                                    onClick={() => handleButtonClick(item)}
                                    className={cn("text-xs md:text-sm bg-white rounded-none cursor-pointer text-black border border-gray-300 hover:bg-gray-300",
                                        item === "delete" && "bg-gray-300 hover:bg-gray-400",
                                        item === "Enter" && "bg-blue-500 hover:bg-blue-600 text-white",
                                    )}
                                >
                                    {
                                        item === "Enter" ? <CornerDownLeft />
                                            : item === "delete" ? <Delete />
                                                : item
                                    }
                                </Button>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div >
    )
}