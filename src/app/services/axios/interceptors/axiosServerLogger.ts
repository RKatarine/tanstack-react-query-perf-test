// eslint-disable-next-line @typescript-eslint/no-require-imports
const axiosServerLogger = (typeof window === 'undefined') ? require('./attachRequestLoggerToAxiosClient').default : () => {};

export default axiosServerLogger;