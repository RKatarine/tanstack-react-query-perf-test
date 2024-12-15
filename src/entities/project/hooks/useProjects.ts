import {useInfiniteQuery} from "@tanstack/react-query";
import {getInfiniteProjectsOptions} from "./getInfinityProjectsQueryOptions";

export const useProjects = () => {
    return useInfiniteQuery(getInfiniteProjectsOptions())
}