<div class="mb-3">
    <label class="form-label">Category Name</label>

    <input type="text"
           name="name"
           class="form-control"
           value="{{ old('name',$category->name ?? '') }}">

    @error('name')
        <small class="text-danger">{{ $message }}</small>
    @enderror
</div>

<div class="mb-3">
    <label class="form-label">Description</label>

    <textarea name="description"
              rows="5"
              class="form-control">{{ old('description',$category->description ?? '') }}</textarea>
</div>

<div class="form-check">
    <input type="checkbox"
           name="is_active"
           value="1"
           class="form-check-input"
           {{ old('is_active',$category->is_active ?? true) ? 'checked' : '' }}>

    <label class="form-check-label">
        Active Category
    </label>
</div>