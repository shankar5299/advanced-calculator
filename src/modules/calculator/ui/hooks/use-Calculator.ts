"use client"

import { evaluate } from "mathjs";
import { useEffect, useState } from "react";

export const useCalcultor = () => {
    const [display, setDisplay] = useState("");
    const [lastAnswer, setLastAnswer] = useState("");
    const [history, setHistory] = useState<string[]>([]);
    const [redoStack, setRedoStack] = useState<string[]>([]);

    // Operators for styling differentiation
    const operatorButtons = ["(", ")", "√", "÷", "x", "-", "+", "ans"];

    // Save current state to history for undo
    const saveHistory = () => {
        setHistory((prev) => [...prev, display]);
        setRedoStack([]);
    };

    // Handle button actions
    const handleButtonClick = (value: string) => {
        if (["Enter", "ans", "√", "clear all", "delete", "undo", "redo"].includes(value)) {
            handleSpecialActions(value);
        } else {
            saveHistory();
            setDisplay((prev) => prev + value);
        }
    };

    // Special button actions like Enter, Undo, Redo, etc.
    const handleSpecialActions = (action: string) => {
        switch (action) {
            case "Enter":
                saveHistory();
                try {
                    const expression = display.replace(/x/g, "*").replace(/÷/g, "/");
                    const result = evaluate(expression);
                    setLastAnswer(result.toString());
                } catch {
                    setDisplay("invalid input");
                }
                break;

            case "ans":
                saveHistory();
                setDisplay((prev) => prev + lastAnswer);
                break;

            case "√":
                saveHistory();
                try {
                    const result = Math.sqrt(evaluate(display));
                    setLastAnswer(result.toString());
                    setDisplay(result.toString());
                } catch {
                    setDisplay("invalid input");
                }
                break;

            case "clear all":
                saveHistory();
                setDisplay("");
                setLastAnswer("");
                break;

            case "delete":
                saveHistory();
                setDisplay((prev) => prev.slice(0, -1));
                break;

            case "undo":
                if (history.length > 0) {
                    const last = history[history.length - 1];
                    setRedoStack((prev) => [display, ...prev]);
                    setDisplay(last);
                    setHistory((prev) => prev.slice(0, -1));
                }
                break;

            case "redo":
                if (redoStack.length > 0) {
                    const [first, ...rest] = redoStack;
                    setHistory((prev) => [...prev, display]);
                    setDisplay(first);
                    setRedoStack(rest);
                }
                break;

            default:
                break;
        }
    };

    // Live result preview effect
    useEffect(() => {
        const lastChar = display.trim().slice(-1);
        const isOperator = ["+", "-", "*", "/", "x", "÷", "√", "(", ")"].includes(lastChar);

        if (!display || isOperator) {
            setLastAnswer("");
            return;
        }

        try {
            const expression = display.replace(/x/g, "*").replace(/÷/g, "/");
            const result = eval(expression);
            setLastAnswer(result.toString());
        } catch {
            setLastAnswer("");
        }
    }, [display]);


    // Handle keyboard Enter key press
    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            handleButtonClick("Enter");
        }
    };

    return {
        display,
        setDisplay,
        lastAnswer,
        history,
        redoStack,
        operatorButtons,
        handleButtonClick,
        handleKeyDown,
    }
}