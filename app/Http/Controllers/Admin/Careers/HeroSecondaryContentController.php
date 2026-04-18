<?php

namespace App\Http\Controllers\Admin\Careers;

use App\Enums\CommonRangeNumbers;
use App\Enums\ModelColumns\CommonColumns;
use App\Enums\ModelColumns\UserColumns;
use App\Http\Controllers\Controller;
use App\Models\Careers\HeroSecondaryContent;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HeroSecondaryContentController extends Controller
{
    private function getAllContents()
    {
        return HeroSecondaryContent::with([
            'createdBy' => function ($query) {
                $query->select(
                    CommonColumns::ID,
                    UserColumns::NAME
                );
            },

            'updatedBy' => function ($query) {
                $query->select(
                    CommonColumns::ID,
                    UserColumns::NAME
                );
            },
        ])
            ->orderBy(CommonColumns::CREATED_AT, "DESC")
            ->paginate(CommonRangeNumbers::PER_PAGE_PAGINATE_NO);
    }

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('admin/careers/hero-secondary/TheHeroSecondaryContents', [
            'data' => $this->getAllContents(),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
