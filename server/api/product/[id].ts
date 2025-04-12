// Plik: server/api/products/[id].ts
export default defineEventHandler((event) => {
    // 📥 Odczytujemy ID z URL-a np. /api/products/3
    const id = Number(getRouterParam(event, 'id'))

    // 📄 Pełna lista produktów – normalnie miałbyś to np. z bazy danych
    const produkty1 = [
        { id: 0, image: 'https://picsum.photos/seed/blender/180/180', name: 'Blender KitchenMix 2000', price: '368,89', delivery: 'we wtorek' },
        { id: 1, image: 'https://picsum.photos/seed/koszyk/180/180', name: 'Koszyk wielkanocny z kwiatami', price: '65,00', delivery: 'we wtorek' },
        { id: 2, image: 'https://picsum.photos/seed/baby/180/180', name: 'Ochraniacz dla dzieci CARIBOO', price: '79,90', delivery: 'w środę' },
        { id: 3, image: 'https://picsum.photos/seed/kosmetyki/180/180', name: 'Zestaw kosmetyków pielęgnacyjnych', price: '278,00', delivery: 'w poniedziałek' },
        { id: 4, image: 'https://picsum.photos/seed/grill/180/180', name: 'Grill ogrodowy RUSZTY', price: '329,00', delivery: 'we wtorek' },
    ]

    // 🔍 Szukamy produktu o danym ID
    const produkt = produkty1.find(p => p.id === id)

    // 🛑 Jeśli nie znaleziono – 404
    if (!produkt) {
        return createError({ statusCode: 404, message: 'Produkt nie znaleziony' })
    }

    // ✅ Zwracamy produkt
    return produkt
})
