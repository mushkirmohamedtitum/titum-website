<?php

namespace App\Http\Controllers\Admin\Careers;

use App\Enums\CommonRangeNumbers;
use App\Enums\ModelColumns\Careers\HeroMainContentColumns;
use App\Enums\ModelColumns\CommonColumns;
use App\Enums\ModelColumns\UserColumns;
use App\Enums\StateTypes;
use App\Http\Controllers\Controller;
use App\Models\Careers\CareersHeroMainContent;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class HeroMainController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $data = CareersHeroMainContent::with([
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

        return Inertia::render('admin/careers/hero-main/TheHeroContents', ['data' => $data]);
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
        // dd($request->all());
        try {
            DB::beginTransaction();

            CareersHeroMainContent::create([
                HeroMainContentColumns::HERO_MAIN_CONTENT => $request['mainContent'],
                CommonColumns::IS_ACTIVE => StateTypes::ACTIVE,
                CommonColumns::CREATED_BY => getCurrentUserId(),
                CommonColumns::UPDATED_BY => getCurrentUserId(),
                CommonColumns::CREATED_AT => getCurrentDateTime(),
                CommonColumns::UPDATED_AT => getCurrentDateTime()
            ]);

            DB::commit();

            return redirect()->back()->with('success', 'New record created.');
        } catch (\Throwable $th) {
            DB::rollBack();
            throw new Exception($th);
        }
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
        try {
            DB::beginTransaction();

            $record = CareersHeroMainContent::find($id);

            $record->update([
                HeroMainContentColumns::HERO_MAIN_CONTENT => $request['mainContent'],
                CommonColumns::UPDATED_BY => getCurrentUserId(),
                CommonColumns::UPDATED_AT => getCurrentDateTime()
            ]);

            DB::commit();

            return redirect()->back()->with('success', 'Record has been updated!');
        } catch (\Throwable $th) {
            DB::rollBack();
            throw new Exception($th);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        try {
            $data = CareersHeroMainContent::find($id);

            $data->delete();

            return redirect()->back()->with('success', 'Record deleted');
        } catch (\Throwable $th) {
            throw new Exception($th);
        }
    }

    public function updateStatus(string $id)
    {
        try {

            DB::beginTransaction();

            $record = CareersHeroMainContent::find($id);

            $status = changeStatus($record);

            $record->update([
                CommonColumns::IS_ACTIVE => $status,
                CommonColumns::UPDATED_BY => getCurrentUserId(),
                CommonColumns::UPDATED_AT => getCurrentDateTime()
            ]);

            DB::commit();

            return redirect()->back()->with('success', 'Record status updated');
        } catch (\Throwable $th) {
            DB::rollBack();
            throw new Exception($th);
        }
    }
}
