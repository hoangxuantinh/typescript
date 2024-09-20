let hello: unknown

const trim = hello.trim()

// assertion 
// nói cho compile là tin tao đi tao biết type thằng này mày không cần guess , infer gì cả
// syntax 1
const trim1 = (hello as string).trim()
// syntax 2
const trim2 = (<string>(hello)).trim()


// cách tiếp cận lý tưởng -> js runtime
if(typeof hello === 'string') {
    const trimmed = hello.trim()
}

