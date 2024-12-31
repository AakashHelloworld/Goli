import { useQuery } from "@tanstack/react-query";
import axiosContainer from "@/lib/axiosContainer";

interface UseGetOptions {
    url: string;
    enabled?: boolean; // Enable or disable automatic fetching
    onSuccess?: (data: any) => void;
    onError?: (error: any) => void;
}

const useGet = (queryKey: unknown[], { url, enabled = true, onSuccess, onError }: UseGetOptions) => {
    const { data, error, isLoading, isError, refetch } = useQuery(
        queryKey,
        async () => {
            const response = await axiosContainer.get(url);
            return response.data;
        },
        {
            enabled, // Whether the query should automatically run
            onSuccess,
            onError,
        }
    );

    return {
        data,
        error,
        
        isLoading,
        isError,
        refetch, // Allow manual re-fetching
    };
};

export default useGet;
