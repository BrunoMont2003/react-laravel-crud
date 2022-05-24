<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class ProductController extends Controller
{
    public function index()
    {
        $products =  Product::all();
        if ($products->count() > 0) {
            return response($products, Response::HTTP_OK);
        } else {
            $message = "No products found";
            return response(["error" => $message], Response::HTTP_NOT_FOUND);
        }
    }

    public function store(Request $request)
    {
        try {
            $product = new Product();
            $product->name = $request->name;
            $product->description = $request->description;
            $product->price = $request->price;
            $product->save();
            return response($product, Response::HTTP_CREATED);
        } catch (\Throwable $th) {
            $message = $th->getMessage();
            return response(["error" => $message], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    public function show($id)
    {
        try {
            $product = Product::find($id);
            if ($product) {
                return response($product, Response::HTTP_OK);
            } else {
                $message = "Product not found";
                return response(["error" => $message], Response::HTTP_NOT_FOUND);
            }
        } catch (\Throwable $th) {
            $message = $th->getMessage();
            return response(["error" => $message], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    public function update(Request $request, $id)
    {
        try {
            $product = Product::findOrFail($id);
            $product->name = $request->name;
            $product->description = $request->description;
            $product->price = $request->price;
            $product->save();
            return response($product, Response::HTTP_OK);
        } catch (\Throwable $th) {
            $message = $th->getMessage();
            return response(["error" => $message], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    public function destroy($id)
    {
        try {
            $product = Product::find($id);
            if ($product) {
                $product->delete();
                return response(["Message" => "Product deleted"], Response::HTTP_OK);
            } else {
                $message = "Product not found";
                return response(["error" => $message], Response::HTTP_NOT_FOUND);
            }
        } catch (\Throwable $th) {
            $message = $th->getMessage();
            return response(["error" => $message], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }
}