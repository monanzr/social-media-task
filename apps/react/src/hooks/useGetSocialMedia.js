import { useState, useEffect } from 'react';
import { getSocialMedia } from '../api/getSocialMedia';
import useSocialMedia from './useSocialMedia';


export const useGetSocialMedia = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [list, setList] = useState([]);
    const [error, setError] = useState(null)

    const {
        getShouldRefetch: shouldRefetch,
      } = useSocialMedia()

    useEffect(() => {
        async function fetchData() {
          setIsLoading(true);
          try {
            const result = await getSocialMedia();
            setIsLoading(false);
            setList(result);
          }
          catch (err) {
            setError(err.message)
            setIsLoading(false);
            setList([]);
          }
        }
        fetchData();
      }, [shouldRefetch]);
      return {
        data: list,
        isLoading,
        isError: error ? false : true
      }

}