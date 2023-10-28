const {
  Worker,
  isMainThread,
  parentPort,
  workerData,
} = require('worker_threads');

if (isMainThread) {
  const threads = new Set();

  threads.add(
    new Worker(__filename, {
      workerData: { start: 1 },
    })
  );

  threads.add(
    new Worker(__filename, {
      workerData: { start: 2 },
    })
  );

  for (let worker of threads) {
    worker.on('message', (value) => console.log('from worker ', value));
    worker.on('exit', () => {
      threads.delete(worker);
      if (threads.size === 0) console.log('worker done');
    });
    worker.postMessage('ping');
  }
} else {
  const data = workerData;
  // parentPort.on('message ', (value) => {
  //   console.log('from parent', value);
  //   parentPort.postMessage('pong');
  //   parentPort.close();
  // });
}
