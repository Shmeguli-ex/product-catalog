"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Package, ShoppingCart, Heart } from "lucide-react"

interface Product {
    id: number
    title: string
    description: string
    price: number
    category: string
    inStock: boolean
    image: string
}

interface ProductCatalogProps {
    products: Product[]
}

export function ProductCatalog({ products }: ProductCatalogProps) {

    const [favorites, setFavorites] = useState<number[]>([])

    const toggleFavorite = (id: number) => {
        setFavorites((prev) =>
            prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
        )
    }

    return (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
                <Card key={product.id} className="flex flex-col overflow-hidden">
                    <div className="relative h-48 w-full overflow-hidden bg-muted">
                        <img
                            src={product.image}
                            alt={product.title}
                            className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                        />
                        <Badge
                            variant={product.inStock ? "default" : "destructive"}
                            className="absolute right-3 top-3"
                        >
                            {product.inStock ? "В наличии" : "Нет в наличии"}
                        </Badge>
                    </div>

                    <CardHeader>
                        <div className="flex items-start justify-between gap-2">
                            <CardTitle className="text-lg">{product.title}</CardTitle>
                            <button
                                onClick={() => toggleFavorite(product.id)}
                                aria-label="Добавить в избранное"
                                className="shrink-0"
                            >
                                <Heart
                                    className={`h-5 w-5 transition-colors ${favorites.includes(product.id)
                                        ? "fill-red-500 text-red-500"
                                        : "text-muted-foreground"
                                        }`}
                                />
                            </button>
                        </div>
                        <CardDescription>{product.description}</CardDescription>
                    </CardHeader>

                    <CardContent className="flex-1">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Package className="h-4 w-4" />
                            <span>{product.category}</span>
                        </div>
                    </CardContent>

                    <CardFooter className="flex items-center justify-between border-t pt-4">
                        <span className="text-xl font-bold">
                            {product.price.toLocaleString("ru-RU")} ₽
                        </span>
                        <Button size="sm" disabled={!product.inStock}>
                            <ShoppingCart className="mr-2 h-4 w-4" />
                            В корзину
                        </Button>
                    </CardFooter>
                </Card>
            ))}
        </div>
    )
}