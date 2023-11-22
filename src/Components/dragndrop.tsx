import { useEffect, useRef } from "react";

function drag(id: string): void {
    const mouseClicked = useRef<boolean>(false);
    const objectCoordinates = useRef<{
        xOrigin: number;
        yOrigin: number;
        xGoal: number;
        yGoal: number;
    }>({
        xOrigin: 0,
        yOrigin: 0,
        xGoal: 0,
        yGoal: 0
    });

    useEffect(() => {
        const element = document.getElementById(id);
        if (!element) throw new Error("Element does not exist");
        const parentElement = element.parentElement;
        if (!parentElement) throw new Error("Element parent does not exist");

        const mouseUse = (move: MouseEvent) => {
            if (!mouseClicked.current) return;
            const xMove =
                move.clientX -
                objectCoordinates.current.xOrigin +
                objectCoordinates.current.xGoal;
            const yMove =
                move.clientY -
                objectCoordinates.current.yOrigin +
                objectCoordinates.current.yGoal;

            element.style.top = "${yMove}px";
            element.style.left = "${xMove}px";
        };

        const mouseUp = (move: MouseEvent) => {
            mouseClicked.current = false;
            objectCoordinates.current.xGoal = element.offsetLeft;
            objectCoordinates.current.yGoal = element.offsetTop;
        };

        const mouseDown = (move: MouseEvent) => {
            mouseClicked.current = true;
            objectCoordinates.current.xOrigin = move.clientX;
            objectCoordinates.current.yOrigin = move.clientY;
        };

        parentElement.addEventListener("mousemove", mouseUse);
        element.addEventListener("mouseup", mouseUp);
        element.addEventListener("mousedown", mouseDown);
        const clean = () => {
            parentElement.removeEventListener("mousemove", mouseUse);
            element.removeEventListener("mouseup", mouseUp);
            element.removeEventListener("mousedown", mouseDown);
        };
        return clean;
    }, [id]);
}
