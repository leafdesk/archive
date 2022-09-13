import { useState } from 'react';

interface UseMutationState<T> {
  loading: boolean;
  data?: T;
  error?: object;
}

type UseMutationResult<T> = [(data: any) => void, UseMutationState<T>];

export default function useMutation<T = any>(
  url: string
): UseMutationResult<T> {
  const [state, setState] = useState<UseMutationState<T>>({
    loading: false,
    data: undefined,
    error: undefined,
  });

  // 백엔드로 보낸 data를 받는 함수
  const mutation = (data: any) => {
    setState((prev) => ({ ...prev, loading: true }));

    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json().catch(() => {}))
      .then((data) => {
        console.log('서버의 응답 데이터: ', data);
        setState((prev) => ({ ...prev, data }));
      })
      .catch((error) => {
        console.log('서버가 준 에러 메시지: ', error);
        setState((prev) => ({ ...prev, error }));
      })
      .finally(() => setState((prev) => ({ ...prev, loading: false })));
  };

  return [mutation, { ...state }];
}
