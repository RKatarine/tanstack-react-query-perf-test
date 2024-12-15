import {infiniteQueryOptions, QueryFunctionContext} from "@tanstack/react-query";
import {apiClient} from "@/src/app/services/axios/apiClient";

const getInfiniteProjectsQueryKey = () => ['projects']

function getInfiniteProjectsQueryFn({ pageParam }: QueryFunctionContext<ReturnType<typeof getInfiniteProjectsQueryKey>, number>) {
    return apiClient.getProjects({cursor: pageParam})
}

export function getInfiniteProjectsOptions() {
    return infiniteQueryOptions({
        queryKey: getInfiniteProjectsQueryKey(),
        queryFn: getInfiniteProjectsQueryFn,
        initialPageParam: 0,
        getPreviousPageParam: (firstPage) => firstPage.previousId ?? undefined,
        getNextPageParam: (lastPage) => lastPage.nextId ?? undefined,
        maxPages: 20,
    })
}