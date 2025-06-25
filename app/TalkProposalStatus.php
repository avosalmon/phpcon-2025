<?php

declare(strict_types=1);

namespace App;

enum TalkProposalStatus: string
{
    case Pending = 'pending';
    case Approved = 'approved';
    case Rejected = 'rejected';

    public function label(): string
    {
        return match ($this) {
            self::Pending => '審査中',
            self::Approved => '採択',
            self::Rejected => '却下',
        };
    }
}
