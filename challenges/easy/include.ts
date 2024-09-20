type isPillarMen = Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Dio'> // expected to be `false`

type Includes<T extends string[], U extends string> = U extends T[number] ? true : false