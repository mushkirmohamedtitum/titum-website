<?php

namespace App\Http\Controllers\Guest;

use App\Enums\ModelColumns\CommonColumns;
use App\Http\Controllers\Controller;
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

            $columns = [
                CommonColumns::CREATED_AT,
                CommonColumns::CREATED_BY,
                CommonColumns::UPDATED_AT,
                CommonColumns::UPDATED_BY
            ];
            $menus = MainMenuDetail::active()->get();

            $menus->makeHidden($columns);

            return Inertia::render('TheHomePage', ['menus' => $menus]);
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
