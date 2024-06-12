'use client'; // Next.js v14 에서 사용자 상호 작용을 위해 최상단 고정 필수.

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import useLocalStorage from '@/hooks/useLocalStorage';
import localStorageKey from '@/constants/localStorageKey';

const EventHome = () => {
  const router = useRouter();
  const { getLocalStorageData } = useLocalStorage();
  const [eventData, setEventData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const token = getLocalStorageData(localStorageKey.EVENT_TOKEN);
    // console.log('token:', token)
    if (!token) {
      router.push('/join');
      return;
    }

    const fetchEventData = async () => {
      console.log(token);
      try {
        // const response = await axios.get('http://localhost:8080/event-api/event/test', {
        //   headers: {
        //     'Authorization': `Bearer ${token}`,
        //     'Custom': `test`,
        //   },
        // });

        const response = await axios({
          method: 'get',
          url: 'http://localhost:8080/event-api/event/test',
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.status === 200) {
          setEventData(response.data);
        } else {
          setError('Failed to fetch event data.');
        }
      } catch (error) {
        console.error('Error fetching event data:', error);
        setError('Failed to fetch event data.');
      } finally {
        setLoading(false);
      }
    };

    fetchEventData();
  }, [router, getLocalStorageData]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h1>Event Home</h1>
      {eventData ? (
        <div>
          <h2>Event Data:</h2>
          <pre>{JSON.stringify(eventData, null, 2)}</pre>
        </div>
      ) : (
        <div>No event data available.</div>
      )}
    </div>
  );
};

export default EventHome;
