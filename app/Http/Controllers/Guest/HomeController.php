<?php

namespace App\Http\Controllers\Guest;

use App\Enums\ModelColumns\Careers\HeroMainContentColumns;
use App\Enums\ModelColumns\CommonColumns;
use App\Http\Controllers\Controller;
use App\Models\Careers\CareersHeroMainContent;
use App\Models\Guest\MainMenuDetail;
use Exception;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        try {

            // $data = CareesHeroMainContent::select(
            //     HeroMainContentColumns::HERO_MAIN_CONTENT,
            //     CommonColumns::ID
            // )
            //     ->active()
            //     ->orderBy(CommonColumns::CREATED_AT, 'DESC')
            //     ->first();r

            // dd($data);

            return Inertia::render('TheHomePage', ['data' => []]);
        } catch (\Throwable $th) {
            throw new Exception($th);
        }
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
