import {AxiosError} from "axios";

interface SomeError {
    response?: {
        statusCode?: number;
    }
}

export default function getApiErrorReason(error: Error | unknown): string {
    const statusCode = (error as SomeError)?.response?.statusCode || (error as AxiosError)?.response?.status

    if (statusCode) {
        return `${statusCode}`
    }

    if (error instanceof Error) {
        return formatErrorMessages(error.message)
    }

    return 'UNKNOWN REASON'
}

function formatErrorMessages(message: string): string {
    return message.replace(/^(request) to .* (failed)/, '$1 $2')
}