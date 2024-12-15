// eslint-disable-next-line @typescript-eslint/no-require-imports
const axiosTimeoutsInSSP = (typeof window === 'undefined') ? require('./attachSSPTimeoutToAxiosClient').default : () => {};

export default axiosTimeoutsInSSP;