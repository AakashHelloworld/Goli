import { useMutation } from "@tanstack/react-query";
import axiosContainer from "@/lib/axiosContainer";


interface UsePostOptions {
    url: string;
    onSuccess?: (data: any) => void;
    onError?: (error: any) => void;
}

const usePatch = ({ url, onSuccess, onError }: UsePostOptions) => {
    const mutation = useMutation({
        mutationFn: async (data?: any) => {
            const response = await axiosContainer.patch(url, data);
            return response.data;
        },
        onSuccess,
        onError,
    });

    return {
        mutateAsync: mutation.mutateAsync,
        isLoading: mutation.isLoading,
        isError: mutation.isError,
        data: mutation.data,
        error: mutation.error,
    };
};

export default usePatch;
