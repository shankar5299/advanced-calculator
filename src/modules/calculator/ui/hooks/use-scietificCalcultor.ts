import { evaluate } from "mathjs";
import { useEffect, useRef, useState } from "react";

// factorial logic
function factorial(n: number): number {
    if (n < 0) return NaN;
    if (n === 0 || n === 1) return 1;
    let result = 1;
    for (let i = 2; i <= n; i++) result *= i;
    return result;
}

// special function
const specialfunction: Record<string, (val: number) => number> = {
    "a²": (val) => Math.pow(val, 2),
    "√": (val) => Math.sqrt(val),
    "sin": (val) => Math.sin(val),
    "cos": (val) => Math.cos(val),
    "tan": (val) => Math.tan(val),
    "!": (val) => factorial(val),
    "abs": (val) => Math.abs(val),
    "round": (val) => Math.round(val),
    "ln": (val) => Math.log(val),
    "log": (val) => Math.log10(val),
}

// Replace 5! with factorial(5)
function preprocessExpression(expr: string): string {
    return expr.replace(/(\d+)!/g, (_, num) => {
        return factorial(Number(num)).toString();
    });
}

export const useScientificCalcultor = () => {
    const [display, setDisplay] = useState("");
    const [lastAnswer, setLastAnswer] = useState("");
    const [isUppercase, setIsUpperCase] = useState(false);
    const [history, setHistory] = useState<string[]>([]);
    const [redoStack, setRedoStack] = useState<string[]>([]);
    const [activemode, setActivemode] = useState("main")
    const inputRef = useRef<HTMLInputElement>(null);


    // Operators for styling differentiation
    const operatorButtons = ["(", ")", "√", "÷", "x", "-", "+", "ans"];

    // Save current state to history for undo
    const saveHistory = () => {
        setHistory((prev) => [...prev, display]);
        setRedoStack([]);
    };

    const moveCursor = (dire: "left" | "right") => {
        if (!inputRef.current) return;
        const pos = inputRef.current.selectionStart || 0;
        const newPos = dire === "left" ? pos - 1 : pos + 1;
        inputRef.current.setSelectionRange(newPos, newPos);
        inputRef.current.focus();
    }

    // Handle button actions
    const handleButtonClick = (value: string) => {
        if (value === "UpArrow") {
            setIsUpperCase((prev) => !prev)
            return;
        }
        if (["Enter", "ans", "√", "clear all", "delete", "undo", "redo", "leftArrow", "rightArrow"].includes(value)) {
            handleSpecialActions(value);
            return
        }
        if (specialfunction[value]) {
            saveHistory();
            const num = parseFloat(display);
            if (!isNaN(num)) {
                const result = specialfunction[value](num);
                setLastAnswer(result.toString());
                setDisplay(result.toString());
            } else {
                setDisplay("invalid input")
            }
            return
        }
        saveHistory();

        const letterRegex = /^[a-z]$/i;
        const newValue =
            letterRegex.test(value) && isUppercase ? value.toUpperCase() : value;

        setDisplay((prev) => prev + newValue);
    };

    // Special button actions like Enter, Undo, Redo, etc.
    const handleSpecialActions = (action: string) => {
        switch (action) {
            case "Enter":
                saveHistory();
                try {
                    const expression = preprocessExpression(display.replace(/x/g, "*").replace(/÷/g, "/"));
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
                    const result = Math.sqrt(parseFloat(display));
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

            case "leftArrow":
                moveCursor("left")
                break;

            case "rightArrow":
                moveCursor("right")
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
            const expression = preprocessExpression(display.replace(/x/g, "*").replace(/÷/g, "/"));
            const result = evaluate(expression);
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
        handleKeyDown, isUppercase, operatorButtons, activemode, setActivemode, display, setDisplay, lastAnswer, handleButtonClick, inputRef
    }
}