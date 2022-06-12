# Event Loop

**Javascript** is high-level, synchronous, single-threaded interpreted language.
It requires an engine (Chrome, node -> V8, Sarfari -> WebKit, Firefox -> Gecko) to execute the JS code.

The event loop is used to allow JS to perform non-blocking I/O operations (asynchronous operations)
by off loading the operations to the system kernel (server side) or browser API (client side).

Event loop registers the callbacks and only if the operation is complete, then execute the callbacks.

**Event Loop:** microtasks and macrotasksThe event loop concept is very simple. There’s an endless loop, where the JavaScript engine waits for tasks, executes them and then sleeps, waiting for more tasks

Tasks are set – the engine handles them – then waits for more tasks (while sleeping and consuming close to zero CPU). It may happen that a task comes while the engine is busy, then it’s enqueued. The tasks form a queue, so-called “macrotask queue”

**Microtasks** come solely from our code. They are usually created by promises: an execution of .then/catch/finally handler becomes a microtask. Microtasks are used “under the cover” of await as well, as it’s another form of promise handling. Immediately after every macrotask, the engine executes all tasks from microtask queue, prior to running any other macrotasks or rendering or anything else.
