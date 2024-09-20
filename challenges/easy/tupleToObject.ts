const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const

// type result = TupleToObject<typeof tuple> 
// expected { 'tesla': 'tesla', 'model 3': 'model 3', 'model X': 'model X', 'model Y': 'model Y'}



// Indexed access Array[number]
// Mapped types -> in
type TupleToObject<T extends readonly string[]> = {
    [K in T[number]]: K
}
type result = TupleToObject<typeof tuple> 








