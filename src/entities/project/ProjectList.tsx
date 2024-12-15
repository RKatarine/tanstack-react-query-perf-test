import {useProjects} from "@/src/entities/project/hooks/useProjects";
import React from "react";

export function ProjectList() {
    const {
        status,
        data,
        error,
        isFetching,
        isFetchingNextPage,
        isFetchingPreviousPage,
        fetchNextPage,
        fetchPreviousPage,
        hasNextPage,
        hasPreviousPage,
    } = useProjects()

    return (
        <div>
            <h1>Infinite Query with max pages</h1>
            <h3>4 projects per page</h3>
            <h3>3 pages max</h3>
            {status === 'pending' ? (
                <p>Loading...</p>
            ) : status === 'error' ? (
                <span>Error: {error.message}</span>
            ) : (
                <>
                    <div>
                        <button
                            onClick={() => fetchPreviousPage()}
                            disabled={!hasPreviousPage || isFetchingPreviousPage}
                        >
                            {isFetchingPreviousPage
                                ? 'Loading more...'
                                : hasPreviousPage
                                    ? 'Load Older'
                                    : 'Nothing more to load'}
                        </button>
                    </div>
                    {data.pages.map((page) => (
                        <React.Fragment key={page.nextId}>
                            {page.data.map((project) => (
                                <p
                                    style={{
                                        border: '1px solid gray',
                                        borderRadius: '5px',
                                        padding: '8px',
                                        fontSize: '14px',
                                        background: `hsla(${project.id * 30}, 60%, 80%, 1)`,
                                    }}
                                    key={project.id}
                                >
                                    {project.name}
                                </p>
                            ))}
                        </React.Fragment>
                    ))}
                    <div>
                        <button
                            onClick={() => fetchNextPage()}
                            disabled={!hasNextPage || isFetchingNextPage}
                        >
                            {isFetchingNextPage
                                ? 'Loading more...'
                                : hasNextPage
                                    ? 'Load Newer'
                                    : 'Nothing more to load'}
                        </button>
                    </div>
                    <div>
                        {isFetching && !isFetchingNextPage
                            ? 'Background Updating...'
                            : null}
                    </div>
                </>
            )}
            <hr />
        </div>
    )
}