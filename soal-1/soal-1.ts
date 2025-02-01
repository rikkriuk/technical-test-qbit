type IFruit = {
   fruitId: number,
   fruitName: string,
   fruitType: 'IMPORT' | 'LOCAL',
   stock: number,
}

const fruits: IFruit[] = [
   {
      fruitId: 1,
      fruitName: 'Apel',
      fruitType: 'IMPORT',
      stock: 10
   },
   {
      fruitId: 2,
      fruitName: 'Kurma',
      fruitType: 'IMPORT',
      stock: 20
   },
   {
      fruitId: 3,
      fruitName: 'apel',
      fruitType: 'IMPORT',
      stock: 50
   },
   {
      fruitId: 4,
      fruitName: 'Manggis',
      fruitType: 'LOCAL',
      stock: 100
   },
   {
      fruitId: 5,
      fruitName: 'Jeruk Bali',
      fruitType: 'LOCAL',
      stock: 10
   },
   {
      fruitId: 5,
      fruitName: 'KURMA',
      fruitType: 'IMPORT',
      stock: 20
   },
   {
      fruitId: 5,
      fruitName: 'Salak',
      fruitType: 'LOCAL',
      stock: 150
   }
]

// 1. Buah apa saja yang dimiliki Andi? (fruitName)

const andiFruits = fruits.map((item) => item.fruitName);
const uniqueNames = [...new Set(andiFruits.map((item) => item.toLowerCase()))];
console.log(`Jumlah buah yang dimiliki Andi ada ${andiFruits.length}`, andiFruits);
console.log(`Jumlah buah yang dimiliki Andi setelah dihilangkan untuk duplikasi nama ada ${uniqueNames.length}`, uniqueNames);

// 2. Andi memisahkan buahnya menjadi beberapa wadah berdasarkan tipe buah
// (fruitType). Berapa jumlah wadah yang dibutuhkan? Dan ada buah apa saja di
// masing-masing wadah?

const fruitByTypes: Record<string, string[]> = {};

fruits.forEach((item) => {
   if (!fruitByTypes[item.fruitType]) {
      fruitByTypes[item.fruitType] = [];
   }
   fruitByTypes[item.fruitType].push(item.fruitName);
})

console.log(`Jumlah wadah berdasarkan tipe buah ada ${Object.keys(fruitByTypes).length}`);
console.log(`Buah di masing-masing wadah: ${JSON.stringify(fruitByTypes, null, 2)}`);

// 3. Berapa total stock buah yang ada di masing-masing wadah

const totalfruitByTypes: Record<string, number> = {};

fruits.forEach((item) => {
   if (!totalfruitByTypes[item.fruitType]) {
      totalfruitByTypes[item.fruitType] = 0;
   }

   totalfruitByTypes[item.fruitType] += item.stock;
})

console.log(`Total stock buah yang ada di masing-masing wadah ${JSON.stringify(totalfruitByTypes, null, 2)}`);

// 4. Apakah ada komentar terkait kasus di atas?

// Ada fruitId yang duplikat pada fruitId 5. Sepengalaman saya id itu bersifat unik, jadi tidak boleh ada duplikat