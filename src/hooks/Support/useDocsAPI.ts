'use client'
import axios from "axios";
import { useState, useEffect } from "react";
import { DocsData } from '@/types/Document';

const useDocsAPI = (_id: string): DocsData[] => {
    const [saveDocsData, setSaveDocsData] = useState<DocsData[]>([]);

    useEffect(() => {
        const fetchData = async (): Promise<void> => {
            try {
                const response = await axios.get(`/api/help/list?id=${_id}`);
                setSaveDocsData(response.data as DocsData[]);
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, [_id]);

    return saveDocsData;
};

export { useDocsAPI };