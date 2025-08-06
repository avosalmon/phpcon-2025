<?php

declare(strict_types=1);

namespace App\Http\Middleware;

use App\Models\Speaker;
use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Symfony\Component\HttpFoundation\Response;

class TerminateMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  Closure(Request): (Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        return $next($request);
    }

    /**
     * Handle tasks after the response has been sent to the browser.
     */
    public function terminate(Request $request, Response $response): void
    {
        Log::info('TerminateMiddleware start');

        Speaker::count();

        sleep(3);

        Log::info('TerminateMiddleware done');
    }
}
