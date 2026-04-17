<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ShopController extends Controller
{
    /**
     * Shop index — trimite toate produsele active către Shop.jsx
     */
    public function index(Request $request)
    {
        $products = Product::where('status', 'active')
            ->orderBy('created_at', 'desc')
            ->get();

        return Inertia::render('Shop', [
            'products' => $products,
        ]);
    }

    public function show(Product $product)
    {
        abort_if($product->status !== 'active', 404);

        $related = Product::where('status', 'active')
            ->where('id', '!=', $product->id)
            ->when($product->category, fn($q) => $q->where('category', $product->category))
            ->inRandomOrder()
            ->limit(4)
            ->get();

        return Inertia::render('Shop/Show', [
            'product' => $product,
            'related' => $related,
        ]);
    }
}
