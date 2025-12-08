<?php

namespace App\Http\Controllers\Guest;

use App\Enums\ModelColumns\Careers\HeroMainContentColumns;
use App\Enums\ModelColumns\CommonColumns;
use App\Enums\PageSlugType;
use App\Http\Controllers\Controller;
use App\Models\Careers\CareersHeroMainContent;
use App\Models\Page;
use Illuminate\Http\Request;
use Inertia\Inertia;

use function Pest\Laravel\json;

class ServiceController extends Controller
{
    public function show($slug)
    {
        $pageSlug = PageSlugType::tryFrom($slug);

        $page = Page::where('slug', $pageSlug)->first();

        $data = ['page' => $page];

        // dd($slug);

        if ($pageSlug === PageSlugType::SERVICES) {

            return Inertia::render('TheServicesPage', $data);
        }

        if ($pageSlug === PageSlugType::ABOUT_US) {

            return Inertia::render('TheAboutUsPage', $data);
        }

        if ($pageSlug === PageSlugType::CLIENTS) {

            return Inertia::render('TheClientsPage', $data);
        }

        if ($pageSlug === PageSlugType::CONTACT_US) {

            return Inertia::render('TheContactUsPage', $data);
        }

        if ($pageSlug === PageSlugType::CAREERS) {

            return Inertia::render('TheCareersPage', ['data' => $this->getCareerPageData()]);
        }
    }

    private function getCareerPageData()
    {

        $data = CareersHeroMainContent::select(
            HeroMainContentColumns::HERO_MAIN_CONTENT,
            CommonColumns::ID
        )
            ->active()
            ->orderBy(CommonColumns::CREATED_AT, 'DESC')
            ->first();

        return $data;
    }
}
