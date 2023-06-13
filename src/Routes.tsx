import React, { useState } from 'react';

import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { shallow } from 'zustand/shallow';

import { cn } from './lib/cn';
import { BearPopulation, useBearStore } from './store';

function Routes() {
  const [count, setCount] = useState(0);
  const { isLoading, error, data, isFetching } = useQuery({
    queryKey: ['repoData'],
    queryFn: () =>
      (async () => {
        const res = await axios.get(
          'https://api.github.com/repos/tannerlinsley/react-query',
        );
        return res.data;
      })(),
  });
  const [bears, increasePopulation] = useBearStore(
    (state: BearPopulation) => [state.bears, state.increasePopulation],
    shallow,
  );
  if (isLoading) return <div>Loading...</div>;

  if (error) return <div>{'An error has occurred: ' + error}</div>;
  return (
    <div>
      <div onClick={increasePopulation}>increase</div>
      <h1>{data.name}</h1>
      <div className={cn([])}></div>
      <p>{data.description}</p>
      <strong>👀 {data.subscribers_count}</strong>{' '}
      <strong>✨ {data.stargazers_count}</strong> <strong>🍴 {data.forks_count}</strong>
      <div>{isFetching ? 'Updating...' : ''}</div>
    </div>
  );
}

export default Routes;
