"use client";
import { evaluate, matrix, det, transpose, multiply, inv, index } from "mathjs";
import { useEffect, useRef, useState } from "react";

export const useMatrixCalcultor = () => {
    const [display, setDisplay] = useState("");
    const [lastAnswer, setLastAnswer] = useState("");
    const inputRef = useRef<HTMLInputElement>(null);
    const [history, setHistory] = useState<string[]>([]);
    const [redoStack, setRedoStack] = useState<string[]>([]);
    const [showMatrix, setShowMatrix] = useState(false);
    const [matrixdata, setMatrixData] = useState<number[][]>([
        [0, 0],
        [0, 0]
    ]);

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
        if (["Enter", "ans", "√", "clear all", "delete", "undo", "redo", "leftArrow", "rightArrow", "New Matrix",
            "A²", "A⁻¹", "AT", "det", "rref", "trace"
        ].includes(value)) {
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

            case "New Matrix":
                setShowMatrix((prev) => !prev);
                break;
            case "A²":
                applyMatrixOperation((m) => multiply(m, m));
                break;

            case "A⁻¹":
                applyMatrixOperation((m) => inv(m));
                break;

            case "AT":
                applyMatrixOperation((m) => transpose(m));
                break;

            case "det":
                applyMatrixOperation((m) => det(m));
                break;

            case "trace":
                applyMatrixOperation((m) =>
                    m._data.reduce((sum: number, row: number[], i: number) => sum + row[i], 0)
                );
                break;

            case "rref":
                applyMatrixOperation((m) => computeRREF(m));
                break;

            default:
                break;
        }
    };
    // eslint-disable-next-line
    const applyMatrixOperation = (operation: (m: any) => any) => {
        try {
            const m = matrix(matrixdata);
            const result = operation(m);
            if (typeof result === "number") {
                setLastAnswer(result.toString());
                setDisplay(result.toString());
            } else {
                const plain = result._data;
                setMatrixData(plain);
                setDisplay(JSON.stringify(plain));
            }
        } catch {
            setDisplay("invalid matrix op");
        }
    };
    // eslint-disable-next-line
    const computeRREF = (m: any) => {
        const rows = m.size()[0];
        const cols = m.size()[1];
        const R = m.clone();

        let lead = 0;
        for (let r = 0; r < rows; r++) {
            if (cols <= lead) return R;
            let i = r;
            while (R.get([i, lead]) === 0) {
                i++;
                if (i === rows) {
                    i = r;
                    lead++;
                    if (cols === lead) return R;
                }
            }
            const tempRow = R.subset(index(i, []));
            R.subset(index(i, []), R.subset(index(r, [])));
            R.subset(index(r, []), tempRow);

            const val = R.get([r, lead]);
            const newRow = R.subset(index(r, [])).map((x: number) => x / val);
            R.subset(index(r, []), newRow);

            for (let j = 0; j < rows; j++) {
                if (j !== r) {
                    const factor = R.get([j, lead]);
                    const rowSub = newRow.map((x: number) => x * factor);
                    const updatedRow = R.subset(index(j, [])).map(
                        (x: number, idx: number) => x - rowSub[idx]
                    );
                    R.subset(index(j, []), updatedRow);
                }
            }
            lead++;
        }
        return R;
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
    const normalizeMatrix = (data: number[][]) => {
        const maxCols = Math.max(...data.map((row) => row.length));
        return data.map((row) =>
            row.length < maxCols ? [...row, ...Array(maxCols - row.length).fill(0)] : row
        );
    };

    const addRow = () => {
        const colCount = matrixdata[0].length;
        const newRow = new Array(colCount).fill(0);
        const updated = [...matrixdata, newRow];
        setMatrixData(normalizeMatrix(updated));
        setDisplay(JSON.stringify(normalizeMatrix(updated)));
    };

    const removeRow = () => {
        if (matrixdata.length > 1) {
            const updated = matrixdata.slice(0, -1);
            setMatrixData(normalizeMatrix(updated));
            setDisplay(JSON.stringify(normalizeMatrix(updated)));
        }
    };

    const addCol = () => {
        const updated = matrixdata.map((row) => [...row, 0]);
        setMatrixData(normalizeMatrix(updated));
        setDisplay(JSON.stringify(normalizeMatrix(updated)));
    };

    const removeCol = () => {
        if (matrixdata[0].length > 1) {
            const updated = matrixdata.map((row) => row.slice(0, -1));
            setMatrixData(normalizeMatrix(updated));
            setDisplay(JSON.stringify(normalizeMatrix(updated)));
        }
    };

    return {
        inputRef,
        display,
        setDisplay,
        lastAnswer,
        history,
        redoStack,
        showMatrix,
        matrixdata,
        operatorButtons,
        handleButtonClick,
        handleKeyDown,
        addRow,
        removeRow,
        addCol,
        removeCol,
        setMatrixData,
        setShowMatrix,
    };

}