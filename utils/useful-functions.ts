export function chunk<T>(array: T[], size: number): T[][] {
    const result: T[][] = [];
    for (let i = 0; i < array.length; i += size) {
        result.push(array.slice(i, i + size))
    }

    return result
}

export function toPersianNumber(value: number): string {
    return value.toLocaleString('fa-IR')
}

export function debounce<T extends (...args: any[]) => void>(
    fn: T,
    delay: number
): (...args: Parameters<T>) => void {
    let timeout: ReturnType<typeof setTimeout>;

    return (...args: Parameters<T>) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => fn(...args), delay);
    };
}

export function throttle<T extends (...args: any[]) => void>(
    fn: T,
    delay: number
): (...args: Parameters<T>) => void {
    let lastCall = 0;

    return (...args: Parameters<T>) => {
        const now = new Date().getTime();
        if (now - lastCall > delay) {
            lastCall = now;
            fn(...args)
        }
    };
}

export function isNumber(value: string) {
    return /^\d+$/.test(value);
}
