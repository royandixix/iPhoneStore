<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use App\Models\Category;

class CategoryController extends Controller
{
    public function index()
    {
        $categories=Category::withCount('products')->latest()->paginate(10);
        return view('admin.categories.index',compact('categories'));
    }

    public function create()
    {
        return view('admin.categories.create');
    }

    public function store(Request $request)
    {
        $request->validate([
            'name'=>'required|string|max:255|unique:categories,name',
            'description'=>'nullable|string',
        ]);

        Category::create([
            'name'=>$request->name,
            'slug'=>Str::slug($request->name),
            'description'=>$request->description,
            'is_active'=>$request->has('is_active'),
        ]);

        return redirect()->route('admin.categories.index')->with('success','Category created successfully');
    }

    public function show(string $id)
    {
        $category=Category::with('products')->findOrFail($id);
        return view('admin.categories.show',compact('category'));
    }

    public function edit(string $id)
    {
        $category=Category::findOrFail($id);
        return view('admin.categories.edit',compact('category'));
    }

    public function update(Request $request,string $id)
    {
        $category=Category::findOrFail($id);

        $request->validate([
            'name'=>'required|string|max:255|unique:categories,name,'.$category->id,
            'description'=>'nullable|string',
        ]);

        $category->update([
            'name'=>$request->name,
            'slug'=>Str::slug($request->name),
            'description'=>$request->description,
            'is_active'=>$request->has('is_active'),
        ]);

        return redirect()->route('admin.categories.index')->with('success','Category updated successfully');
    }

    public function destroy(string $id)
    {
        $category=Category::findOrFail($id);
        $category->delete();

        return redirect()->route('admin.categories.index')->with('success','Category deleted successfully');
    }
}