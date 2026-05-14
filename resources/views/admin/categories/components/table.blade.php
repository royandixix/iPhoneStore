<div class="card border-0 shadow-sm rounded-3">
    <div class="card-body p-4">

        <div class="d-flex justify-content-between align-items-center mb-4">
            <div>
                <h5 class="fw-bold mb-1">Category List</h5>
                <p class="text-muted small mb-0">
                    List of all iPhone categories
                </p>
            </div>

            <form action="" method="GET" class="w-25">
                <input type="text" name="search" class="form-control" placeholder="Search category...">
            </form>
        </div>

        <div class="table-responsive">

            <table class="table align-middle">

                <thead class="table-light">
                    <tr>
                        <th>#</th>
                        <th>Category</th>
                        <th>Slug</th>
                        <th>Products</th>
                        <th>Status</th>
                        <th class="text-end">Action</th>
                    </tr>
                </thead>

                <tbody>

                    @forelse($categories as $category)
                        <tr>

                            <td>
                                {{ $loop->iteration }}
                            </td>

                            <td>
                                <div>
                                    <h6 class="mb-0 fw-semibold">
                                        {{ $category->name }}
                                    </h6>

                                    <small class="text-muted">
                                        {{ $category->description ?? 'No description' }}
                                    </small>
                                </div>
                            </td>

                            <td>
                                <span class="badge bg-light text-dark border">
                                    {{ $category->slug }}
                                </span>
                            </td>

                            <td>
                                <span class="fw-semibold">
                                    {{ $category->products_count }}
                                </span>
                            </td>

                            <td>
                                @if ($category->is_active)
                                    <span class="badge bg-success-subtle text-success border border-success-subtle">
                                        Active
                                    </span>
                                @else
                                    <span class="badge bg-danger-subtle text-danger border border-danger-subtle">
                                        Inactive
                                    </span>
                                @endif
                            </td>

                            <td class="text-end">

                                <a href="{{ route('admin.categories.show', $category->id) }}"
                                    class="btn btn-light btn-sm border">
                                    <i class="ti ti-eye"></i>
                                </a>

                                <a href="{{ route('admin.categories.edit', $category->id) }}"
                                    class="btn btn-light btn-sm border">
                                    <i class="ti ti-edit"></i>
                                </a>

                                <form action="{{ route('admin.categories.destroy', $category->id) }}" method="POST"
                                    class="d-inline">

                                    @csrf
                                    @method('DELETE')

                                    <button type="submit" class="btn btn-light btn-sm border text-danger"
                                        onclick="return confirm('Delete this category?')">

                                        <i class="ti ti-trash"></i>

                                    </button>

                                </form>

                            </td>

                        </tr>

                    @empty

                        <tr>
                            <td colspan="6" class="text-center py-5">
                                <div class="text-muted">
                                    <i class="ti ti-folder-off fs-1 d-block mb-2"></i>
                                    No categories found
                                </div>
                            </td>
                        </tr>
                    @endforelse

                </tbody>

            </table>

        </div>

    </div>
</div>
