import { ProductCatalog } from "@/components/ui/product-catalog"


interface Product {
  id: number
  title: string
  description: string
  price: number
  category: string
  inStock: boolean
  image: string
}


const products: Product[] = [
  {
    id: 1,
    title: "Беспроводные наушники",
    description: "Активное шумоподавление, 30 часов автономности",
    price: 7590,
    category: "Аудио",
    inStock: true,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop",
  },
  {
    id: 2,
    title: "Механическая клавиатура",
    description: "Переключатели Cherry MX, подсветка RGB",
    price: 6790,
    category: "Аксессуары",
    inStock: true,
    image: "https://ext.mysku-st.net/250s/gloimg.gbtcdn.com/gb/pdm-product-pic/Electronic/2017/06/29/source-img/20170629105643_59361.jpg",
  },
  {
    id: 3,
    title: "Игровая мышь",
    description: "Сенсор 26000 DPI, paw3395",
    price: 3500,
    category: "Аксессуары",
    inStock: false,
    image: "https://www.clife.ru/upload/himg_cache/detail-middle/68f/68f75063260c10e66a2ea0d6a77c14c1/attack_shark_x3_black_1.jpg",
  },
  {
    id: 4,
    title: "Монитор 27\"",
    description: "4K IPS, 144 Гц, поддержка HDR600",
    price: 34990,
    category: "Дисплеи",
    inStock: true,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQovOYOPAkOUHYS6FC12DeXo6lIPlrKvLA1zg_3ZwU4qw&s",
  },
  {
    id: 5,
    title: "Веб-камера",
    description: "1080p при 60 fps, встроенный микрофон",
    price: 5900,
    category: "Аксессуары",
    inStock: true,
    image: "https://c.dns-shop.ru/thumb/st1/fit/200/200/54611bda82fdee66d1e8665c9c0fb96d/b3f30e6b335be144ac1e1b47fc7b91beca96277ab852f741d31eae5b111b94f1.jpg",
  },
  {
    id: 6,
    title: "USB-хаб",
    description: "7 портов, поддержка 4K HDMI, быстрая зарядка",
    price: 7700,
    category: "Аксессуары",
    inStock: true,
    image: "https://ir.ozone.ru/s3/multimedia-j/w500/6623447491.jpg",
  },
  {
    id: 7,
    title: "Внешний SSD",
    description: "1 ТБ, скорость до 1050 МБ/с, USB 3.2",
    price: 44400,
    category: "Накопители",
    inStock: false,
    image: "https://c.dns-shop.ru/thumb/st1/fit/300/300/5ae1b4787dcf70520505d3092294956f/40b0ad2724708d4624dcbabb819304d53987d25dfc40d433d8167c1d88fa134b.jpg",
  },
  {
    id: 8,
    title: "Коврик для мыши",
    description: "Большой формат 900×400 мм, тканевая основа",
    price: 1400,
    category: "Аксессуары",
    inStock: true,
    image: "https://img.fix-price.com/insecure/rs:fit:800:800/plain/pim/images/_default_upload_bucket/5363008_1080_5.jpg",
  },
  {
    id: 9,
    title: "Настольная лампа",
    description: "Регулировка яркости и температуры, USB-порт",
    price: 5000,
    category: "Освещение",
    inStock: true,
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=400&h=300&fit=crop",
  },
  {
    id: 10,
    title: "Эргономичное кресло",
    description: "Эргономичная спинка, поясничная поддержка",
    price:32400,
    category: "Мебель",
    inStock: true,
    image: "https://c.dns-shop.ru/thumb/st1/fit/300/300/74b55db95a5264a3c7668b7c8c1385f4/4beef71e47c51ae8259c7809082d65c22b23955bf4680903f2932f3e49dd3b34.jpg",
  },
  {
    id: 11,
    title: "Микрофон конденсаторный",
    description: "Кардиоидная направленность, USB-C",
    price: 9800,
    category: "Аудио",
    inStock: true,
    image: "https://skifmusic.ru/static/article/2330/428-879.webp",
  },
  {
    id: 12,
    title: "Док-станция",
    description: "Thunderbolt 4, 96 Вт зарядки, 3× USB-A",
    price: 26400,
    category: "Аксессуары",
    inStock: true,
    image: "https://ir.ozone.ru/s3/multimedia-n/c1000/6291447239.jpg",
  },
]

export default function CatalogPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-10">
        <header className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight">Каталог товаров</h1>
          <p className="mt-2 text-muted-foreground">
            Всего товаров: {products.length}
          </p>
        </header>
        <ProductCatalog products={products} />
      </div>
    </main>
  )
}