export function fahrenheitToCelius(temperature: number): number {
    return (temperature - 32) * (5 / 9);
}

export function add3(first: number, second: number, third: number): number {
    return (
        (first < 0 ? 0 : first) +
        (second < 0 ? 0 : second) +
        +(third < 0 ? 0 : third)
    );
}

export function shout(message: string): string {
    return `${message.toUpperCase()}!`;
}

export function isQuestion(message: string): boolean {
    return message.endsWith("?");
}

export function convertYesNo(word: string): boolean | null {
    const lowerWord = word.toLowerCase();
    if (lowerWord === "yes") return true;
    if (lowerWord === "no") return false;
    else return null;
}
