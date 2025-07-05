"use client";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"
import { ArrowLeft, ArrowRight, CornerDownLeft, Delete, Minus, Plus, Redo, Undo } from "lucide-react"
import { useMatrixCalcultor } from "../hooks/use-matrixCalculator";


export const Matrix = () => {
    const {
        inputRef,
        addCol,
        addRow,
        display,
        handleButtonClick,
        handleKeyDown,
        lastAnswer,
        matrixdata,
        operatorButtons,
        removeCol,
        removeRow,
        setDisplay,
        showMatrix
    } = useMatrixCalcultor();

    // Buttons for top utility functions
    const utilityButtons = [
        { label: "New Matrix", icon: "New Matrix" },
        { label: "undo", icon: <Undo className="size-6" /> },
        { label: "redo", icon: <Redo className="size-6" /> },
        { label: "clear all", icon: "Clear all" },
        { label: "delete", icon: <Delete className="size-6" /> },
    ];

    // Calculator buttons grid
    const MatrixButton = [
        "A", "B", "C", "D",
        "E", "F", "G", "H",
        "A²", "A⁻¹", "AT", "AN",
        "rref", "det", "trace",

    ]

    const calcButtons = [
        "7", "8", "9", "÷",
        "4", "5", "6", "x",
        "1", "2", "3", "+",
        "0", ".", "√", "-",
    ];

    const symbolButtons = [
        { label: "(", value: "(" },
        { label: ")", value: ")" },
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
                <div className="grid grid-cols-5 gap-2 p-2 bg-gray-100">
                    {utilityButtons.map((item) => (
                        <Button
                            variant="ghost"
                            key={item.label}
                            onClick={() => handleButtonClick(item.label)}
                            className={cn("text-xs md:text-sm text-muted-foreground cursor-pointer flex items-center justify-center p-2 hover:bg-gray-300 rounded-lg hover:text-black",
                                item.label === "New Matrix" && "bg-blue-600 rounded-none  text-white hover:bg-blue-700 hover:text-white"
                            )}>
                            {item.icon || item.label}
                        </Button>
                    ))}
                </div>

                <div className="flex justify-center gap-5 p-2 bg-gray-100">
                    {showMatrix ? (
                        <div className="flex flex-col items-center justify-center p-4 gap-4">
                            <h1 className="text-gray-500">Edit Matrix</h1>
                            <div className=" flex gap-2">
                                <Button
                                    className="rounded-none cursor-pointer hover:bg-gray-100 hover:text-black bg-white text-black border border-gray-200"
                                    onClick={removeRow}
                                >
                                    <Minus />
                                </Button>

                                <div className="flex flex-col items-center">
                                    <p className="text-gray-500 text-sm">Rows</p>
                                    <span className="text-sm font-medium">{matrixdata.length}</span>
                                </div>
                                <Button
                                    className="rounded-none cursor-pointer hover:bg-gray-100 hover:text-black bg-white text-black border border-gray-200"
                                    onClick={addRow}
                                >
                                    <Plus />
                                </Button>
                            </div>

                            <div className=" flex gap-2">
                                <Button
                                    className="rounded-none cursor-pointer hover:bg-gray-100 hover:text-black bg-white text-black border border-gray-200"
                                    onClick={removeCol}
                                >
                                    <Minus />
                                </Button>

                                <div className="flex flex-col items-center ">
                                    <p className="text-gray-500 text-sm">Cols</p>
                                    <span className="text-sm font-medium">{matrixdata[0].length}</span>
                                </div>
                                <Button
                                    className="rounded-none cursor-pointer hover:bg-gray-100 hover:text-black bg-white text-black border border-gray-200"
                                    onClick={addCol}
                                >
                                    <Plus />
                                </Button>
                            </div>
                        </div>
                    ) : (
                        <>
                            {/* matrix button */}
                            <div className="grid grid-cols-4 gap-1">
                                {MatrixButton.map((item) => (
                                    <Button key={item}
                                        onClick={() => handleButtonClick(item)}
                                        className="text-xs md:text-sm bg-white rounded-none cursor-pointer text-black border border-gray-300 hover:bg-gray-300"
                                    >
                                        {item}
                                    </Button>
                                ))}
                            </div>
                        </>
                    )}
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
            </div>
        </div >
    )
}